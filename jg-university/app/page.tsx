import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Programs from "@/components/Programs";
import Strengths from "@/components/Strengths";
import Partners from "@/components/Partners";
import Campus from "@/components/Campus";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Programs />
      <Strengths />
      <Partners />
      <Campus />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
