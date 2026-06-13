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
    dimensions: { width: 0, height: 0 },
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
            // Restart loop if mouse is active or strength is above threshold
            if (state.mouse.active || state.strength.current > 0.001) {
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

    // Gravitational vector warping formula
    function getDisplacedPoint(x: number, y: number, mouseX: number, mouseY: number, strength: number) {
      const dx = mouseX - x;
      const dy = mouseY - y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const influenceRadius = 180; // Field size
      const maxDisplacement = 28;  // Strength of pull

      if (distance < influenceRadius && distance > 0.1) {
        // Smoothstep / cubic ease-out distortion curve
        const t = 1 - distance / influenceRadius;
        const ease = t * t * (3 - 2 * t);
        const pull = maxDisplacement * ease * strength;

        return {
          x: x + (dx / distance) * pull,
          y: y + (dy / distance) * pull,
        };
      }

      return { x, y };
    }

    // Main rendering logic
    function drawGrid(context: CanvasRenderingContext2D, s: typeof state) {
      const { width, height } = s.dimensions;
      const mouseX = s.mouse.x;
      const mouseY = s.mouse.y;
      const strength = s.strength.current;
      const isDistorted = strength > 0.001;

      context.clearRect(0, 0, width, height);

      const gridSpacing = 50; // Size of architectural grid square
      const lineStep = 10;    // Interpolation resolution for smooth bending curves

      // Draw Grid Lines (Vertical & Horizontal)
      context.lineWidth = 0.5;
      context.strokeStyle = "rgba(28, 26, 23, 0.07)"; // Elegant warm architectural color

      // Vertical lines
      for (let x = 0; x <= width; x += gridSpacing) {
        context.beginPath();
        for (let y = 0; y <= height; y += lineStep) {
          const pt = isDistorted 
            ? getDisplacedPoint(x, y, mouseX, mouseY, strength) 
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
            ? getDisplacedPoint(x, y, mouseX, mouseY, strength) 
            : { x, y };

          if (x === 0) {
            context.moveTo(pt.x, pt.y);
          } else {
            context.lineTo(pt.x, pt.y);
          }
        }
        context.stroke();
      }

      // Draw Architectural Drafting Intersect Dots
      context.fillStyle = "rgba(28, 26, 23, 0.16)";
      for (let x = 0; x <= width; x += gridSpacing) {
        for (let y = 0; y <= height; y += gridSpacing) {
          const pt = isDistorted 
            ? getDisplacedPoint(x, y, mouseX, mouseY, strength) 
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

      drawGrid(ctx, state);

      // If loop is fading out and attraction is completely gone, stop loop to save CPU
      if (state.strength.target === 0 && state.strength.current < 0.001) {
        state.strength.current = 0;
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

    // Touch Support for Mobile devices
    const onTouchStart = (e: TouchEvent) => {
      const rect = container.getBoundingClientRect();
      const touch = e.touches[0];
      state.mouse.targetX = touch.clientX - rect.left;
      state.mouse.targetY = touch.clientY - rect.top;
      // Instantly position tracking coordinates to avoid sliding from previous location
      state.mouse.x = state.mouse.targetX;
      state.mouse.y = state.mouse.targetY;
      
      state.mouse.active = true;
      state.strength.target = 1;
      
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
      state.strength.target = 1;
    };

    const onTouchEnd = () => {
      state.strength.target = 0;
      state.mouse.active = false;
    };

    // Attach listeners to container to trace interaction fields
    container.addEventListener("mousemove", onMouseMove, { passive: true });
    container.addEventListener("mouseenter", onMouseEnter, { passive: true });
    container.addEventListener("mouseleave", onMouseLeave, { passive: true });
    container.addEventListener("touchstart", onTouchStart, { passive: true });
    container.addEventListener("touchmove", onTouchMove, { passive: true });
    container.addEventListener("touchend", onTouchEnd, { passive: true });

    return () => {
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      stopLoop();
      container.removeEventListener("mousemove", onMouseMove);
      container.removeEventListener("mouseenter", onMouseEnter);
      container.removeEventListener("mouseleave", onMouseLeave);
      container.removeEventListener("touchstart", onTouchStart);
      container.removeEventListener("touchmove", onTouchMove);
      container.removeEventListener("touchend", onTouchEnd);
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
