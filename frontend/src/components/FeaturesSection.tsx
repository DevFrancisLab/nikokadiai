import { motion } from "framer-motion";
import { Bot, Vote, GitCompare, BarChart3, Shield } from "lucide-react";

const features = [
  { icon: Bot, title: "AI Civic Assistant", desc: "Ask anything about elections, governance, and your rights — powered by AI that speaks your language." },
  { icon: Vote, title: "Voter Toolkit", desc: "Find your polling station, check registration status, and get a personalized voting checklist." },
  { icon: GitCompare, title: "Candidate Compare", desc: "Side-by-side comparison of candidates on policies, track records, and promises." },
  { icon: BarChart3, title: "Youth Pulse", desc: "Real-time sentiment from young voters across Kenya — see what matters most to your generation." },
  { icon: Shield, title: "Peace Mode", desc: "Hate speech detection and de-escalation tools to promote peaceful civic engagement." },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 md:py-28 bg-background">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-heading text-3xl md:text-4xl font-bold text-center text-foreground"
        >
          Everything You Need to Navigate Elections
        </motion.h2>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-card rounded-2xl p-6 shadow-sm border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <f.icon className="text-primary" size={24} />
              </div>
              <h3 className="font-heading text-lg font-semibold text-primary mb-2">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
