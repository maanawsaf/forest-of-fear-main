import { Button } from "@/components/ui/button";

const TicketingSection = () => {
  const ticketTypes = [
    {
      name: "Early Session Ticket",
      description: "Family-friendly experience before dark",
      price: "$20",
      originalPrice: "$27.99",
      features: [
        "ALL INCLUSIVE - No Additional Costs",
        "Monster Mini-Golf (NEW)",
        "Interactive Halloween Workshop",
        "Spooky Face Painting",
        "Bouncy Castle & Campfire S'mores",
        "Halloween Karaoke Theatre"
      ],
      badge: "FAMILY FAVORITE",
      variant: "fire" as const,
      popular: true
    },
    {
      name: "Late Session Ticket",
      description: "Trolly of Terror - Enter at your own risk!",
      price: "$27.99",
      originalPrice: null,
      features: [
        "ALL INCLUSIVE - Everything Included",
        "Trolly Ride of Terror with Live Actors",
        "Haunted Tree Maze Walking Trail",
        "Old-Fashioned Ghost Town (NEW)",
        "All Workshop & Entertainment Activities",
        "Stay Until 9:30pm Closing"
      ],
      badge: "MOST POPULAR",
      variant: "blood" as const,
      popular: true
    },
    {
      name: "Premium Experience",
      description: "Best of both sessions - Ultimate value",
      price: "$35",
      originalPrice: "$45",
      features: [
        "Access to BOTH Early & Late Sessions",
        "All Family Activities + Terror Experience",
        "Priority Access to All Attractions",
        "Complimentary Food Truck Voucher",
        "Exclusive Behind-the-Scenes Access"
      ],
      badge: "BEST VALUE",
      variant: "ghost-halloween" as const,
      popular: false
    },
    {
      name: "Group Packages",
      description: "Special rates for groups of 10 or more",
      price: "Call",
      originalPrice: null,
      features: [
        "Discounted Group Pricing",
        "Dedicated Group Coordinator",
        "Private Photo Sessions",
        "Reserved Seating Areas",
        "Flexible Session Scheduling"
      ],
      badge: "GROUP DISCOUNTS",
      variant: "spooky" as const,
      popular: false
    }
  ];

  return (
    <section className="py-20 px-6 bg-background relative">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 10% 20%, hsl(var(--primary) / 0.1) 0%, transparent 50%),
            radial-gradient(circle at 90% 80%, hsl(var(--primary) / 0.1) 0%, transparent 50%)
          `
        }} />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="mb-6">
            <h2 className="text-4xl md:text-6xl font-metal text-fire text-glow text-center">
              Ticket Reservations
            </h2>
          </div>
          <p className="text-xl text-foreground/80 font-didot max-w-2xl mx-auto">
            Choose your level of terror and book your tickets for New Jersey's most immersive Halloween experience.
          </p>
          
          {/* Session Times Notice */}
          <div className="mt-8 grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <div className="bg-gradient-fire px-4 py-3 rounded-xl text-center">
              <span className="text-sm font-metal text-background block">FRIDAY/SATURDAY</span>
              <span className="text-sm font-didot text-background">6:30pm & 8:00pm Sessions</span>
            </div>
            <div className="bg-gradient-shadow px-4 py-3 rounded-xl text-center">
              <span className="text-sm font-metal text-foreground block">SUNDAY</span>
              <span className="text-sm font-didot text-foreground">5:30pm & 7:30pm Sessions</span>
            </div>
          </div>
        </div>

        {/* Professional Ticket Cards Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mb-16">
          {ticketTypes.map((ticket, index) => (
            <div 
              key={index}
              className={`glass-effect rounded-2xl overflow-hidden relative ${
                ticket.popular ? 'ring-2 ring-primary/40 shadow-glow' : ''
              } hover:scale-[1.02] transition-all duration-300`}
            >
              {/* Professional Badge */}
              {ticket.badge && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-fire px-4 py-1 rounded-full backdrop-blur-sm">
                    <span className="text-xs font-metal text-background">{ticket.badge}</span>
                  </div>
                </div>
              )}
              
              <div className="p-8">
                {/* Professional Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-metal text-primary mb-3">{ticket.name}</h3>
                  <p className="text-sm text-foreground/75 font-didot mb-6 leading-relaxed">{ticket.description}</p>
                  
                  {/* Professional Pricing */}
                  <div className="flex items-center justify-center gap-3 mb-2">
                    <span className="text-4xl font-metal text-fire">{ticket.price}</span>
                    {ticket.originalPrice && (
                      <span className="text-lg text-muted-foreground line-through font-didot">
                        {ticket.originalPrice}
                      </span>
                    )}
                  </div>
                  {ticket.price !== "Call" && (
                    <span className="text-xs text-muted-foreground font-didot">per person + fees</span>
                  )}
                </div>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {ticket.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <span className="text-success text-sm">✓</span>
                      <span className="text-sm text-foreground/80 font-didot">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button 
                  variant={ticket.variant} 
                  className={`w-full ${ticket.popular ? 'animate-glow-pulse' : ''}`}
                  size="lg"
                >
                  {ticket.price === "Call" ? "Contact Us" : "Book Now"}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Refund Policy */}
          <div className="text-center p-6 halloween-card rounded-xl">
            <div className="w-12 h-12 mx-auto mb-3 bg-primary rounded-full"></div>
            <h3 className="font-metal text-primary mb-2">Flexible Cancellation</h3>
            <p className="text-sm text-foreground/70 font-didot">
              Full refund up to 48 hours before your visit date
            </p>
          </div>

          {/* Weather Policy */}
          <div className="text-center p-6 halloween-card rounded-xl">
            <div className="w-12 h-12 mx-auto mb-3 bg-primary rounded-full"></div>
            <h3 className="font-metal text-primary mb-2">Rain or Shine</h3>
            <p className="text-sm text-foreground/70 font-didot">
              We operate in all weather - bring appropriate gear!
            </p>
          </div>

          {/* Group Discounts */}
          <div className="text-center p-6 halloween-card rounded-xl">
            <div className="w-12 h-12 mx-auto mb-3 bg-primary rounded-full"></div>
            <h3 className="font-metal text-primary mb-2">Group Discounts</h3>
            <p className="text-sm text-foreground/70 font-didot">
              Special rates for parties of 10+ people
            </p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-gradient-shadow rounded-2xl p-8">
          <h3 className="text-3xl font-metal text-fire mb-4">Ready to Face Your Fears?</h3>
          <p className="text-lg text-foreground/80 font-didot mb-6">
            Don't wait - tickets sell out fast for New Jersey's premier Halloween experience!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="blood" size="xl" className="pulse-blood">
              Purchase Tickets Now
            </Button>
            
            <div className="flex items-center gap-4 text-sm text-muted-foreground font-didot">
              <span>Questions?</span>
              <a href="tel:(609) 957-6501" className="text-primary spooky-link">
                Call (609) 957-6501
              </a>
              <span>•</span>
              <a href="mailto:info@foreverforestnj.com" className="text-primary spooky-link">
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TicketingSection;