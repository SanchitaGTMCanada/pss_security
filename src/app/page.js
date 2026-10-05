import Header from "@/components/layout/Header";
import Hero from "@/components/home/Hero";
import ServicesPreview from "@/components/home/ServicesPreview";
import AboutPreview from "@/components/home/AboutPreview";
import WhyChoose from "@/components/home/WhyChoose";
import MissionVision from "@/components/home/MissionVision";

import FAQSection from "@/components/faq/FAQSection";
import Footer from "@/components/layout/Footer";
import Team from "@/components/home/Team";
import BookingSection from "@/components/home/BookingSection";

export default function Home() {
  return (
    <>
     

      <main>
        <Hero />
        <ServicesPreview />
        <AboutPreview/>
        <WhyChoose/>
        <MissionVision/>
        <Team/>
        <BookingSection/>
        <FAQSection/>
    
      </main>
        
    </>
  );
}