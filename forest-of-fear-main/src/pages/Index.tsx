import HeroSection from "@/components/HeroSection";
import WhatsNewSection from "@/components/WhatsNewSection";
import ExperiencesSection from "@/components/ExperiencesSection";
import TicketingSection from "@/components/TicketingSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <WhatsNewSection />
      <ExperiencesSection />
      <TicketingSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
