import Nav from "@/components/site/nav";
import Hero from "@/components/site/hero";
import About from "@/components/site/about";
import PastEvents from "@/components/site/past-events";
import Qualify from "@/components/site/qualify";
import Schedule from "@/components/site/schedule";
import Covered from "@/components/site/covered";
import Sponsors from "@/components/site/sponsors";
import FAQ from "@/components/site/faq";
import Footer from "@/components/site/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <PastEvents />
        <Qualify />
        <Schedule />
        <Covered />
        <FAQ />
        <Sponsors />
      </main>
      <Footer />
    </>
  );
}
