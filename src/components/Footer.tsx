@@ .. @@
 const Footer = () => {
   return (
   )
 }
-    <footer className="bg-gradient-shadow py-16 px-6 relative">
+    <footer id="contact" className="bg-gradient-shadow py-20 px-6 relative">
       {/* Background Effects */}
-      <div className="absolute inset-0 bg-gradient-glow opacity-10" />
+      <div className="absolute inset-0 bg-gradient-glow opacity-5" />
       
       <div className="max-w-7xl mx-auto relative z-10">
         {/* Main Footer Content */}
-        <div className="grid md:grid-cols-4 gap-8 mb-12">
+        <div className="grid md:grid-cols-4 gap-12 mb-16">
           {/* Logo & About */}
           <div className="md:col-span-2">
             <img 
               src={foreverForestLogo} 
               alt="Forever Forest Logo" 
-              className="h-16 w-auto mb-4"
+              className="h-20 w-auto mb-6"
             />
-            <h3 className="text-xl font-metal text-fire mb-3">Forever Forest Halloween Experience</h3>
-            <p className="text-foreground/70 font-didot leading-relaxed mb-6">
-              New Jersey's premier Halloween destination, offering spine-chilling thrills and family-friendly fun 
-              in the heart of Egg Harbor City. Experience the ultimate Halloween adventure just minutes from Atlantic City.
+            <h3 className="text-2xl font-metal text-fire mb-4 text-glow">Forever Forest Halloween Experience</h3>
+            <p className="text-foreground/70 font-didot leading-relaxed mb-8 text-lg">
+              New Jersey's premier professionally-produced Halloween destination, offering meticulously crafted thrills 
+              and family entertainment in the heart of Egg Harbor City. Experience theatrical-quality Halloween 
+              adventures just minutes from Atlantic City.
             </p>
             
             {/* Social Links */}
-            <div className="flex gap-4">
-              <Button variant="ghost-halloween" size="icon">
-                <span className="text-xl">📘</span>
+            <div className="flex gap-6">
+              <Button variant="ghost-halloween" size="lg" className="professional-glow">
+                <span className="text-2xl">📘</span>
               </Button>
-              <Button variant="ghost-halloween" size="icon">
-                <span className="text-xl">📹</span>
+              <Button variant="ghost-halloween" size="lg" className="professional-glow">
+                <span className="text-2xl">📹</span>
               </Button>
-              <Button variant="ghost-halloween" size="icon">
-                <span className="text-xl">📷</span>
+              <Button variant="ghost-halloween" size="lg" className="professional-glow">
+                <span className="text-2xl">📷</span>
               </Button>
             </div>
           </div>

           {/* Quick Links */}
           <div>
-            <h4 className="font-metal text-primary text-lg mb-4">Quick Links</h4>
-            <div className="space-y-3">
-              <a href="#tickets" className="block text-foreground/70 hover:text-primary font-didot spooky-link">
+            <h4 className="font-metal text-primary text-xl mb-6">Quick Links</h4>
+            <div className="space-y-4">
+              <a href="#tickets" className="block text-foreground/70 hover:text-primary font-didot spooky-link text-base">
                 Book Tickets
               </a>
-              <a href="#experiences" className="block text-foreground/70 hover:text-primary font-didot spooky-link">
+              <a href="#experiences" className="block text-foreground/70 hover:text-primary font-didot spooky-link text-base">
                 Experiences
               </a>
-              <a href="#whats-new" className="block text-foreground/70 hover:text-primary font-didot spooky-link">
+              <a href="#whats-new" className="block text-foreground/70 hover:text-primary font-didot spooky-link text-base">
                 What's New 2025
               </a>
-              <a href="#faq" className="block text-foreground/70 hover:text-primary font-didot spooky-link">
+              <a href="#faq" className="block text-foreground/70 hover:text-primary font-didot spooky-link text-base">
                 FAQ
               </a>
-              <a href="#contact" className="block text-foreground/70 hover:text-primary font-didot spooky-link">
+              <a href="#contact" className="block text-foreground/70 hover:text-primary font-didot spooky-link text-base">
                 Contact Us
               </a>
             </div>
@@ .. @@

           {/* Contact Info */}
           <div>
-            <h4 className="font-metal text-primary text-lg mb-4">Get In Touch</h4>
-            <div className="space-y-3">
-               <div className="flex items-start gap-3">
-                 <div className="w-6 h-6 rounded-full bg-fire mt-1" />
+            <h4 className="font-metal text-primary text-xl mb-6">Get In Touch</h4>
+            <div className="space-y-4">
+               <div className="flex items-start gap-4">
+                 <div className="w-6 h-6 rounded-full bg-primary mt-1 animate-pulse" />
                 <div>
-                  <h4 className="font-metal text-fire mb-1">2-Hour Sessions</h4>
-                  <p className="text-sm text-foreground/70 font-didot">
+                  <h5 className="font-metal text-fire mb-2">Location</h5>
+                  <p className="text-base text-foreground/70 font-didot leading-relaxed">
                     354 Bremen Ave<br />
                     Egg Harbor City, NJ 08215<br />
                     (Off Route 30)
@@ .. @@
                 </div>
               </div>
               
-               <div className="flex items-center gap-3">
-                 <div className="w-6 h-6 rounded-full bg-fire mt-1" />
+               <div className="flex items-center gap-4">
+                 <div className="w-6 h-6 rounded-full bg-primary animate-pulse" />
                 <a 
                   href="tel:(609) 957-6501" 
-                  className="text-foreground/70 hover:text-primary font-didot text-sm spooky-link"
+                  className="text-foreground/70 hover:text-primary font-didot text-base spooky-link"
                 >
                   (609) 957-6501
                 </a>
               </div>
               
-               <div className="flex items-center gap-3">
-                 <div className="w-6 h-6 rounded-full bg-fire mt-1" />
+               <div className="flex items-center gap-4">
+                 <div className="w-6 h-6 rounded-full bg-primary animate-pulse" />
                 <a 
                   href="mailto:info@foreverforestnj.com" 
-                  className="text-foreground/70 hover:text-primary font-didot text-sm spooky-link"
+                  className="text-foreground/70 hover:text-primary font-didot text-base spooky-link"
                 >
                   info@foreverforestnj.com
                 </a>
@@ .. @@
         </div>

         {/* Newsletter Signup */}
-        <div className="border-t border-border pt-8 mb-8">
-          <div className="text-center max-w-2xl mx-auto">
-            <h4 className="font-metal text-fire text-xl mb-3">
+        <div className="border-t border-border pt-12 mb-12">
+          <div className="text-center max-w-3xl mx-auto">
+            <h4 className="font-metal text-fire text-2xl mb-4 text-glow">
               Join Our Crypt of Secrets 🦇
             </h4>
-            <p className="text-foreground/70 font-didot mb-6">
-              Get early access to tickets, exclusive scares, and behind-the-scenes content delivered to your inbox.
+            <p className="text-foreground/70 font-didot mb-8 text-lg leading-relaxed">
+              Receive early access to premium tickets, exclusive behind-the-scenes content, and special event invitations 
+              delivered directly to your inbox.
             </p>
             
-            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
+            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
               <input 
                 type="email" 
                 placeholder="Enter your email if you dare..."
-                className="flex-1 bg-card border border-border rounded-lg px-4 py-3 text-foreground font-didot focus:border-primary focus:outline-none"
+                className="flex-1 bg-card border border-border rounded-xl px-6 py-4 text-foreground font-didot focus:border-primary focus:outline-none text-lg"
               />
-              <Button variant="fire">
+              <Button variant="fire" size="lg" className="font-metal">
                 Subscribe
               </Button>
             </div>
@@ .. @@
         </div>

         {/* Bottom Bar */}
-        <div className="border-t border-border pt-8">
-          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
+        <div className="border-t border-border pt-12">
+          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
             <div className="text-center md:text-left">
-              <p className="text-foreground/60 font-didot text-sm">
+              <p className="text-foreground/60 font-didot text-base">
                 © 2025 Forever Forest New Jersey. All rights reserved.
               </p>
-              <p className="text-foreground/60 font-didot text-sm">
+              <p className="text-foreground/60 font-didot text-base">
                 "Scaring guests since 2024" 🎃
               </p>
             </div>
             
-            <div className="flex items-center gap-6">
-              <a href="#" className="text-foreground/60 hover:text-primary font-didot text-sm spooky-link">
+            <div className="flex items-center gap-8">
+              <a href="#" className="text-foreground/60 hover:text-primary font-didot text-base spooky-link">
                 Privacy Policy
               </a>
-              <a href="#" className="text-foreground/60 hover:text-primary font-didot text-sm spooky-link">
+              <a href="#" className="text-foreground/60 hover:text-primary font-didot text-base spooky-link">
                 Terms of Service
               </a>
-              <a href="#" className="text-foreground/60 hover:text-primary font-didot text-sm spooky-link">
+              <a href="#" className="text-foreground/60 hover:text-primary font-didot text-base spooky-link">
                 Refund Policy
               </a>
             </div>
@@ .. @@
           
           {/* Christmas Experience Link */}
-          <div className="mt-6 text-center p-4 bg-success/10 border border-success/20 rounded-lg">
-            <p className="text-success font-didot text-sm mb-2">
+          <div className="mt-8 text-center p-6 bg-success/10 border border-success/30 rounded-2xl">
+            <p className="text-success font-didot text-lg mb-3">
               🎄 Don't miss our magical Christmas experience! 🎄
             </p>
-            <Button variant="ghost-halloween" size="sm" className="border-success text-success hover:bg-success/10">
+            <Button variant="ghost-halloween" size="lg" className="border-success text-success hover:bg-success/10 font-didot">
               Learn About Forever Forest Christmas
             </Button>
           </div>