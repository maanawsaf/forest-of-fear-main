import { useState } from "react";
import { Button } from "@/components/ui/button";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Where is Forever Forest located?",
      answer: "Forever Forest is located at 354 Bremen Ave, Egg Harbor City, New Jersey 08215. We're just off Route 30, about 10 miles from Atlantic City. Look for our Halloween decorations to guide you to the entrance!"
    },
    {
      question: "What happens if it rains?",
      answer: "Forever Forest operates rain or shine! Most of our attractions are weather-resistant, but we recommend bringing appropriate rain gear. In case of severe weather conditions, we may temporarily suspend outdoor activities for safety reasons and will provide updates on our website and social media."
    },
    {
      question: "Is the nighttime experience really that scary?",
      answer: "Yes! Our nighttime Halloween experience features professional scare actors, intense sound effects, and genuinely frightening situations. It's designed for ages 13+ and is not recommended for young children, pregnant women, or those with heart conditions. Enter at your own risk!"
    },
    {
      question: "Can I dress up in costume?",
      answer: "Absolutely! We encourage guests to come in costume for both day and night sessions. However, for safety reasons, we ask that costumes don't include weapons, masks that obstruct vision, or anything that could be mistaken for our scare actors' costumes."
    },
    {
      question: "Are pets allowed?",
      answer: "Due to the nature of our attractions with loud sounds, fog effects, and crowds, pets are not permitted at Forever Forest for their safety and the safety of our guests. Service animals are welcome with proper documentation."
    },
    {
      question: "Do you sell food and drinks?",
      answer: "Yes! We have several food vendors offering Halloween-themed treats, hot cocoa, coffee, and seasonal snacks. We also have a full concession area with pizza, burgers, and other comfort foods to fuel your frightful adventure."
    },
    {
      question: "How long does the experience last?",
      answer: "The daytime experience typically lasts 2-3 hours, while the nighttime experience can take 3-4 hours depending on crowd size and how brave you are! We recommend allowing plenty of time to enjoy all attractions."
    },
    {
      question: "Is parking included?",
      answer: "Yes, parking is completely free for all ticket holders. We have a large parking area that can accommodate cars, buses, and RVs. Our staff will direct you to available spots upon arrival."
    },
    {
      question: "Can I get my money back if I'm too scared to continue?",
      answer: "All sales are final once you enter the attractions. However, we do have 'chicken exits' throughout our haunted trail for those who need to leave early. We also have staff members available to assist anyone who needs help."
    },
    {
      question: "Do you offer group discounts?",
      answer: "Yes! We offer special group rates for parties of 10 or more people. Contact us at (609) 957-6501 or info@foreverforestnj.com for group pricing and to arrange your visit. We also offer corporate packages and private events."
    }
  ];

  return (
    <section className="py-20 px-6 bg-card relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            repeating-linear-gradient(
              45deg,
              hsl(var(--primary)) 0px,
              hsl(var(--primary)) 1px,
              transparent 1px,
              transparent 20px
            )
          `
        }} />
      </div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="mb-6">
            <h2 className="text-4xl md:text-6xl font-metal text-fire text-glow">
              Frequently Asked Questions
            </h2>
          </div>
          <p className="text-xl text-foreground/80 font-didot">
            Got questions about your terrifying adventure? We've got answers!
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4 mb-12">
          {faqs.map((faq, index) => (
            <div key={index} className="halloween-card rounded-xl overflow-hidden">
              <button
                className="w-full p-6 text-left flex items-center justify-between hover:bg-background/50 transition-colors duration-300"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <h3 className="text-lg font-metal text-primary pr-4">
                  {faq.question}
                </h3>
                <div className={`text-2xl text-primary transform transition-transform duration-300 ${
                  openIndex === index ? 'rotate-45' : ''
                }`}>
                  +
                </div>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6 animate-fade-in">
                  <div className="border-t border-border pt-4">
                    <p className="text-foreground/80 font-didot leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center bg-gradient-shadow rounded-2xl p-8">
          <h3 className="text-2xl font-metal text-fire mb-4">Still Have Questions?</h3>
          <p className="text-foreground/80 font-didot mb-6">
            Our friendly (non-scary) staff is here to help before your visit!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="fire" size="lg">
              Call (609) 957-6501
            </Button>
            <Button variant="ghost-halloween" size="lg">
              Email Us
            </Button>
          </div>
          
          <div className="mt-6 pt-6 border-t border-border">
            <p className="text-sm text-muted-foreground font-didot">
              Business Hours: Monday-Friday 9AM-5PM | Weekend hours vary by season
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;