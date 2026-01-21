import Image from "next/image";
import Hero from "./_components/Hero";
import Navbar from "./_components/Navbar";
// import Services from "./_components/Services";
import ServicesCards from "./_components/Services";
import ValuesSection from "./_components/OurValues";
import CareersPage from "./_components/Carrier";
import WhyMHGlobal from "./_components/WhyMHGlobal";
import WhatsAppCTA from "./_components/WhatsAppCTA";
import Client from "./_components/Client";
import AboutUs from "./_components/AboutUs";
// import Services from "./_components/services";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ServicesCards />

      <ValuesSection />
      <CareersPage />

      <WhatsAppCTA />
      <WhyMHGlobal />
      <Client />
      <AboutUs />
    </>
  );
}
