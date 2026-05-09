import { Linkedin, Github, Mail, Phone } from "lucide-react";

const Socials = () => {
  return (
    <div className="fixed top-1/2 right-3 transform -translate-y-1/2 flex flex-col gap-3 z-50 hidden md:flex">
      {[
        { href: "https://www.linkedin.com/in/balasubrahmanyam-nandham-859968155/", icon: <Linkedin size={18} />, label: "LinkedIn" },
        { href: "https://github.com/SubrahmanyamNandham", icon: <Github size={18} />, label: "GitHub" },
        { href: "mailto:subrahmanyam.nandham@gmail.com", icon: <Mail size={18} />, label: "Email" },
        { href: "tel:+918919290366", icon: <Phone size={18} />, label: "Call" },
      ].map(({ href, icon, label }) => (
        <a key={label} href={href} target="_blank" rel="noopener noreferrer" title={label}
          className="w-9 h-9 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-[#3b82f6] hover:border-[#3b82f6]/50 transition">
          {icon}
        </a>
      ))}
    </div>
  );
};

export default Socials;
