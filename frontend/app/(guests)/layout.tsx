"use client";
import Footer from "@/components/common/Footer";

export default function GuestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main className="20">
        {children}
      </main>
    <Footer />
    </>
  )
}
