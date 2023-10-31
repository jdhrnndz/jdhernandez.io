import SiteHeader from "./SiteHeader";
import Navigation from "./Navigation";
import AnimatedBackground from "./AnimatedBackground";
import Omnibar from "./Omnibar";
import DrawerNavigation from "./DrawerNavigation";

export default function Layout({ children }) {
  return (
    <main className="overflow-y-auto">
      <header className="container h-screen flex flex-col justify-start gap-y-4">
        <SiteHeader>
          <Navigation />
        </SiteHeader>
        {children}
      </header>
      <DrawerNavigation />
      <AnimatedBackground />
      <Omnibar />
    </main>
  );
}
