import type { Metadata } from "next";
import ContactPage from "@/components/ContactPage";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "BrickBytes | Contact Us",
  description: "Get in touch with BrickBytes. Book a demo, reach us via WhatsApp or email, or submit a project inquiry.",
  path: "/contact",
});

export default function ContactRoute() {
  return (
    <div className="relative min-h-screen">
      <main>
        <ContactPage />
      </main>
    </div>
  );
}
