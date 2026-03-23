import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark text-dark-foreground">
      <div className="container flex items-center justify-between h-16">
        <a href="#" className="font-heading text-xl font-bold tracking-tight">
          Niko Kadi <span className="text-primary">AI</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm text-dark-foreground/70 hover:text-dark-foreground transition-colors">Features</a>
          <a href="#how-it-works" className="text-sm text-dark-foreground/70 hover:text-dark-foreground transition-colors">How It Works</a>
          <Button variant="hero" size="sm" asChild>
            <a href="#cta">Try Now</a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-dark-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-dark border-t border-dark-muted pb-4">
          <div className="container flex flex-col gap-4 pt-4">
            <a href="#features" onClick={() => setOpen(false)} className="text-sm text-dark-foreground/70">Features</a>
            <a href="#how-it-works" onClick={() => setOpen(false)} className="text-sm text-dark-foreground/70">How It Works</a>
            <Button variant="hero" size="sm" className="w-full" asChild>
              <a href="#cta">Try Now</a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
