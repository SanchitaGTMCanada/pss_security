import Header from "@/components/layout/Header";
import Hero from "@/components/home/Hero";
import ServicesPreview from "@/components/home/ServicesPreview";
import AboutPreview from "@/components/home/AboutPreview";
import WhyChoose from "@/components/home/WhyChoose";
import MissionVision from "@/components/home/MissionVision";
import BookingSection from "@/components/home/BookingSection";
import FAQSection from "@/components/faq/FAQSection";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <ServicesPreview />
        <AboutPreview/>
        <WhyChoose/>
        <MissionVision/>
        <BookingSection/>
        <FAQSection/>
      </main>
    </>
  );
}