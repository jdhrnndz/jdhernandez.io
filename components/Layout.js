'use client'

import SiteHeader from "./SiteHeader";
import Navigation from "./Navigation";
import AnimatedBackground from '@components/AnimatedBackground';

export default function Layout({ children }) {
  return (
    <main className="overflow-y-auto">
      <header className="container h-screen flex flex-col justify-start gap-y-4">
        <SiteHeader>
          <Navigation />
        </SiteHeader>
        {children}
      </header>
      <AnimatedBackground />
    </main>
  );
}
