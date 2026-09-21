import { Sparkles, Shield, Smile, Zap, Heart, Clock, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Sparkles,
    title: "Teeth Whitening",
    description: "Professional whitening treatments that brighten your smile by several shades in just one visit.",
  },
  {
    icon: Shield,
    title: "Preventive Care",
    description: "Comprehensive exams, cleanings, and personalized prevention plans to maintain optimal oral health.",
  },
  {
    icon: Smile,
    title: "Cosmetic Dentistry",
    description: "Veneers, bonding, and smile makeovers designed to enhance your natural aesthetic.",
  },
  {
    icon: Zap,
    title: "Invisalign® Aligners",
    description: "Clear aligner therapy for straighter teeth discreetly without traditional metal braces.",
  },
  {
    icon: Heart,
    title: "Restorative Care",
    description: "Crowns, bridges, and dental implants that restore full function and aesthetics seamlessly.",
  },
  {
    icon: Clock,
    title: "Emergency Care",
    description: "Same-day priority appointments available for immediate relief during dental emergencies.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-secondary/30">
      <div className="container-custom mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-3">
            Our Dental Services
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground leading-tight">
            Comprehensive Care for Your Perfect Smile
          </h2>
          <p className="text-muted-foreground text-base md:text-lg mt-4">
            From routine checkups to complete cosmetic transformations, we offer modern, gentle dental care tailored to your family's needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative bg-card p-8 rounded-2xl border border-border/60 shadow-sm hover:shadow-xl hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div>
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                  {service.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-border/40">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                >
                  <span>Book Treatment</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;