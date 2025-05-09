import About from "@/components/About";
import ContactForm from "@/components/ContactForm";
import FAQ from "@/components/FAQ";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Location from "@/components/location";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Whatsapp from "@/components/Whatsapp";
import WZPButton from "@/components/WZPButton";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Whatsapp />
      <FAQ />
      <Location />
      <ContactForm />
      <WZPButton />
    </div>
  );
}
