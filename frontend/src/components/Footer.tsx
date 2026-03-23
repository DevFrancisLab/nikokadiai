const Footer = () => {
  return (
    <footer className="bg-dark text-dark-foreground py-12">
      <div className="container text-center">
        <span className="font-heading text-xl font-bold text-primary">Niko Kadi AI</span>
        <p className="mt-3 text-dark-foreground/50 text-sm max-w-md mx-auto">
          Empowering youth with knowledge, voice, and peace.
        </p>
        <div className="mt-6 flex justify-center gap-6 text-dark-foreground/40 text-xs">
          <a href="#features" className="hover:text-dark-foreground transition-colors">Features</a>
          <a href="#how-it-works" className="hover:text-dark-foreground transition-colors">How It Works</a>
          <a href="#cta" className="hover:text-dark-foreground transition-colors">Get Started</a>
        </div>
        <p className="mt-8 text-dark-foreground/30 text-xs">© 2026 Niko Kadi AI. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
