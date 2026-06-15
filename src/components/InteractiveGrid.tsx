"use client";

import React, { useEffect, useRef, useState } from "react";

interface InteractiveGridProps {
  opacity?: number;
}

export default function InteractiveGrid({ opacity = 0.5 }: InteractiveGridProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isLowEndDevice, setIsLowEndDevice] = useState(false);

  // Animation & physics state stored in refs for 60fps performance without re-renders
  const stateRef = useRef({
    mouse: { x: 0, y: 0, targetX: 0, targetY: 0, active: false },
    strength: { current: 0, target: 0 },
    pulse: { x: 0, y: 0, radius: 0, strength: 0, active: false },
    dimensions: { width: 0, height: 0 },
    scrollOffset: { currentY: 0, targetY: 0 },
    animationFrameId: 0,
    isLoopRunning: false,
    isVisible: false,
  });

  useEffect(() => {
    // Graceful degradation check: disable animations for users with prefers-reduced-motion
    // or very low memory devices (e.g. < 4GB RAM if supported by API)
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      setIsLowEndDevice(true);
    }

    if (typeof navigator !== "undefined" && "deviceMemory" in navigator) {
      const devMem = (navigator as Navigator & { deviceMemory?: number }).deviceMemory;
      if (devMem !== undefined && devMem < 4) {
        setIsLowEndDevice(true);
      }
    }
  }, []);

  useEffect(() => {
    if (isLowEndDevice) return;

    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const state = stateRef.current;

    // Handle high-DPI / Retina displays
    const handleResize = () => {
      const rect = container.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      
      state.dimensions.width = rect.width;
      state.dimensions.height = rect.height;

      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;

      ctx.scale(dpr, dpr);

      // Redraw static grid if loop isn't running
      if (!state.isLoopRunning) {
        drawGrid(ctx, state);
      }
    };

    const resizeObserver = new ResizeObserver(() => {
      handleResize();
    });
    resizeObserver.observe(container);

    // Initial sizing
    handleResize();

    // Intersection Observer: only animate when the section is visible in the viewport
    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          state.isVisible = entry.isIntersecting;
          if (entry.isIntersecting) {
            // Restart loop if mouse is active, strength is above threshold, or pulse is active
            if (state.mouse.active || state.strength.current > 0.001 || state.pulse.active) {
              startLoop();
            }
          } else {
            stopLoop();
          }
        });
      },
      { threshold: 0.01 }
    );
    intersectionObserver.observe(container);

    // Gravitational vector warping formula (combining mouse pull and mobile ripple wave)
    function getDisplacedPoint(
      x: number,
      y: number,
      mouseX: number,
      mouseY: number,
      strength: number,
      pulse: typeof stateRef.current.pulse
    ) {
      const pt = { x, y };

      // 1. Cursor Gravitational Pull
      if (strength > 0.001) {
        const dx = mouseX - pt.x;
        const dy = mouseY - pt.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const influenceRadius = 270; // Field size (increased by 50%)
        const maxDisplacement = 28;  // Strength of pull

        if (distance < influenceRadius && distance > 0.1) {
          // Smoothstep / cubic ease-out distortion curve
          const t = 1 - distance / influenceRadius;
          const ease = t * t * (3 - 2 * t);
          const pull = maxDisplacement * ease * strength;

          pt.x += (dx / distance) * pull;
          pt.y += (dy / distance) * pull;
        }
      }

      // 2. Mobile Touch Gravity Wave Ripple
      if (pulse.active && pulse.strength > 0.001) {
        const dx = pt.x - pulse.x;
        const dy = pt.y - pulse.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const rippleWidth = 60; // Wave width
        const maxPush = 20;     // Outward wave push strength

        if (distance > 0.1) {
          const diff = Math.abs(distance - pulse.radius);
          if (diff < rippleWidth) {
            const t = 1 - diff / rippleWidth;
            const ease = t * t * (3 - 2 * t);
            const push = maxPush * ease * pulse.strength;

            pt.x += (dx / distance) * push;
            pt.y += (dy / distance) * push;
          }
        }
      }

      // 3. Scroll Warp Wave bending in the middle
      if (Math.abs(stateRef.current.scrollOffset.currentY) > 0.01) {
        const wave = stateRef.current.dimensions.width > 0 ? Math.sin((x / stateRef.current.dimensions.width) * Math.PI) : 0;
        pt.y += stateRef.current.scrollOffset.currentY * wave;
      }

      return pt;
    }

    // Main rendering logic
    function drawGrid(context: CanvasRenderingContext2D, s: typeof state) {
      const { width, height } = s.dimensions;
      const mouseX = s.mouse.x;
      const mouseY = s.mouse.y;
      const strength = s.strength.current;
      const pulse = s.pulse;

      context.clearRect(0, 0, width, height);

      const gridSpacing = 50; // Size of architectural grid square
      const lineStep = 10;    // Interpolation resolution for smooth bending curves

      // 1. Draw a soft, warm background glow behind focus zone on desktop
      if (s.mouse.active && strength > 0.001) {
        context.beginPath();
        const glowGrad = context.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, 270);
        glowGrad.addColorStop(0, "rgba(255, 94, 19, 0.11)"); // soft orange glow (increased by 57%)
        glowGrad.addColorStop(1, "rgba(255, 94, 19, 0)");
        context.fillStyle = glowGrad;
        context.arc(mouseX, mouseY, 270, 0, Math.PI * 2);
        context.fill();
      }

      // 2. Draw soft mobile expanding ring glow
      if (pulse.active && pulse.strength > 0.001) {
        context.beginPath();
        context.arc(pulse.x, pulse.y, pulse.radius, 0, Math.PI * 2);
        context.lineWidth = 40;
        context.strokeStyle = `rgba(255, 94, 19, ${0.12 * pulse.strength})`;
        context.stroke();
      }

      // 3. Create dynamic styling for grid lines
      let strokeStyle: string | CanvasGradient = "rgba(28, 26, 23, 0.18)"; // Base visibility (increased by 63%)
      
      if (s.mouse.active && strength > 0.001) {
        const lineGrad = context.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, 270);
        lineGrad.addColorStop(0, "rgba(255, 94, 19, 0.60)"); // glowing orange at center focus (increased by 50%)
        lineGrad.addColorStop(0.35, "rgba(28, 26, 23, 0.50)"); // warm dark focus color (increased by 51%)
        lineGrad.addColorStop(1, "rgba(28, 26, 23, 0.18)"); // base grid style
        strokeStyle = lineGrad;
      } else if (pulse.active && pulse.strength > 0.001) {
        // Highlight lines passing through the ripple wave
        const lineGrad = context.createRadialGradient(pulse.x, pulse.y, Math.max(0, pulse.radius - 30), pulse.x, pulse.y, pulse.radius + 30);
        lineGrad.addColorStop(0, "rgba(28, 26, 23, 0.18)");
        lineGrad.addColorStop(0.5, `rgba(255, 94, 19, ${0.25 * pulse.strength})`);
        lineGrad.addColorStop(1, "rgba(28, 26, 23, 0.18)");
        strokeStyle = lineGrad;
      }

      context.lineWidth = 0.5;
      context.strokeStyle = strokeStyle;

      const isDistorted = 
        strength > 0.001 || 
        (pulse.active && pulse.strength > 0.001) ||
        Math.abs(s.scrollOffset.currentY) > 0.01;

      // Vertical lines
      for (let x = 0; x <= width; x += gridSpacing) {
        context.beginPath();
        for (let y = 0; y <= height; y += lineStep) {
          const pt = isDistorted 
            ? getDisplacedPoint(x, y, mouseX, mouseY, strength, pulse) 
            : { x, y };

          if (y === 0) {
            context.moveTo(pt.x, pt.y);
          } else {
            context.lineTo(pt.x, pt.y);
          }
        }
        context.stroke();
      }

      // Horizontal lines
      for (let y = 0; y <= height; y += gridSpacing) {
        context.beginPath();
        for (let x = 0; x <= width; x += lineStep) {
          const pt = isDistorted 
            ? getDisplacedPoint(x, y, mouseX, mouseY, strength, pulse) 
            : { x, y };

          if (x === 0) {
            context.moveTo(pt.x, pt.y);
          } else {
            context.lineTo(pt.x, pt.y);
          }
        }
        context.stroke();
      }

      // 4. Create dynamic styling for architectural dots
      let fillStyle: string | CanvasGradient = "rgba(28, 26, 23, 0.35)"; // Base dots visibility (increased by 59%)
      
      if (s.mouse.active && strength > 0.001) {
        const dotGrad = context.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, 270);
        dotGrad.addColorStop(0, "rgba(255, 94, 19, 0.90)"); // orange dot focus (increased by 50%)
        dotGrad.addColorStop(0.35, "rgba(28, 26, 23, 0.60)"); // stronger dots near focus (increased by 50%)
        dotGrad.addColorStop(1, "rgba(28, 26, 23, 0.35)");
        fillStyle = dotGrad;
      } else if (pulse.active && pulse.strength > 0.001) {
        const dotGrad = context.createRadialGradient(pulse.x, pulse.y, Math.max(0, pulse.radius - 30), pulse.x, pulse.y, pulse.radius + 30);
        dotGrad.addColorStop(0, "rgba(28, 26, 23, 0.35)");
        dotGrad.addColorStop(0.5, `rgba(255, 94, 19, ${0.45 * pulse.strength})`);
        dotGrad.addColorStop(1, "rgba(28, 26, 23, 0.35)");
        fillStyle = dotGrad;
      }

      context.fillStyle = fillStyle;
      for (let x = 0; x <= width; x += gridSpacing) {
        for (let y = 0; y <= height; y += gridSpacing) {
          const pt = isDistorted 
            ? getDisplacedPoint(x, y, mouseX, mouseY, strength, pulse) 
            : { x, y };

          context.beginPath();
          context.arc(pt.x, pt.y, 1.2, 0, Math.PI * 2);
          context.fill();
        }
      }
    }

    const loop = () => {
      // Lerping coordinates for a fluid, lag-free liquid movement
      state.mouse.x += (state.mouse.targetX - state.mouse.x) * 0.09;
      state.mouse.y += (state.mouse.targetY - state.mouse.y) * 0.09;
      state.strength.current += (state.strength.target - state.strength.current) * 0.07;

      // Scroll reactive lerp and decay
      state.scrollOffset.currentY += (state.scrollOffset.targetY - state.scrollOffset.currentY) * 0.1;
      state.scrollOffset.targetY += (0 - state.scrollOffset.targetY) * 0.15;

      // Update pulse parameters
      if (state.pulse.active) {
        state.pulse.radius += 6.5; // expand speed
        state.pulse.strength -= 0.02; // strength decay

        if (state.pulse.strength <= 0) {
          state.pulse.active = false;
          state.pulse.strength = 0;
        }
      }

      drawGrid(ctx, state);

      // Check if we need to continue the loop
      const isMouseAnimating = state.strength.target > 0 || state.strength.current > 0.001;
      const isPulseAnimating = state.pulse.active;
      const isScrollAnimating = Math.abs(state.scrollOffset.currentY) > 0.05 || Math.abs(state.scrollOffset.targetY) > 0.05;

      if (!isMouseAnimating && !isPulseAnimating && !isScrollAnimating) {
        state.strength.current = 0;
        state.scrollOffset.currentY = 0;
        drawGrid(ctx, state); // Draw once static
        stopLoop();
        return;
      }

      if (state.isVisible) {
        state.animationFrameId = requestAnimationFrame(loop);
      }
    };

    const startLoop = () => {
      if (state.isLoopRunning) return;
      state.isLoopRunning = true;
      state.animationFrameId = requestAnimationFrame(loop);
    };

    const stopLoop = () => {
      state.isLoopRunning = false;
      cancelAnimationFrame(state.animationFrameId);
    };

    // Event handlers
    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      state.mouse.targetX = e.clientX - rect.left;
      state.mouse.targetY = e.clientY - rect.top;
      state.mouse.active = true;
      state.strength.target = 1;
      
      if (state.isVisible) {
        startLoop();
      }
    };

    const onMouseEnter = () => {
      state.strength.target = 1;
      if (state.isVisible) {
        startLoop();
      }
    };

    const onMouseLeave = () => {
      state.strength.target = 0;
      state.mouse.active = false;
    };

    // Click support for gravity pulse on desktop/touch clicks
    const onMouseDown = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      state.pulse.x = e.clientX - rect.left;
      state.pulse.y = e.clientY - rect.top;
      state.pulse.radius = 0;
      state.pulse.strength = 1.0;
      state.pulse.active = true;

      if (state.isVisible) {
        startLoop();
      }
    };

    // Touch Support for Mobile devices (Ripples)
    const onTouchStart = (e: TouchEvent) => {
      const rect = container.getBoundingClientRect();
      const touch = e.touches[0];
      
      // Track coordinates for soft drag pull
      state.mouse.targetX = touch.clientX - rect.left;
      state.mouse.targetY = touch.clientY - rect.top;
      state.mouse.x = state.mouse.targetX;
      state.mouse.y = state.mouse.targetY;
      state.mouse.active = true;
      state.strength.target = 0.5; // mild drag pull

      // Trigger expanding mobile ripple pulse
      state.pulse.x = state.mouse.targetX;
      state.pulse.y = state.mouse.targetY;
      state.pulse.radius = 0;
      state.pulse.strength = 1.0;
      state.pulse.active = true;
      
      if (state.isVisible) {
        startLoop();
      }
    };

    const onTouchMove = (e: TouchEvent) => {
      const rect = container.getBoundingClientRect();
      const touch = e.touches[0];
      state.mouse.targetX = touch.clientX - rect.left;
      state.mouse.targetY = touch.clientY - rect.top;
      state.mouse.active = true;
      state.strength.target = 0.5;
    };

    const onTouchEnd = () => {
      state.strength.target = 0;
      state.mouse.active = false;
    };

    let lastScrollY = typeof window !== "undefined" ? window.scrollY : 0;
    const onScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY;
      lastScrollY = currentScrollY;

      // Limit displacement target delta
      state.scrollOffset.targetY = Math.max(-35, Math.min(35, delta * 0.35));

      if (state.isVisible) {
        startLoop();
      }
    };

    // Attach listeners to parent element to trace interaction fields across the entire section
    const targetElement = container.parentElement || container;

    targetElement.addEventListener("mousemove", onMouseMove, { passive: true });
    targetElement.addEventListener("mouseenter", onMouseEnter, { passive: true });
    targetElement.addEventListener("mouseleave", onMouseLeave, { passive: true });
    targetElement.addEventListener("mousedown", onMouseDown, { passive: true });
    targetElement.addEventListener("touchstart", onTouchStart, { passive: true });
    targetElement.addEventListener("touchmove", onTouchMove, { passive: true });
    targetElement.addEventListener("touchend", onTouchEnd, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      stopLoop();
      targetElement.removeEventListener("mousemove", onMouseMove);
      targetElement.removeEventListener("mouseenter", onMouseEnter);
      targetElement.removeEventListener("mouseleave", onMouseLeave);
      targetElement.removeEventListener("mousedown", onMouseDown);
      targetElement.removeEventListener("touchstart", onTouchStart);
      targetElement.removeEventListener("touchmove", onTouchMove);
      targetElement.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("scroll", onScroll);
    };
  }, [isLowEndDevice]);

  if (isLowEndDevice) {
    // Graceful degradation fallback: static pure CSS grid pattern
    return (
      <div 
        className="absolute inset-0 bg-grid-pattern pointer-events-none z-0" 
        style={{ opacity }} 
      />
    );
  }

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 pointer-events-auto z-0 overflow-hidden"
      style={{ opacity }}
    >
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 pointer-events-none"
      />
    </div>
  );
}
