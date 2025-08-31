@@ .. @@
+import Navigation from "@/components/Navigation";
 import HeroSection from "@/components/HeroSection";
 import WhatsNewSection from "@/components/WhatsNewSection";
 import ExperiencesSection from "@/components/ExperiencesSection";
@@ .. @@

 const Index = () => {
   return (
     <div className="min-h-screen">
+      <Navigation />
       <HeroSection />
       <WhatsNewSection />
       <ExperiencesSection />