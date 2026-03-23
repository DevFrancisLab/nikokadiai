import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark">
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/herobackground.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-dark/50" />

      {/* Content */}
      <div className="relative z-10 container text-center px-4 pt-20">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="font-heading text-4xl sm:text-5xl md:text-7xl font-bold text-dark-foreground leading-tight"
        >
          Niko Kadi… <span className="text-primary">Now What?</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 max-w-2xl mx-auto text-dark-foreground/70 text-base sm:text-lg md:text-xl"
        >
          Kenya's AI-powered civic assistant helping youth understand elections, compare candidates, and stay informed.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button variant="hero" size="lg" className="w-full sm:w-auto px-8 py-6 text-lg">
            Try AI Assistant
          </Button>
          <Button variant="heroOutline" size="lg" className="w-full sm:w-auto px-8 py-6 text-lg">
            Dial *XYZ#
          </Button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-6 text-dark-foreground/40 text-sm"
        >
          Works on any phone — even without internet (USSD)
        </motion.p>
      </div>
    </section>
  );
};

export default HeroSection;
