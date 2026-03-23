import { motion } from "framer-motion";
import { MessageCircle, Lightbulb, CheckCircle } from "lucide-react";

const steps = [
  { icon: MessageCircle, num: "01", title: "Ask", desc: "Via Web, USSD, or WhatsApp", keyword: "Ask" },
  { icon: Lightbulb, num: "02", title: "Learn", desc: "AI explains simply and clearly", keyword: "Learn" },
  { icon: CheckCircle, num: "03", title: "Act", desc: "Vote smarter, stay informed", keyword: "Act" },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-dark text-dark-foreground">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-heading text-3xl md:text-4xl font-bold text-center"
        >
          Simple. <span className="text-primary">Accessible.</span> Powerful.
        </motion.h2>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.15 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto rounded-2xl bg-dark-muted flex items-center justify-center mb-5">
                <s.icon className="text-primary" size={28} />
              </div>
              <span className="text-primary font-heading text-sm font-semibold tracking-widest">{s.num}</span>
              <h3 className="font-heading text-2xl font-bold mt-2 text-primary">{s.title}</h3>
              <p className="mt-3 text-dark-foreground/60 text-sm">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
