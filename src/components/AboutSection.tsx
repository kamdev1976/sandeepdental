import dentistImage from "@/assets/dr-sandeep-mallik.jpg";
import { GraduationCap, Award, ShieldCheck, Calendar } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 px-4 md:px-8 bg-background">
      <div className="container-custom mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left: Image with Decorative Elements & Experience Badge */}
          <div className="relative animate-fade-up">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/50">
              <img
                src={dentistImage}
                alt="Dr. Sandeep Mallik, Dental Surgeon"
                className="w-full aspect-[4/5] object-cover hover:scale-105 transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>

            {/* Floating Trust Badge */}
            <div className="absolute -bottom-6 -right-2 md:bottom-6 md:-right-6 bg-card text-card-foreground p-4 md:p-5 rounded-xl shadow-lg border border-border flex items-center gap-4 max-w-[220px]">
              <div className="p-3 bg-primary/10 text-primary rounded-lg">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <p className="font-bold text-lg leading-tight">100%</p>
                <p className="text-xs text-muted-foreground font-medium">Patient-Centric Care</p>
              </div>
            </div>
          </div>

          {/* Right: Text & Details Content */}
          <div className="space-y-6 animate-fade-up animation-delay-200">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider">
              <span>About Dr. Sandeep Mallik</span>
            </div>

            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground leading-tight">
              Dedicated to Your Dental Health & Lasting Comfort
            </h2>

            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              With a commitment to clinical excellence in general and cosmetic dentistry, I focus on delivering personalized, pain-free treatments tailored to your lifestyle. Combining modern dental technology with a gentle, patient-first approach, every visit is designed to be seamless and comfortable.
            </p>

            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              I believe a healthy, confident smile can transform your overall wellness. By incorporating holistic healthcare principles into modern practice, I ensure long-term dental health for you and your family.
            </p>

            {/* Key Stats Bar */}
            <div className="grid grid-cols-2 gap-4 py-4 border-y border-border/60">
              <div>
                <h3 className="text-2xl font-bold text-primary">10+ Years</h3>
                <p className="text-xs text-muted-foreground">Clinical Experience</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary">5,000+</h3>
                <p className="text-xs text-muted-foreground">Happy Smiles Restored</p>
              </div>
            </div>

            {/* Structured Credentials */}
            <div className="grid sm:grid-cols-2 gap-6 pt-2">
              <div className="space-y-3">
                <div className="flex items-center gap-2 font-display font-semibold text-foreground">
                  <GraduationCap className="w-5 h-5 text-primary" />
                  <span>Education & Certification</span>
                </div>
                <ul className="text-muted-foreground text-sm space-y-1.5 list-disc list-inside">
                  <li>BDS (Bachelor of Dental Surgery)</li>
                  <li>Nutrient & Dietary Detox Consultant</li>
                </ul>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2 font-display font-semibold text-foreground">
                  <Award className="w-5 h-5 text-primary" />
                  <span>Affiliations</span>
                </div>
                <ul className="text-muted-foreground text-sm space-y-1.5 list-disc list-inside">
                  <li>Member, Indian Dental Association</li>
                  <li>Registered Dentist</li>
                </ul>
              </div>
            </div>

            {/* Action Callout */}
            <div className="pt-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-medium px-6 py-3 rounded-lg shadow hover:opacity-90 transition-opacity text-sm"
              >
                <Calendar className="w-4 h-4" />
                Book a Consultation
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;