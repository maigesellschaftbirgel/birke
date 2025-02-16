import NavigationBar from "@/_components/layout/navigation-bar/navigation-bar";
import Header from "@/_components/layout/header";
import Footer from "@/_components/layout/footer";
import EventSection from "@/_components/event-section/event-section";
import Drawer from "@/_components/layout/drawer";

export default function Home() {
  return (
    <Drawer>
      <NavigationBar />

      <Header />
      <main>
        <p className="p-8 text-xs font-light">• • • • • • •</p>
        <EventSection />
      </main>
      <Footer />
    </Drawer>
  );
}
