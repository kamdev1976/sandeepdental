import { Star, Quote, CheckCircle2 } from "lucide-react";

const testimonials = [
  {
    name: "Jennifer Adams",
    role: "Patient since 2021",
    content: "Dr. Mallik transformed my smile with cosmetic treatments and I couldn't be happier. His attention to detail and gentle approach made the entire process completely pain-free.",
    rating: 5,
  },
  {
    name: "Michael Torres",
    role: "Patient since 2022",
    content: "As someone who used to suffer from severe dental anxiety, I was amazed at how relaxed I felt. The team takes time to explain every step before proceeding.",
    rating: 5,
  },
  {
    name: "Sarah Chen",
    role: "Patient since 2020",
    content: "The best dental clinic experience I've had. Modern infrastructure, minimal waiting time, and Dr. Mallik truly prioritizes long-term patient dental health.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-background">
      <div className="container-custom mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-3">
            Patient Stories
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground leading-tight">
            What Our Patients Say
          </h2>
          <p className="text-muted-foreground text-base md:text-lg mt-4">
            Real experiences from patients who entrusted us with their smiles and dental care.
          </p>

          {/* Social Proof Aggregate Banner */}
          <div className="mt-6 inline-flex items-center gap-3 bg-card px-4 py-2 rounded-full border border-border shadow-sm text-sm">
            <div className="flex gap-0.5 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-500" />
              ))}
            </div>
            <span className="font-semibold text-foreground">4.9 / 5.0</span>
            <span className="text-muted-foreground">• Based on 150+ Patient Reviews</span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="relative bg-card p-8 rounded-2xl border border-border/60 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/10 pointer-events-none" />

              <div>
                {/* Rating */}
                <div className="flex gap-1 mb-6 text-amber-500">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-foreground/90 leading-relaxed text-sm md:text-base italic mb-8">
                  "{testimonial.content}"
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-4 border-t border-border/40">
                <div className="w-11 h-11 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-base">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="flex items-center gap-1.5 font-semibold text-foreground text-sm">
                    <span>{testimonial.name}</span>
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;