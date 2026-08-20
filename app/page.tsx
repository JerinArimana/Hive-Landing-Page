import Image from "next/image";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import LifeAtHive from "./components/LifeAtHive";
import SignatureHive from "./components/SignatureHive";
import Resort from "./components/Resort";
import Events from "./components/Events";
import InstragramHive from "./components/IstagramHive";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="">
      <main>
         <Header />
        <div className="min-h-screen">
         
          <HeroSection />
          <LifeAtHive/>
          <SignatureHive/>
          <Resort/>
          <Events/>
          <InstragramHive/>
          <Footer/>
        </div>
      </main>
    </div>
  );
}
