import type { Metadata, Viewport } from "next";
import TopBanner from "@/components/top-banner";
import Navbar from "@/components/navbar";
import MainFooter from "@/components/main-footer";
import FloatingIcons from "@/components/floatingIcons/FloatingIcons";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
   <div>
  
        <TopBanner />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <FloatingIcons
          facebookPage="hairchinhsalon"
          zaloNumber="0967100552"
          phoneNumber="0967100552"
        />
        <MainFooter />
    </div>
  );
}
