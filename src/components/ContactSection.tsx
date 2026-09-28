import React, { useState } from 'react';
import { MapPin, Phone, Clock, ExternalLink } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    branch: 'Sangam Vihar Branch (New Delhi)',
    preferredDate: '',
    reason: '',
  });

  const WHATSAPP_NUMBER = '919625665226';

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName || !formData.phone) {
      alert('Please fill in your name and phone number.');
      return;
    }

    const message = `Hello Dr. Sandeep's Dental Hub, I would like to book an appointment.

*Appointment Request Details:*
👤 *Name:* ${formData.fullName}
📞 *Phone:* ${formData.phone}
🏥 *Preferred Branch:* ${formData.branch}
📅 *Preferred Date:* ${formData.preferredDate || 'Not specified'}
💬 *Concern / Reason:* ${formData.reason || 'General Consultation'}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-12 bg-slate-50/50" id="contact">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Branch Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Sangam Vihar Branch */}
          <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-100 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-serif font-bold text-slate-800">
                Sangam Vihar Branch
              </h3>
              <span className="text-xs font-semibold px-2.5 py-1 bg-emerald-50 text-emerald-700 rounded-full border border-emerald-100">
                New Delhi
              </span>
            </div>

            <div className="space-y-3 text-sm text-slate-600">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-600 mt-1 shrink-0" />
                <p>
                  H-16, Ground Floor, 173, Ratiya Marg, Near Hera Public School & Jain Mandir<br />
                  Sangam Vihar, New Delhi, Delhi 110080
                </p>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-600 shrink-0" />
                <p>9625665226 ,9971427556</p>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-emerald-600 shrink-0" />
                <p>Mon - Sat: 10:00 AM - 8:00 PM | Sun: By Appointment</p>
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=Sangam+Vihar+New+Delhi"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-white border border-slate-200 text-slate-700 font-semibold rounded-xl text-xs hover:bg-slate-50 transition"
            >
              <span>Open in Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Greater Noida Branch */}
          <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-100 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-serif font-bold text-slate-800">
                Greater Noida Branch
              </h3>
              <span className="text-xs font-semibold px-2.5 py-1 bg-teal-50 text-teal-700 rounded-full border border-teal-100">
                Noida Extension
              </span>
            </div>

            <div className="space-y-3 text-sm text-slate-600">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-teal-600 mt-1 shrink-0" />
                <p>
                  Ambesten Twin City Walk, Sector 1, Extension, Bisrakh Jalalpur<br />
                  Noida, Greater Noida, Uttar Pradesh 201318
                </p>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-teal-600 shrink-0" />
                <p>9625665226 ,9971427556</p>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-teal-600 shrink-0" />
                <p>Mon - Sat: 10:00 AM - 8:00 PM | Sun: Closed</p>
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=Ambesten+Twin+City+Walk+Noida+Extension"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-white border border-slate-200 text-slate-700 font-semibold rounded-xl text-xs hover:bg-slate-50 transition"
            >
              <span>Open in Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Consultation Request Form */}
        <div className="bg-white p-6 md:p-10 rounded-2xl border border-slate-100 shadow-sm max-w-3xl mx-auto space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-800">
              Request a Consultation
            </h2>
            <p className="text-sm text-slate-500">
              Fill out the form below and our team will call you to confirm your time slot.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="e.g. Rahul Sharma"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 text-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                  Preferred Clinic Branch
                </label>
                <select
                  name="branch"
                  value={formData.branch}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 text-sm"
                >
                  <option value="Sangam Vihar Branch (New Delhi)">
                    Sangam Vihar Branch (New Delhi)
                  </option>
                  <option value="Greater Noida Branch (Noida Extension)">
                    Greater Noida Branch (Noida Extension)
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                  Preferred Date
                </label>
                <input
                  type="date"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                Dental Concern / Reason for Visit
              </label>
              <textarea
                name="reason"
                rows={3}
                value={formData.reason}
                onChange={handleChange}
                placeholder="e.g. Routine cleaning, teeth whitening, or tooth pain..."
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 text-sm"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-xl shadow-sm transition-all duration-200 text-sm"
            >
              Confirm Appointment Booking
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;