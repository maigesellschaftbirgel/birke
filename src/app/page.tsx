import NavigationBar from "@/_components/navigation-bar/navigation-bar";
import Header from "@/_components/header";
import Footer from "@/_components/footer";
import EventSection from "@/_components/event-section";
import Drawer from "@/_components/drawer";

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
