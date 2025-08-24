import { motion } from "framer-motion";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="home" className="hero-bg min-h-screen flex items-center justify-center relative">
      <div className="absolute inset-0 bg-gradient-to-r from-black-primary/80 to-orange-primary/20"></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-devanagari text-white text-2xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight"
          >
            धर्मवीर छत्रपती संभाजीराजे फिटनेस क्लब
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white text-3xl md:text-5xl lg:text-7xl font-poppins font-bold mb-6 leading-tight"
          >
            Transform Your <span className="text-gradient">Body</span>,<br />
            Transform Your <span className="text-gradient">Life</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-300 text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Join our world-class fitness facility with state-of-the-art equipment, expert trainers, and comprehensive wellness programs designed to help you achieve your best version.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button
              onClick={() => scrollToSection("pricing")}
              className="btn-gradient text-white px-8 py-4 rounded-full text-lg font-semibold flex items-center space-x-2 animate-bounce-gentle"
              data-testid="button-join-now"
            >
              <span>Join Now</span>
              <i className="fas fa-arrow-right"></i>
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="border-2 border-white text-white hover:bg-white hover:text-black-primary px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 flex items-center space-x-2"
              data-testid="button-view-pricing"
            >
              <span>View Pricing</span>
              <i className="fas fa-rupee-sign"></i>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
      >
        <i className="fas fa-chevron-down text-2xl"></i>
      </motion.div>
    </section>
  );
}
