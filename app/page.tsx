import Image from "next/image";
import Hero from "./_components/Hero";
import Navbar from "./_components/Navbar";
// import Services from "./_components/Services";
import ServicesCards from "./_components/Services";
import ValuesSection from "./_components/OurValues";
// import Services from "./_components/services";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ServicesCards />
      <ValuesSection />
    </>
  );
}
