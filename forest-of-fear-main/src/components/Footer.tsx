import { Button } from "@/components/ui/button";
import foreverForestLogo from "@/assets/forever-forest-logo.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-shadow py-16 px-6 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-glow opacity-10" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Logo & About */}
          <div className="md:col-span-2">
            <img 
              src={foreverForestLogo} 
              alt="Forever Forest Logo" 
              className="h-16 w-auto mb-4"
            />
            <h3 className="text-xl font-metal text-fire mb-3">Forever Forest Halloween Experience</h3>
            <p className="text-foreground/70 font-didot leading-relaxed mb-6">
              New Jersey's premier Halloween destination, offering spine-chilling thrills and family-friendly fun 
              in the heart of Egg Harbor City. Experience the ultimate Halloween adventure just minutes from Atlantic City.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              <Button variant="ghost-halloween" size="icon">
                <span className="text-xl">📘</span>
              </Button>
              <Button variant="ghost-halloween" size="icon">
                <span className="text-xl">📹</span>
              </Button>
              <Button variant="ghost-halloween" size="icon">
                <span className="text-xl">📷</span>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-metal text-primary text-lg mb-4">Quick Links</h4>
            <div className="space-y-3">
              <a href="#tickets" className="block text-foreground/70 hover:text-primary font-didot spooky-link">
                Book Tickets
              </a>
              <a href="#experiences" className="block text-foreground/70 hover:text-primary font-didot spooky-link">
                Experiences
              </a>
              <a href="#whats-new" className="block text-foreground/70 hover:text-primary font-didot spooky-link">
                What's New 2025
              </a>
              <a href="#faq" className="block text-foreground/70 hover:text-primary font-didot spooky-link">
                FAQ
              </a>
              <a href="#contact" className="block text-foreground/70 hover:text-primary font-didot spooky-link">
                Contact Us
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-metal text-primary text-lg mb-4">Get In Touch</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-accent">📍</span>
                <div className="text-foreground/70 font-didot text-sm">
                  354 Bremen Ave<br />
                  Egg Harbor City, NJ 08215<br />
                  (Off Route 30)
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <span className="text-accent">📞</span>
                <a 
                  href="tel:(609) 957-6501" 
                  className="text-foreground/70 hover:text-primary font-didot text-sm spooky-link"
                >
                  (609) 957-6501
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <span className="text-accent">✉️</span>
                <a 
                  href="mailto:info@foreverforestnj.com" 
                  className="text-foreground/70 hover:text-primary font-didot text-sm spooky-link"
                >
                  info@foreverforestnj.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-border pt-8 mb-8">
          <div className="text-center max-w-2xl mx-auto">
            <h4 className="font-metal text-fire text-xl mb-3">
              Join Our Crypt of Secrets 🦇
            </h4>
            <p className="text-foreground/70 font-didot mb-6">
              Get early access to tickets, exclusive scares, and behind-the-scenes content delivered to your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email if you dare..."
                className="flex-1 bg-card border border-border rounded-lg px-4 py-3 text-foreground font-didot focus:border-primary focus:outline-none"
              />
              <Button variant="fire">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-foreground/60 font-didot text-sm">
                © 2025 Forever Forest New Jersey. All rights reserved.
              </p>
              <p className="text-foreground/60 font-didot text-sm">
                "Scaring guests since 2024" 🎃
              </p>
            </div>
            
            <div className="flex items-center gap-6">
              <a href="#" className="text-foreground/60 hover:text-primary font-didot text-sm spooky-link">
                Privacy Policy
              </a>
              <a href="#" className="text-foreground/60 hover:text-primary font-didot text-sm spooky-link">
                Terms of Service
              </a>
              <a href="#" className="text-foreground/60 hover:text-primary font-didot text-sm spooky-link">
                Refund Policy
              </a>
            </div>
          </div>
          
          {/* Christmas Experience Link */}
          <div className="mt-6 text-center p-4 bg-success/10 border border-success/20 rounded-lg">
            <p className="text-success font-didot text-sm mb-2">
              🎄 Don't miss our magical Christmas experience! 🎄
            </p>
            <Button variant="ghost-halloween" size="sm" className="border-success text-success hover:bg-success/10">
              Learn About Forever Forest Christmas
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;