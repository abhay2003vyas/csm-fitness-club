import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      title: "Gym Fitness Classes",
      icon: "fas fa-dumbbell",
      description: "Comprehensive strength training and cardio workouts designed for all fitness levels. Build muscle, improve endurance, and achieve your body goals.",
      features: ["Full body workouts", "Expert guidance", "Flexible timings"],
      duration: "Unlimited access",
    },
    {
      title: "MMA Classes",
      icon: "fas fa-fist-raised",
      description: "Mixed Martial Arts training combining boxing, wrestling, and ground fighting techniques. Perfect for self-defense and overall fitness.",
      features: ["Professional coaching", "Beginner friendly", "Competition prep"],
      duration: "60 minutes/session",
    },
    {
      title: "Power Lifting",
      icon: "fas fa-weight-hanging",
      description: "Focus on the three main lifts: squat, bench press, and deadlift. Build maximum strength with proper form and progressive overload.",
      features: ["Strength-focused training", "Competition prep", "Advanced techniques"],
      duration: "Specialized sessions",
    },
    {
      title: "Personal Training",
      icon: "fas fa-user-tie",
      description: "One-on-one coaching with certified personal trainers. Customized workout plans and nutrition guidance for faster results.",
      features: ["Personalized programs", "Nutrition guidance", "Progress tracking"],
      duration: "1-2 months packages",
    },
    {
      title: "Zumba & Cardio",
      icon: "fas fa-music",
      description: "High-energy dance fitness classes and cardio workouts. Burn calories while having fun in a group setting.",
      features: ["Fun group classes", "Calorie burning", "All ages welcome"],
      duration: "45 minutes/session",
    },
  ];

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-poppins font-bold text-black-primary mb-4">
            Our <span className="text-gradient">Services</span>
          </h2>
          <div className="w-24 h-1 bg-orange-primary mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Comprehensive fitness programs designed to meet all your health and wellness goals.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 * index }}
              className={`bg-gradient-to-br from-gray-light to-white rounded-2xl shadow-xl p-8 card-hover border border-gray-200 ${
                index === 4 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
              data-testid={`service-card-${index}`}
            >
              <div className="w-16 h-16 bg-orange-primary rounded-full flex items-center justify-center mb-6">
                <i className={`${service.icon} text-white text-2xl`}></i>
              </div>
              <h3 className="text-xl font-bold text-black-primary mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
              <ul className="text-sm text-gray-600 space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <i className="fas fa-check text-orange-primary mr-2"></i>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="text-orange-primary font-semibold">Duration: {service.duration}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
