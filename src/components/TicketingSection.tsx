@@ .. @@
   return (
-    <section className="py-20 px-6 bg-background relative">
+    <section id="tickets" className="py-32 px-6 bg-background relative">
       {/* Background Effects */}
       <div className="absolute inset-0">
         <div className="absolute inset-0" style={{
           backgroundImage: `
-            radial-gradient(circle at 10% 20%, hsl(var(--primary) / 0.1) 0%, transparent 50%),
-            radial-gradient(circle at 90% 80%, hsl(var(--primary) / 0.1) 0%, transparent 50%)
+            radial-gradient(circle at 10% 20%, hsl(var(--primary) / 0.08) 0%, transparent 60%),
+            radial-gradient(circle at 90% 80%, hsl(var(--accent) / 0.08) 0%, transparent 60%),
+            linear-gradient(135deg, transparent 40%, hsl(var(--border) / 0.05) 50%, transparent 60%)
           `
         }} />
       </div>
       
       <div className="max-w-7xl mx-auto relative z-10">
         {/* Section Header */}
-        <div className="text-center mb-16">
-          <div className="mb-6">
-            <h2 className="text-4xl md:text-6xl font-metal text-fire text-glow text-center">
+        <div className="text-center mb-20">
+          <div className="mb-8">
+            <h2 className="text-6xl md:text-7xl lg:text-8xl font-metal text-fire text-glow text-center">
               Ticket Reservations
             </h2>
           </div>
-          <p className="text-xl text-foreground/80 font-didot max-w-2xl mx-auto">
-            Choose your level of terror and book your tickets for New Jersey's most immersive Halloween experience.
+          <p className="text-2xl text-foreground/85 font-didot max-w-4xl mx-auto leading-relaxed">
+            Select your preferred experience level and secure your tickets for New Jersey's most professionally 
+            produced Halloween destination.
           </p>
           
           {/* Session Times Notice */}
-          <div className="mt-8 grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
-            <div className="bg-gradient-fire px-4 py-3 rounded-xl text-center">
-              <span className="text-sm font-metal text-background block">FRIDAY/SATURDAY</span>
-              <span className="text-sm font-didot text-background">6:30pm & 8:00pm Sessions</span>
+          <div className="mt-12 grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
+            <div className="bg-gradient-fire px-6 py-4 rounded-2xl text-center shadow-glow">
+              <span className="text-base font-metal text-background block">FRIDAY/SATURDAY</span>
+              <span className="text-base font-didot text-background">6:30pm & 8:00pm Sessions</span>
             </div>
-            <div className="bg-gradient-shadow px-4 py-3 rounded-xl text-center">
-              <span className="text-sm font-metal text-foreground block">SUNDAY</span>
-              <span className="text-sm font-didot text-foreground">5:30pm & 7:30pm Sessions</span>
+            <div className="glass-effect px-6 py-4 rounded-2xl text-center border border-primary/30">
+              <span className="text-base font-metal text-foreground block">SUNDAY</span>
+              <span className="text-base font-didot text-foreground">5:30pm & 7:30pm Sessions</span>
             </div>
           </div>
         </div>

         {/* Professional Ticket Cards Grid */}
-        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mb-16">
+        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mb-20">
           {ticketTypes.map((ticket, index) => (
             <div 
               key={index}
               className={`glass-effect rounded-2xl overflow-hidden relative ${
-                ticket.popular ? 'ring-2 ring-primary/40 shadow-glow' : ''
-              } hover:scale-[1.02] transition-all duration-300`}
+                ticket.popular ? 'ring-2 ring-primary/50 shadow-glow scale-105' : ''
+              } hover:scale-[1.03] transition-all duration-500 shadow-dark`}
             >
               {/* Professional Badge */}
               {ticket.badge && (
-                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
-                  <div className="bg-gradient-fire px-4 py-1 rounded-full backdrop-blur-sm">
-                    <span className="text-xs font-metal text-background">{ticket.badge}</span>
+                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
+                  <div className="bg-gradient-fire px-6 py-2 rounded-full backdrop-blur-md shadow-glow">
+                    <span className="text-sm font-metal text-background">{ticket.badge}</span>
                   </div>
                 </div>
               )}
               
-              <div className="p-8">
+              <div className="p-10">
                 {/* Professional Header */}
-                <div className="text-center mb-8">
-                  <h3 className="text-2xl font-metal text-primary mb-3">{ticket.name}</h3>
-                  <p className="text-sm text-foreground/75 font-didot mb-6 leading-relaxed">{ticket.description}</p>
+                <div className="text-center mb-10">
+                  <h3 className="text-2xl font-metal text-primary mb-4">{ticket.name}</h3>
+                  <p className="text-base text-foreground/75 font-didot mb-8 leading-relaxed">{ticket.description}</p>
                   
                   {/* Professional Pricing */}
-                  <div className="flex items-center justify-center gap-3 mb-2">
-                    <span className="text-4xl font-metal text-fire">{ticket.price}</span>
+                  <div className="flex items-center justify-center gap-4 mb-3">
+                    <span className="text-5xl font-metal text-fire text-glow">{ticket.price}</span>
                     {ticket.originalPrice && (
-                      <span className="text-lg text-muted-foreground line-through font-didot">
+                      <span className="text-xl text-muted-foreground line-through font-didot">
                         {ticket.originalPrice}
                       </span>
                     )}
                   </div>
                   {ticket.price !== "Call" && (
-                    <span className="text-xs text-muted-foreground font-didot">per person + fees</span>
+                    <span className="text-sm text-muted-foreground font-didot">per person + processing fees</span>
                   )}
                 </div>

                 {/* Features */}
-                <div className="space-y-3 mb-8">
+                <div className="space-y-4 mb-10">
                   {ticket.features.map((feature, featureIndex) => (
                     <div key={featureIndex} className="flex items-center gap-3">
-                      <span className="text-success text-sm">✓</span>
-                      <span className="text-sm text-foreground/80 font-didot">{feature}</span>
+                      <span className="text-success text-lg">✓</span>
+                      <span className="text-base text-foreground/80 font-didot">{feature}</span>
                     </div>
                   ))}
                 </div>

                 {/* CTA Button */}
                 <Button 
                   variant={ticket.variant} 
-                  className={`w-full ${ticket.popular ? 'animate-glow-pulse' : ''}`}
-                  size="lg"
+                  className={`w-full font-metal text-lg ${ticket.popular ? 'animate-glow-pulse' : 'professional-glow'}`}
+                  size="xl"
                 >
                   {ticket.price === "Call" ? "Contact Us" : "Book Now"}
                 </Button>
@@ .. @@
         </div>

         {/* Additional Info Section */}
-        <div className="grid md:grid-cols-3 gap-8 mb-12">
+        <div className="grid md:grid-cols-3 gap-8 mb-16">
           {/* Refund Policy */}
-          <div className="text-center p-6 halloween-card rounded-xl">
-            <div className="w-12 h-12 mx-auto mb-3 bg-primary rounded-full"></div>
-            <h3 className="font-metal text-primary mb-2">Flexible Cancellation</h3>
-            <p className="text-sm text-foreground/70 font-didot">
+          <div className="text-center p-8 halloween-card rounded-2xl">
+            <div className="w-16 h-16 mx-auto mb-4 bg-primary rounded-full animate-pulse"></div>
+            <h3 className="font-metal text-primary mb-3 text-lg">Flexible Cancellation</h3>
+            <p className="text-base text-foreground/70 font-didot leading-relaxed">
               Full refund up to 48 hours before your visit date
             </p>
           </div>

           {/* Weather Policy */}
-          <div className="text-center p-6 halloween-card rounded-xl">
-            <div className="w-12 h-12 mx-auto mb-3 bg-primary rounded-full"></div>
-            <h3 className="font-metal text-primary mb-2">Rain or Shine</h3>
-            <p className="text-sm text-foreground/70 font-didot">
+          <div className="text-center p-8 halloween-card rounded-2xl">
+            <div className="w-16 h-16 mx-auto mb-4 bg-primary rounded-full animate-pulse"></div>
+            <h3 className="font-metal text-primary mb-3 text-lg">Rain or Shine</h3>
+            <p className="text-base text-foreground/70 font-didot leading-relaxed">
               We operate in all weather - bring appropriate gear!
             </p>
           </div>

           {/* Group Discounts */}
-          <div className="text-center p-6 halloween-card rounded-xl">
-            <div className="w-12 h-12 mx-auto mb-3 bg-primary rounded-full"></div>
-            <h3 className="font-metal text-primary mb-2">Group Discounts</h3>
-            <p className="text-sm text-foreground/70 font-didot">
+          <div className="text-center p-8 halloween-card rounded-2xl">
+            <div className="w-16 h-16 mx-auto mb-4 bg-primary rounded-full animate-pulse"></div>
+            <h3 className="font-metal text-primary mb-3 text-lg">Group Discounts</h3>
+            <p className="text-base text-foreground/70 font-didot leading-relaxed">
               Special rates for parties of 10+ people
             </p>
           </div>
@@ .. @@

         {/* Bottom CTA */}
-        <div className="text-center bg-gradient-shadow rounded-2xl p-8">
-          <h3 className="text-3xl font-metal text-fire mb-4">Ready to Face Your Fears?</h3>
-          <p className="text-lg text-foreground/80 font-didot mb-6">
-            Don't wait - tickets sell out fast for New Jersey's premier Halloween experience!
+        <div className="text-center glass-effect rounded-3xl p-12 border border-primary/20">
+          <h3 className="text-4xl font-metal text-fire mb-6 text-glow">Ready to Face Your Fears?</h3>
+          <p className="text-xl text-foreground/80 font-didot mb-8 max-w-3xl mx-auto leading-relaxed">
+            Secure your spot now - our premium Halloween experience sells out quickly due to limited capacity and exceptional quality.
           </p>
           
-          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
-            <Button variant="blood" size="xl" className="pulse-blood">
-              Purchase Tickets Now
+          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
+            <Button variant="blood" size="xl" className="pulse-blood font-metal text-xl px-12">
+              🎃 Purchase Premium Tickets
             </Button>
             
-            <div className="flex items-center gap-4 text-sm text-muted-foreground font-didot">
+            <div className="flex items-center gap-4 text-base text-muted-foreground font-didot">
               <span>Questions?</span>
               <a href="tel:(609) 957-6501" className="text-primary spooky-link">
                 Call (609) 957-6501
@@ .. @@
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