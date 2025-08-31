@@ .. @@
   return (
-    <section className="py-20 px-6 bg-card relative">
+    <section id="experiences" className="py-32 px-6 bg-card relative">
       {/* Background Pattern */}
-      <div className="absolute inset-0 opacity-10">
+      <div className="absolute inset-0 opacity-5">
         <div className="absolute inset-0" style={{
-          backgroundImage: `radial-gradient(circle at 25% 25%, hsl(var(--primary) / 0.3) 0%, transparent 50%),
-                           radial-gradient(circle at 75% 75%, hsl(var(--primary) / 0.3) 0%, transparent 50%)`
+          backgroundImage: `
+            radial-gradient(circle at 25% 25%, hsl(var(--primary) / 0.1) 0%, transparent 70%),
+            radial-gradient(circle at 75% 75%, hsl(var(--accent) / 0.1) 0%, transparent 70%),
+            linear-gradient(45deg, transparent 49%, hsl(var(--border) / 0.1) 50%, transparent 51%)
+          `
         }} />
       </div>
       
       <div className="max-w-7xl mx-auto relative z-10">
         {/* Section Header */}
-        <div className="text-center mb-20">
-          <h2 className="text-5xl md:text-7xl font-metal text-fire text-glow mb-6">
+        <div className="text-center mb-24">
+          <h2 className="text-6xl md:text-8xl font-metal text-fire text-glow mb-8">
             Choose Your Session
           </h2>
-          <p className="text-xl text-foreground/80 font-didot max-w-3xl mx-auto">
-            Two distinct experiences - family-friendly early sessions and spine-chilling terror after dark. 
-            All activities are ALL INCLUSIVE with no additional costs!
+          <p className="text-2xl text-foreground/85 font-didot max-w-4xl mx-auto leading-relaxed">
+            Two meticulously crafted experiences designed for different audiences. Family-friendly early sessions 
+            and professionally terrifying late sessions. All activities are completely inclusive with no hidden fees.
           </p>
         </div>

         {/* Two-Column Experience Layout */}
-        <div className="grid lg:grid-cols-2 gap-12 mb-16">
+        <div className="grid lg:grid-cols-2 gap-16 mb-20">
           {experiences.map((exp, index) => (
-            <div key={index} className={`halloween-card rounded-3xl overflow-hidden ${exp.intensity === 'extreme' ? 'border border-primary/50' : ''}`}>
+            <div key={index} className={`halloween-card rounded-3xl overflow-hidden shadow-dark ${
+              exp.intensity === 'extreme' 
+                ? 'border-2 border-primary/50 shadow-glow' 
+                : 'border border-success/30'
+            }`}>
               {/* Experience Image */}
-              <div className="h-64 bg-cover bg-center relative" style={{ backgroundImage: `url(${exp.image})` }}>
-                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
-                <div className="absolute bottom-4 left-4 text-white">
-                  <h3 className="text-2xl font-metal">{exp.title}</h3>
-                  <p className="text-sm font-didot opacity-90">{exp.subtitle}</p>
+              <div className="h-72 bg-cover bg-center relative" style={{ backgroundImage: `url(${exp.image})` }}>
+                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent" />
+                <div className="absolute bottom-6 left-6 text-white">
+                  <h3 className="text-3xl font-metal text-glow">{exp.title}</h3>
+                  <p className="text-base font-didot opacity-90">{exp.subtitle}</p>
                 </div>
-                
+                <div className="absolute top-6 right-6">
+                  <div className={`px-4 py-2 rounded-full backdrop-blur-md border ${
+                    exp.intensity === 'extreme' 
+                      ? 'bg-primary/90 text-primary-foreground border-primary/50' 
+                      : 'bg-success/90 text-success-foreground border-success/50'
+                  }`}>
+                    <span className="text-sm font-metal">
+                      {exp.intensity === 'extreme' ? '🔥 EXTREME' : '👨‍👩‍👧‍👦 FAMILY'}
+                    </span>
+                  </div>
+                </div>
               </div>

-              <div className="p-8">
+              <div className="p-10">
                 {/* Header */}
-                <div className="flex items-center justify-between mb-6">
+                <div className="flex items-center justify-between mb-8">
                   <div className="flex items-center gap-4">
                     <div>
-                      <p className={`${exp.intensity === 'extreme' ? 'text-destructive' : 'text-success'} font-didot`}>
+                      <p className={`text-lg ${exp.intensity === 'extreme' ? 'text-primary' : 'text-success'} font-didot font-medium`}>
                         {exp.ageGroup}
                       </p>
                     </div>
                   </div>
                   <div className="text-right">
-                    <div className="text-xs text-muted-foreground font-didot">Scare Level</div>
+                    <div className="text-sm text-muted-foreground font-didot mb-2">Intensity Level</div>
                      <div className="flex gap-1">
                        {[...Array(exp.scareLevel)].map((_, i) => (
-                         <div key={i} className={`w-3 h-3 rounded-full ${exp.intensity === 'extreme' ? 'bg-primary animate-flicker' : 'bg-success'}`} />
+                         <div key={i} className={`w-4 h-4 rounded-full ${exp.intensity === 'extreme' ? 'bg-primary animate-flicker' : 'bg-success'}`} />
                        ))}
                        {[...Array(5 - exp.scareLevel)].map((_, i) => (
-                         <div key={i} className="w-3 h-3 rounded-full bg-muted-foreground/30" />
+                         <div key={i} className="w-4 h-4 rounded-full bg-muted-foreground/20" />
                        ))}
                     </div>
                   </div>
                 </div>

                 {/* Description */}
-                <p className="text-foreground/80 font-didot mb-6 leading-relaxed">
+                <p className="text-foreground/80 font-didot mb-8 leading-relaxed text-lg">
                   {exp.description}
                 </p>

                 {/* Features */}
-                <div className="space-y-3 mb-8">
+                <div className="space-y-4 mb-10">
                   {exp.features.map((feature, featureIndex) => (
                     <div key={featureIndex} className="flex items-center gap-3">
-                      <span className={`${exp.intensity === 'extreme' ? 'text-primary' : 'text-success'} text-sm`}>✓</span>
-                      <span className="text-sm text-foreground/80 font-didot">{feature}</span>
+                      <span className={`${exp.intensity === 'extreme' ? 'text-primary' : 'text-success'} text-lg`}>✓</span>
+                      <span className="text-base text-foreground/80 font-didot">{feature}</span>
                     </div>
                   ))}
                 </div>

                 {/* Session Times */}
-                <div className="border-t border-border pt-6 mb-6">
+                <div className="border-t border-border pt-8 mb-8">
                   <div className="text-center">
-                    <div className={`${exp.intensity === 'extreme' ? 'text-primary' : 'text-accent'} font-metal mb-1`}>Session Times</div>
-                    <div className="text-foreground/80 font-didot">{exp.timeSlot}</div>
+                    <div className={`text-xl ${exp.intensity === 'extreme' ? 'text-primary' : 'text-accent'} font-metal mb-2`}>Session Times</div>
+                    <div className="text-lg text-foreground/80 font-didot">{exp.timeSlot}</div>
                   </div>
                 </div>

                 <Button 
                   variant={exp.intensity === 'extreme' ? 'blood' : 'fire'} 
-                  className={`w-full ${exp.intensity === 'extreme' ? 'pulse-blood' : ''}`} 
-                  size="lg"
+                  className={`w-full font-metal text-lg ${exp.intensity === 'extreme' ? 'pulse-blood' : 'professional-glow'}`} 
+                  size="xl"
                 >
-                  {exp.intensity === 'extreme' ? 'Enter If You Dare' : 'Book Family Session'}
+                  {exp.intensity === 'extreme' ? '💀 Enter If You Dare' : '🎃 Book Family Session'}
                 </Button>
               </div>
             </div>
@@ .. @@
         </div>

         {/* Important Session Info */}
-        <div className="bg-gradient-shadow rounded-2xl p-8 mb-12">
-          <h3 className="text-2xl font-metal text-fire mb-4 text-center">Important Session Information</h3>
-          <div className="grid md:grid-cols-2 gap-8">
+        <div className="glass-effect rounded-3xl p-12 mb-16 border border-primary/20">
+          <h3 className="text-3xl font-metal text-fire mb-8 text-center text-glow">Essential Information</h3>
+          <div className="grid md:grid-cols-2 gap-12">
             <div className="space-y-4">
                <div className="flex items-start gap-3">
-                 <div className="w-6 h-6 rounded-full bg-fire mt-1" />
+                 <div className="w-8 h-8 rounded-full bg-primary mt-1 animate-pulse" />
                 <div>
-                  <h4 className="font-metal text-fire mb-1">2-Hour Sessions</h4>
-                  <p className="text-sm text-foreground/70 font-didot">
+                  <h4 className="font-metal text-fire mb-2 text-lg">2-Hour Premium Sessions</h4>
+                  <p className="text-base text-foreground/70 font-didot leading-relaxed">
                     Arrive no later than 30 minutes after start time. Late session guests can stay until 9:30pm closing.
                   </p>
                 </div>
               </div>
                <div className="flex items-start gap-3">
-                 <div className="w-6 h-6 rounded-full bg-fire mt-1" />
+                 <div className="w-8 h-8 rounded-full bg-primary mt-1 animate-pulse" />
                 <div>
-                  <h4 className="font-metal text-fire mb-1">ALL INCLUSIVE</h4>
-                  <p className="text-sm text-foreground/70 font-didot">
-                    Everything included at no additional cost! Food & beverages sold separately at food truck.
+                  <h4 className="font-metal text-fire mb-2 text-lg">100% ALL INCLUSIVE</h4>
+                  <p className="text-base text-foreground/70 font-didot leading-relaxed">
+                    Every attraction, activity, and experience included. Premium food & beverages available for purchase.
                   </p>
                 </div>
               </div>
@@ .. @@
             <div className="space-y-4">
                <div className="flex items-start gap-3">
-                 <div className="w-6 h-6 rounded-full bg-fire mt-1" />
+                 <div className="w-8 h-8 rounded-full bg-primary mt-1 animate-pulse" />
                 <div>
-                  <h4 className="font-metal text-fire mb-1">Free Parking</h4>
-                  <p className="text-sm text-foreground/70 font-didot">
+                  <h4 className="font-metal text-fire mb-2 text-lg">Complimentary Parking</h4>
+                  <p className="text-base text-foreground/70 font-didot leading-relaxed">
                     Complimentary parking available on property for all guests.
                   </p>
                 </div>
               </div>
                <div className="flex items-start gap-3">
-                 <div className="w-6 h-6 rounded-full bg-fire mt-1" />
+                 <div className="w-8 h-8 rounded-full bg-primary mt-1 animate-pulse" />
                 <div>
-                  <h4 className="font-metal text-fire mb-1">Capacity Limited</h4>
-                  <p className="text-sm text-foreground/70 font-didot">
-                    Each session has restricted capacity. Reserve in advance to avoid sold-out dates!
+                  <h4 className="font-metal text-fire mb-2 text-lg">Limited Capacity</h4>
+                  <p className="text-base text-foreground/70 font-didot leading-relaxed">
+                    Exclusive sessions with restricted capacity for optimal experience. Advanced reservations essential.
                   </p>
                 </div>
               </div>
@@ .. @@
         </div>

         {/* Bottom CTA */}
-        <div className="text-center bg-gradient-shadow rounded-2xl p-8">
-          <h3 className="text-2xl font-metal text-fire mb-4">Ready for Your Trolly of Terror?</h3>
-          <p className="text-foreground/80 font-didot mb-6">
-            Book your preferred session now - early for family fun or late for maximum terror!
+        <div className="text-center glass-effect rounded-3xl p-12 border border-primary/20">
+          <h3 className="text-3xl font-metal text-fire mb-6 text-glow">Ready for Your Professional Terror Experience?</h3>
+          <p className="text-xl text-foreground/80 font-didot mb-8 max-w-3xl mx-auto leading-relaxed">
+            Select your preferred session timing - early for premium family entertainment or late for our signature terror experience.
           </p>
-           <Button variant="fire" size="xl" className="animate-glow-pulse">
-             Reserve Your Session Now
+           <Button variant="fire" size="xl" className="animate-glow-pulse font-metal text-xl px-12">
+             🎫 Reserve Your Premium Session
            </Button>
         </div>
       </div>