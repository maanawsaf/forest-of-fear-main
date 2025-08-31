import { Button } from "@/components/ui/button";
import galleryImage from "@/assets/gallery-image.jpg";

const WhatsNewSection = () => {
  const newFeatures = [
    {
      title: "Monster Mini-Golf",
      description: "NEW family-friendly attraction featuring spooky themed mini-golf course perfect for all ages.",
      image: galleryImage,
      badge: "NEW 2025",
      type: "family"
    },
    {
      title: "Old-Fashioned Ghost Town", 
      description: "Step back in time through our haunted ghost town experience, now added to the Trolly of Terror route.",
      image: galleryImage,
      badge: "NEW 2025",
      type: "scary"
    },
    {
      title: "Interactive Halloween Workshop",
      description: "Arts & crafts, spooky face painting, and magical decorations in our authentic barn workshop with Santa's Halloween Helpers.",
      image: null,
      badge: "ALL INCLUSIVE",
      type: "family"
    },
    {
      title: "Halloween Monster Mash Karaoke",
      description: "Featured theatre barn with karaoke music stage, plus bouncy castle and campfire s'mores activities.",
      image: null,
      badge: "ENTERTAINMENT",
      type: "family"
    }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-shadow relative">
      {/* Professional Background Pattern */}
      <div className="absolute inset-0 bg-gradient-glow opacity-10" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Professional Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-4 mb-8">
            <div className="w-16 h-0.5 bg-gradient-fire"></div>
            <h2 className="text-4xl md:text-5xl font-metal text-fire">
              What's New in 2025
            </h2>
            <div className="w-16 h-0.5 bg-gradient-fire"></div>
          </div>
          <p className="text-xl text-foreground/85 font-didot max-w-3xl mx-auto leading-relaxed">
            Experience our most ambitious expansion yet, featuring enhanced attractions, 
            cutting-edge technology, and refined family experiences.
          </p>
        </div>

        {/* Professional Features Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {newFeatures.map((feature, index) => (
            <div 
              key={index}
              className="glass-effect rounded-2xl overflow-hidden group hover:scale-[1.01] transition-all duration-300"
            >
              {/* Professional Image Treatment */}
              {feature.image ? (
                <div className="h-72 bg-cover bg-center relative overflow-hidden"
                     style={{ backgroundImage: `url(${feature.image})` }}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/70 transition-all duration-300" />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-metal backdrop-blur-sm ${
                      feature.badge === "NEW 2025" 
                        ? "bg-primary/90 text-primary-foreground" 
                        : feature.badge === "ENHANCED"
                        ? "bg-accent/90 text-accent-foreground"
                        : feature.badge === "TECHNOLOGY"
                        ? "bg-success/90 text-success-foreground"
                        : "bg-secondary/90 text-secondary-foreground"
                    }`}>
                      {feature.badge}
                    </span>
                  </div>
                </div>
              ) : (
                <div className="h-72 bg-gradient-professional flex items-center justify-center relative">
                  <div className="w-20 h-20 bg-primary/20 rounded-full"></div>
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-metal backdrop-blur-sm ${
                      feature.badge === "TECHNOLOGY"
                        ? "bg-success/90 text-success-foreground"
                        : "bg-secondary/90 text-secondary-foreground"
                    }`}>
                      {feature.badge}
                    </span>
                  </div>
                </div>
              )}
              
              {/* Professional Content Layout */}
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-metal text-primary group-hover:text-fire transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      {[...Array(feature.type === "scary" ? 5 : 3)].map((_, i) => (
                        <div key={i} className="w-2 h-2 rounded-full bg-primary" />
                      ))}
                    </div>
                    <span className="text-xs text-muted-foreground font-didot">
                      {feature.type === "scary" ? "Extreme" : "All Ages"}
                    </span>
                  </div>
                </div>
                
                <p className="text-foreground/80 font-didot mb-6 leading-relaxed text-sm">
                  {feature.description}
                </p>
                
                <Button variant="spooky" size="sm" className="w-full">
                  Learn More About This Experience
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Professional Bottom CTA */}
        <div className="text-center glass-effect rounded-2xl p-8">
          <h3 className="text-2xl font-metal text-fire mb-4">Experience Every New Addition</h3>
          <p className="text-foreground/80 font-didot mb-6 max-w-2xl mx-auto">
            Our 2025 season pass includes access to all new attractions plus exclusive behind-the-scenes experiences.
          </p>
          <Button variant="fire" size="lg" className="professional-glow">
            Season Pass Access
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhatsNewSection;