import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section id="cta" className="py-20 md:py-28 bg-background">
      <div className="container text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-heading text-3xl md:text-4xl font-bold text-foreground"
        >
          Ready to go beyond <span className="text-primary">'Niko Kadi'</span>?
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10"
        >
          <Button variant="hero" size="lg" className="px-12 py-6 text-lg w-full sm:w-auto">
            Get Started
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
