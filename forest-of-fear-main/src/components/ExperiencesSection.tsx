import { Button } from "@/components/ui/button";
import galleryImage from "@/assets/gallery-image.jpg";

const ExperiencesSection = () => {
  const experiences = [
    {
      title: "Early Session Experience",
      subtitle: "Family-Friendly • Before Dark",
      description: "Perfect for families with children. ALL INCLUSIVE with no additional costs! Monster Mini-Golf, interactive workshops, and magical Halloween fun.",
      features: [
        "Halloween Trolley Ride through decorated Christmas tree farm",
        "Monster Mini-Golf - NEW for 2025", 
        "Interactive Halloween Workshop with arts & crafts",
        "Spooky Face Painting & Halloween decorations",
        "Bouncy Castle & Campfire S'mores",
        "Halloween Monster Mash Karaoke in theatre barn"
      ],
      image: galleryImage,
      timeSlot: "Fri/Sat: 6:30pm | Sun: 5:30pm",
      ageGroup: "All Ages Welcome",
      intensity: "mild",
      scareLevel: 2
    },
    {
      title: "Trolly of Terror Experience", 
      subtitle: "Enter at Your Own Risk • After Dark",
      description: "When darkness falls around 7:30pm, Forever Forest transforms into a realm of terror. Live actors emerge throughout all experiences.",
      features: [
        "Trolly Ride of Terror with live actors",
        "Haunted Tree Maze Walking Trail",
        "Old-Fashioned Ghost Town - NEW addition",
        "Monster Mini-Golf with scare actors",
        "Multiple barns with indoor Halloween activities",
        "Stay until 9:30pm closing time"
      ],
      image: galleryImage,
      timeSlot: "Fri/Sat: 8:00pm | Sun: 7:30pm",
      ageGroup: "Teens & Adults Recommended", 
      intensity: "extreme",
      scareLevel: 5
    }
  ];

  return (
    <section className="py-20 px-6 bg-card relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, hsl(var(--primary) / 0.3) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, hsl(var(--primary) / 0.3) 0%, transparent 50%)`
        }} />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-metal text-fire text-glow mb-6">
            Choose Your Session
          </h2>
          <p className="text-xl text-foreground/80 font-didot max-w-3xl mx-auto">
            Two distinct experiences - family-friendly early sessions and spine-chilling terror after dark. 
            All activities are ALL INCLUSIVE with no additional costs!
          </p>
        </div>

        {/* Two-Column Experience Layout */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {experiences.map((exp, index) => (
            <div key={index} className={`halloween-card rounded-3xl overflow-hidden ${exp.intensity === 'extreme' ? 'border border-primary/50' : ''}`}>
              {/* Experience Image */}
              <div className="h-64 bg-cover bg-center relative" style={{ backgroundImage: `url(${exp.image})` }}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl font-metal">{exp.title}</h3>
                  <p className="text-sm font-didot opacity-90">{exp.subtitle}</p>
                </div>
                
              </div>

              <div className="p-8">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div>
                      <p className={`${exp.intensity === 'extreme' ? 'text-destructive' : 'text-success'} font-didot`}>
                        {exp.ageGroup}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-muted-foreground font-didot">Scare Level</div>
                     <div className="flex gap-1">
                       {[...Array(exp.scareLevel)].map((_, i) => (
                         <div key={i} className={`w-3 h-3 rounded-full ${exp.intensity === 'extreme' ? 'bg-primary animate-flicker' : 'bg-success'}`} />
                       ))}
                       {[...Array(5 - exp.scareLevel)].map((_, i) => (
                         <div key={i} className="w-3 h-3 rounded-full bg-muted-foreground/30" />
                       ))}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-foreground/80 font-didot mb-6 leading-relaxed">
                  {exp.description}
                </p>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {exp.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <span className={`${exp.intensity === 'extreme' ? 'text-primary' : 'text-success'} text-sm`}>✓</span>
                      <span className="text-sm text-foreground/80 font-didot">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Session Times */}
                <div className="border-t border-border pt-6 mb-6">
                  <div className="text-center">
                    <div className={`${exp.intensity === 'extreme' ? 'text-primary' : 'text-accent'} font-metal mb-1`}>Session Times</div>
                    <div className="text-foreground/80 font-didot">{exp.timeSlot}</div>
                  </div>
                </div>

                <Button 
                  variant={exp.intensity === 'extreme' ? 'blood' : 'fire'} 
                  className={`w-full ${exp.intensity === 'extreme' ? 'pulse-blood' : ''}`} 
                  size="lg"
                >
                  {exp.intensity === 'extreme' ? 'Enter If You Dare' : 'Book Family Session'}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Important Session Info */}
        <div className="bg-gradient-shadow rounded-2xl p-8 mb-12">
          <h3 className="text-2xl font-metal text-fire mb-4 text-center">Important Session Information</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
               <div className="flex items-start gap-3">
                 <div className="w-6 h-6 rounded-full bg-fire mt-1" />
                <div>
                  <h4 className="font-metal text-fire mb-1">2-Hour Sessions</h4>
                  <p className="text-sm text-foreground/70 font-didot">
                    Arrive no later than 30 minutes after start time. Late session guests can stay until 9:30pm closing.
                  </p>
                </div>
              </div>
               <div className="flex items-start gap-3">
                 <div className="w-6 h-6 rounded-full bg-fire mt-1" />
                <div>
                  <h4 className="font-metal text-fire mb-1">ALL INCLUSIVE</h4>
                  <p className="text-sm text-foreground/70 font-didot">
                    Everything included at no additional cost! Food & beverages sold separately at food truck.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
               <div className="flex items-start gap-3">
                 <div className="w-6 h-6 rounded-full bg-fire mt-1" />
                <div>
                  <h4 className="font-metal text-fire mb-1">Free Parking</h4>
                  <p className="text-sm text-foreground/70 font-didot">
                    Complimentary parking available on property for all guests.
                  </p>
                </div>
              </div>
               <div className="flex items-start gap-3">
                 <div className="w-6 h-6 rounded-full bg-fire mt-1" />
                <div>
                  <h4 className="font-metal text-fire mb-1">Capacity Limited</h4>
                  <p className="text-sm text-foreground/70 font-didot">
                    Each session has restricted capacity. Reserve in advance to avoid sold-out dates!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-gradient-shadow rounded-2xl p-8">
          <h3 className="text-2xl font-metal text-fire mb-4">Ready for Your Trolly of Terror?</h3>
          <p className="text-foreground/80 font-didot mb-6">
            Book your preferred session now - early for family fun or late for maximum terror!
          </p>
           <Button variant="fire" size="xl" className="animate-glow-pulse">
             Reserve Your Session Now
           </Button>
        </div>
      </div>
    </section>
  );
};

export default ExperiencesSection;