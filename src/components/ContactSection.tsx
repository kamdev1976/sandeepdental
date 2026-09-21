import React, { useState } from "react";
import { MapPin, Phone, Clock, ExternalLink, Calendar, Send, CheckCircle2 } from "lucide-react";

// 1. Array of Clinic Locations
const locations = [
  {
    id: "sangam-vihar",
    branchName: "Sangam Vihar Branch",
    city: "New Delhi",
    address: "H-16, Ground Floor, 173, Ratiya Marg, Near Hera Public School & Jain Mandir",
    fullCityState: "Sangam Vihar, New Delhi, Delhi 110080",
    phone: "9625665226 ,9971427556", // Update with actual contact number
    mapUrl: "https://maps.google.com/?q=H-16+Ground+Floor+173+Ratiya+Marg+Sangam+Vihar+New+Delhi",
    hours: "Mon - Sat: 10:00 AM - 8:00 PM | Sun: By Appointment",
  },
  {
    id: "noida-extension",
    branchName: "Greater Noida Branch",
    city: "Noida Extension",
    address: "Ambesten Twin City Walk, Sector 1, Extension, Bisrakh Jalalpur",
    fullCityState: "Noida, Greater Noida, Uttar Pradesh 201318",
    phone: "9625665226 ,9971427556", // Update with actual contact number
    mapUrl: "https://maps.app.goo.gl/4bhhQkfqMD12PKpC7?g_st=awb",
    hours: "Mon - Sat: 10:00 AM - 8:00 PM | Sun: Closed",
  },
];

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    branch: locations[0].id,
    date: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Connect to your email API or backend logic here
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-background">
      <div className="container-custom mx-auto px-4 md:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-3">
            Contact & Appointments
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground leading-tight">
            Visit Our Clinics or Book an Appointment
          </h2>
          <p className="text-muted-foreground text-base md:text-lg mt-4">
            Dr. Sandeep Mallik provides comprehensive dental care across two modern clinic locations in New Delhi and Greater Noida.
          </p>
        </div>

        {/* Top: Multi-Location Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {locations.map((loc) => (
            <div
              key={loc.id}
              className="bg-card p-6 md:p-8 rounded-2xl border border-border/60 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-border/50 pb-3">
                  <h3 className="font-display text-xl font-bold text-foreground">
                    {loc.branchName}
                  </h3>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-primary/10 text-primary">
                    {loc.city}
                  </span>
                </div>

                {/* Address */}
                <div className="flex items-start gap-3 text-muted-foreground text-sm leading-relaxed">
                  <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">{loc.address}</p>
                    <p>{loc.fullCityState}</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-3 text-muted-foreground text-sm">
                  <Phone className="w-4 h-4 text-primary shrink-0" />
                  <a href={`tel:${loc.phone}`} className="hover:text-primary transition-colors">
                    {loc.phone}
                  </a>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-3 text-muted-foreground text-sm">
                  <Clock className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>{loc.hours}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2">
                <a
                  href={loc.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-border bg-card text-foreground text-xs font-semibold hover:bg-secondary transition-colors"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom: Appointment Booking Form */}
        <div id="book-appointment" className="max-w-3xl mx-auto bg-card p-8 md:p-10 rounded-2xl border border-border/60 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="font-display text-2xl font-bold text-foreground">
              Request a Consultation
            </h3>
            <p className="text-muted-foreground text-sm mt-1">
              Fill out the form below and our team will call you to confirm your time slot.
            </p>
          </div>

          {submitted ? (
            <div className="text-center py-8 space-y-3">
              <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
              <h4 className="text-xl font-bold text-foreground">Appointment Request Received!</h4>
              <p className="text-muted-foreground text-sm">
                Thank you. We will reach out shortly to confirm your scheduled appointment.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-foreground">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                {/* Phone Number */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-foreground">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Preferred Branch Selector */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-foreground">
                    Preferred Clinic Branch
                  </label>
                  <select
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                    value={formData.branch}
                    onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                  >
                    {locations.map((loc) => (
                      <option key={loc.id} value={loc.id}>
                        {loc.branchName} ({loc.city})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Date */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-foreground">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  />
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-foreground">
                  Dental Concern / Reason for Visit
                </label>
                <textarea
                  rows={3}
                  placeholder="e.g. Routine cleaning, teeth whitening, or tooth pain..."
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3.5 rounded-xl shadow hover:opacity-90 transition-opacity text-sm"
              >
                <Calendar className="w-4 h-4" />
                <span>Confirm Appointment Booking</span>
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
};

export default ContactSection;