import { Button } from "@/components/ui/button";
import introVideo from "@/assets/intro-video.mp4";
import foreverForestLogo from "@/assets/forever-forest-logo.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={introVideo} type="video/mp4" />
        </video>
        {/* Video Overlay for Professional Look */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>
      
      {/* Professional Glass Panel */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <div className="glass-effect rounded-3xl p-12 md:p-16">
          {/* Logo */}
          <div className="mb-8 animate-fade-in">
            <img 
              src={foreverForestLogo} 
              alt="Forever Forest Logo" 
              className="mx-auto h-28 md:h-36 w-auto hover-float"
            />
          </div>
          
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-metal text-fire mb-4 animate-fade-in">
            FOREVER FOREST
          </h1>
          
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-metal text-blood mb-6 animate-fade-in">
            Trolly of Terror 2025
          </h2>
          
          {/* Professional Tagline */}
          <p className="text-lg md:text-xl text-foreground/90 mb-6 font-didot animate-fade-in max-w-3xl mx-auto leading-relaxed">
            ALL INCLUSIVE Halloween Experience • No Additional Costs • Everything Included!
          </p>
          
          {/* Location with Professional Styling */}
          <div className="flex items-center justify-center gap-2 mb-12 text-accent font-didot animate-fade-in">
            <span className="w-4 h-4 bg-accent rounded-full"></span>
            <span className="text-base md:text-lg">354 Bremen Ave, Egg Harbor City, NJ • 10 miles from Atlantic City</span>
          </div>
          
          {/* Professional CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in mb-12">
            <Button 
              variant="blood" 
              size="xl"
              className="pulse-blood shadow-2xl"
            >
              Reserve Your Experience
            </Button>
            
              <Button 
              variant="ghost-halloween" 
              size="lg"
              className="font-didot backdrop-blur-sm"
            >
              <span className="mr-2">▶</span>
              Watch Experience Preview
            </Button>
          </div>
          
          {/* Professional Stats Row */}
          <div className="grid grid-cols-3 gap-8 mb-8 pt-8 border-t border-primary/20">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-metal text-fire mb-1">2025</div>
              <div className="text-xs md:text-sm text-muted-foreground font-didot">Season</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-metal text-fire mb-1">ALL AGES</div>
              <div className="text-xs md:text-sm text-muted-foreground font-didot">Available</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-metal text-fire mb-1">Oct 1</div>
              <div className="text-xs md:text-sm text-muted-foreground font-didot">Opening Night</div>
            </div>
          </div>
        </div>
        
        {/* Elegant Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/60 rounded-full flex justify-center backdrop-blur-sm">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;