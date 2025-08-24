import { motion } from "framer-motion";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const quickLinks = [
    { href: "home", label: "Home" },
    { href: "about", label: "About Us" },
    { href: "services", label: "Services" },
    { href: "pricing", label: "Pricing" },
    { href: "equipment", label: "Equipment" },
    { href: "contact", label: "Contact" },
  ];

  const socialLinks = [
    { icon: "fab fa-facebook-f", href: "#", label: "Facebook" },
    { icon: "fab fa-instagram", href: "#", label: "Instagram" },
    { icon: "fab fa-whatsapp", href: "#", label: "WhatsApp" },
    { icon: "fab fa-youtube", href: "#", label: "YouTube" },
  ];

  const footerLinks = [
    { href: "#", label: "Privacy Policy" },
    { href: "#", label: "Terms of Service" },
    { href: "#", label: "FAQ" },
  ];

  return (
    <footer className="bg-black-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center space-x-3 mb-6"
            >
              <div className="w-12 h-12 bg-orange-primary rounded-full flex items-center justify-center">
                <i className="fas fa-dumbbell text-white text-xl"></i>
              </div>
              <div>
                <div className="font-devanagari font-bold text-lg leading-tight">धर्मवीर छत्रपती</div>
                <div className="font-devanagari font-semibold text-sm text-orange-primary">संभाजीराजे फिटनेस क्लब</div>
              </div>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-gray-300 leading-relaxed mb-6 max-w-md"
            >
              Transform your body and mind at our world-class fitness facility. Join a community dedicated to health, strength, and personal growth.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex space-x-4"
            >
              {socialLinks.map((social, index) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-gray-dark rounded-full flex items-center justify-center text-white hover:bg-orange-primary transition-colors"
                  data-testid={`footer-social-${index}`}
                  aria-label={social.label}
                >
                  <i className={social.icon}></i>
                </a>
              ))}
            </motion.div>
          </div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="font-semibold text-lg mb-4 text-orange-primary">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-orange-primary transition-colors text-left"
                    data-testid={`footer-nav-${link.href}`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="font-semibold text-lg mb-4 text-orange-primary">Contact Info</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-start space-x-2">
                <i className="fas fa-map-marker-alt text-orange-primary mt-1"></i>
                <span className="text-sm">123 Fitness Street, Shivaji Nagar, Pune, Maharashtra 411005</span>
              </div>
              <div className="flex items-center space-x-2">
                <i className="fas fa-phone text-orange-primary"></i>
                <span className="text-sm">9579753774</span>
              </div>
              <div className="flex items-center space-x-2">
                <i className="fas fa-envelope text-orange-primary"></i>
                <span className="text-sm">info@csmfitnessclub.com</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="border-t border-gray-dark pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 धर्मवीर छत्रपती संभाजीराजे फिटनेस क्लब. All rights reserved.
            </p>
            <div className="flex space-x-6">
              {footerLinks.map((link, index) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-gray-400 hover:text-orange-primary text-sm transition-colors"
                  data-testid={`footer-link-${index}`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
