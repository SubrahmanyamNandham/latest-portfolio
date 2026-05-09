import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';

function ContactForm() {
  const [state, handleSubmit] = useForm("mjglagpz");

  return (
    <section id='contact' className="bg-[#0a0a0f] py-16 px-4 sm:px-6 lg:px-8 flex flex-col items-center"
      style={{ fontFamily: "'Sora', sans-serif" }}>

      <div className="w-full max-w-4xl">
        <div className="text-center mb-12">
          <p className="text-[#3b82f6] text-sm tracking-[0.3em] uppercase mb-2 font-medium">Contact</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Get in Touch</h2>
          <p className="text-gray-400 mt-3 text-sm">Have a project in mind or want to collaborate? I'd love to hear from you.</p>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Contact Info */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:w-2/5 flex flex-col gap-4">
            <h3 className="text-white font-semibold mb-2">Contact Details</h3>
            {[
              { icon: <Mail size={16} />, label: "Email", value: "subrahmanyam.nandham@gmail.com", href: "mailto:subrahmanyam.nandham@gmail.com" },
              { icon: <Phone size={16} />, label: "Phone", value: "+91 89192 90366", href: "tel:+918919290366" },
              { icon: <Linkedin size={16} />, label: "LinkedIn", value: "balasubrahmanyam-nandham", href: "https://www.linkedin.com/in/balasubrahmanyam-nandham-859968155/" },
              { icon: <Github size={16} />, label: "GitHub", value: "SubrahmanyamNandham", href: "https://github.com/SubrahmanyamNandham" },
            ].map(({ icon, label, value, href }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl border border-white/5 hover:border-[#3b82f6]/30 transition group">
                <span className="text-[#3b82f6] group-hover:scale-110 transition">{icon}</span>
                <div>
                  <div className="text-xs text-gray-500">{label}</div>
                  <div className="text-sm text-gray-300 group-hover:text-white transition">{value}</div>
                </div>
              </a>
            ))}
          </div>

          {/* Form */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:w-3/5">
            {state.succeeded ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-8">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center mb-4">
                  <span className="text-2xl">✓</span>
                </div>
                <p className="text-white font-semibold text-lg">Message Sent!</p>
                <p className="text-gray-400 text-sm mt-1">I'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm text-gray-400 mb-1">Name</label>
                  <input id="name" type="text" name="name" placeholder="Your Name" required
                    className="w-full p-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-[#3b82f6]/50 text-sm transition" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm text-gray-400 mb-1">Email</label>
                  <input id="email" type="email" name="email" placeholder="your@email.com" required
                    className="w-full p-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-[#3b82f6]/50 text-sm transition" />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm text-gray-400 mb-1">Message</label>
                  <textarea id="message" name="message" placeholder="Tell me about your project..." required
                    className="w-full p-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-[#3b82f6]/50 h-28 resize-none text-sm transition" />
                  <ValidationError prefix="Message" field="message" errors={state.errors} />
                </div>
                <button type="submit" disabled={state.submitting}
                  className="w-full py-3 rounded-xl bg-[#3b82f6] hover:bg-[#2563eb] text-white font-semibold text-sm transition shadow-lg shadow-blue-500/20 disabled:opacity-50 cursor-pointer">
                  {state.submitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
