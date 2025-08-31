@@ .. @@
   return (
-    <section className="py-20 px-6 bg-card relative">
+    <section id="faq" className="py-32 px-6 bg-card relative">
       {/* Background Pattern */}
-      <div className="absolute inset-0 opacity-5">
+      <div className="absolute inset-0 opacity-3">
         <div className="absolute inset-0" style={{
           backgroundImage: `
-            repeating-linear-gradient(
-              45deg,
-              hsl(var(--primary)) 0px,
-              hsl(var(--primary)) 1px,
-              transparent 1px,
-              transparent 20px
-            )
+            radial-gradient(circle at 30% 30%, hsl(var(--primary) / 0.1) 0%, transparent 50%),
+            radial-gradient(circle at 70% 70%, hsl(var(--accent) / 0.1) 0%, transparent 50%)
           `
         }} />
       </div>
       
       <div className="max-w-4xl mx-auto relative z-10">
         {/* Section Header */}
-        <div className="text-center mb-16">
-          <div className="mb-6">
-            <h2 className="text-4xl md:text-6xl font-metal text-fire text-glow">
+        <div className="text-center mb-20">
+          <div className="mb-8">
+            <h2 className="text-5xl md:text-7xl font-metal text-fire text-glow">
               Frequently Asked Questions
             </h2>
           </div>
-          <p className="text-xl text-foreground/80 font-didot">
-            Got questions about your terrifying adventure? We've got answers!
+          <p className="text-2xl text-foreground/85 font-didot max-w-3xl mx-auto leading-relaxed">
+            Professional answers to common questions about your premium Halloween experience.
           </p>
         </div>

         {/* FAQ Items */}
-        <div className="space-y-4 mb-12">
+        <div className="space-y-6 mb-16">
           {faqs.map((faq, index) => (
-            <div key={index} className="halloween-card rounded-xl overflow-hidden">
+            <div key={index} className="halloween-card rounded-2xl overflow-hidden shadow-dark">
               <button
-                className="w-full p-6 text-left flex items-center justify-between hover:bg-background/50 transition-colors duration-300"
+                className="w-full p-8 text-left flex items-center justify-between hover:bg-background/30 transition-colors duration-500"
                 onClick={() => setOpenIndex(openIndex === index ? null : index)}
               >
-                <h3 className="text-lg font-metal text-primary pr-4">
+                <h3 className="text-xl font-metal text-primary pr-6">
                   {faq.question}
                 </h3>
-                <div className={`text-2xl text-primary transform transition-transform duration-300 ${
+                <div className={`text-3xl text-primary transform transition-transform duration-500 ${
                   openIndex === index ? 'rotate-45' : ''
                 }`}>
                   +
@@ .. @@
               
               {openIndex === index && (
-                <div className="px-6 pb-6 animate-fade-in">
-                  <div className="border-t border-border pt-4">
-                    <p className="text-foreground/80 font-didot leading-relaxed">
+                <div className="px-8 pb-8 animate-fade-in">
+                  <div className="border-t border-border pt-6">
+                    <p className="text-foreground/80 font-didot leading-relaxed text-lg">
                       {faq.answer}
                     </p>
                   </div>
@@ .. @@
         </div>

         {/* Contact CTA */}
-        <div className="text-center bg-gradient-shadow rounded-2xl p-8">
-          <h3 className="text-2xl font-metal text-fire mb-4">Still Have Questions?</h3>
-          <p className="text-foreground/80 font-didot mb-6">
+        <div className="text-center glass-effect rounded-3xl p-12 border border-primary/20">
+          <h3 className="text-3xl font-metal text-fire mb-6 text-glow">Still Have Questions?</h3>
+          <p className="text-xl text-foreground/80 font-didot mb-8 max-w-2xl mx-auto leading-relaxed">
             Our friendly (non-scary) staff is here to help before your visit!
           </p>
           
-          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
-            <Button variant="fire" size="lg">
+          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
+            <Button variant="fire" size="xl" className="font-metal">
               Call (609) 957-6501
             </Button>
-            <Button variant="ghost-halloween" size="lg">
+            <Button variant="ghost-halloween" size="xl" className="font-didot">
               Email Us
             </Button>
           </div>
           
-          <div className="mt-6 pt-6 border-t border-border">
-            <p className="text-sm text-muted-foreground font-didot">
+          <div className="mt-8 pt-8 border-t border-border">
+            <p className="text-base text-muted-foreground font-didot">
               Business Hours: Monday-Friday 9AM-5PM | Weekend hours vary by season
             </p>
           </div>