@@ .. @@
 import { Button } from "@/components/ui/button";
 import introVideo from "@/assets/intro-video.mp4";
 import foreverForestLogo from "@/assets/forever-forest-logo.png";

 const HeroSection = () => {
   return (
   )
 }
-    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
+    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
       {/* Video Background */}
       <div className="absolute inset-0">
         <video 
@@ .. @@
         </video>
         {/* Video Overlay for Professional Look */}
-        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
+        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
       </div>
       
       {/* Professional Glass Panel */}
-      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
+      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto pt-20">
         <div className="glass-effect rounded-3xl p-12 md:p-16">
           {/* Logo */}
           <div className="mb-8 animate-fade-in">
@@ .. @@
           
           {/* Main Heading */}
-          <h1 className="text-4xl md:text-6xl lg:text-7xl font-metal text-fire mb-4 animate-fade-in">
+          <h1 className="text-5xl md:text-7xl lg:text-8xl font-metal text-fire mb-4 animate-fade-in text-glow">
             FOREVER FOREST
           </h1>
           
-          <h2 className="text-2xl md:text-4xl lg:text-5xl font-metal text-blood mb-6 animate-fade-in">
+          <h2 className="text-3xl md:text-5xl lg:text-6xl font-metal text-blood mb-8 animate-fade-in">
             Trolly of Terror 2025
           </h2>
           
           {/* Professional Tagline */}
-          <p className="text-lg md:text-xl text-foreground/90 mb-6 font-didot animate-fade-in max-w-3xl mx-auto leading-relaxed">
+          <p className="text-xl md:text-2xl text-foreground/90 mb-8 font-didot animate-fade-in max-w-4xl mx-auto leading-relaxed">
             ALL INCLUSIVE Halloween Experience • No Additional Costs • Everything Included!
           </p>
           
           {/* Location with Professional Styling */}
-          <div className="flex items-center justify-center gap-2 mb-12 text-accent font-didot animate-fade-in">
-            <span className="w-4 h-4 bg-accent rounded-full"></span>
-            <span className="text-base md:text-lg">354 Bremen Ave, Egg Harbor City, NJ • 10 miles from Atlantic City</span>
+          <div className="flex items-center justify-center gap-3 mb-12 text-accent font-didot animate-fade-in">
+            <span className="w-3 h-3 bg-accent rounded-full animate-pulse"></span>
+            <span className="text-lg md:text-xl">354 Bremen Ave, Egg Harbor City, NJ</span>
+            <span className="hidden md:inline">•</span>
+            <span className="hidden md:inline text-lg">10 miles from Atlantic City</span>
           </div>
           
           {/* Professional CTA Buttons */}
-          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in mb-12">
+          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in mb-16">
             <Button 
               variant="blood" 
               size="xl"
-              className="pulse-blood shadow-2xl"
+              className="pulse-blood shadow-2xl font-metal text-xl px-12"
             >
-              Reserve Your Experience
+              🎃 Reserve Your Terror
             </Button>
             
-              <Button 
+            <Button 
               variant="ghost-halloween" 
-              size="lg"
-              className="font-didot backdrop-blur-sm"
+              size="xl"
+              className="font-didot backdrop-blur-sm border-2"
             >
               <span className="mr-2">▶</span>
               Watch Experience Preview
@@ .. @@
           
           {/* Professional Stats Row */}
-          <div className="grid grid-cols-3 gap-8 mb-8 pt-8 border-t border-primary/20">
+          <div className="grid grid-cols-3 gap-8 pt-8 border-t border-primary/30">
             <div className="text-center">
-              <div className="text-2xl md:text-3xl font-metal text-fire mb-1">2025</div>
-              <div className="text-xs md:text-sm text-muted-foreground font-didot">Season</div>
+              <div className="text-3xl md:text-4xl font-metal text-fire mb-2">2025</div>
+              <div className="text-sm md:text-base text-muted-foreground font-didot">Season</div>
             </div>
             <div className="text-center">
-              <div className="text-2xl md:text-3xl font-metal text-fire mb-1">ALL AGES</div>
-              <div className="text-xs md:text-sm text-muted-foreground font-didot">Available</div>
+              <div className="text-3xl md:text-4xl font-metal text-fire mb-2">ALL AGES</div>
+              <div className="text-sm md:text-base text-muted-foreground font-didot">Welcome</div>
             </div>
             <div className="text-center">
-              <div className="text-2xl md:text-3xl font-metal text-fire mb-1">Oct 1</div>
-              <div className="text-xs md:text-sm text-muted-foreground font-didot">Opening Night</div>
+              <div className="text-3xl md:text-4xl font-metal text-fire mb-2">Oct 1</div>
+              <div className="text-sm md:text-base text-muted-foreground font-didot">Opening</div>
             </div>
           </div>
         </div>