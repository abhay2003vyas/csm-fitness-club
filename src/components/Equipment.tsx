import { motion } from "framer-motion";

export default function Equipment() {
  const equipmentCategories = [
    {
      name: "Cardio Machines",
      icon: "fas fa-running",
      image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
      equipment: ["Treadmills", "Ellipticals", "Stationary Bikes", "Rowing Machines"],
    },
    {
      name: "Strength Training",
      icon: "fas fa-dumbbell",
      image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
      equipment: ["Cable Machines", "Smith Machine", "Leg Press", "Multi-stations"],
    },
    {
      name: "Free Weights",
      icon: "fas fa-weight-hanging",
      image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
      equipment: ["Dumbbells", "Barbells", "Weight Plates", "Kettlebells"],
    },
    {
      name: "CrossFit Setup",
      icon: "fas fa-fire",
      image: "https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
      equipment: ["Pull-up Bars", "Battle Ropes", "Plyo Boxes", "Medicine Balls"],
    },
  ];

  const features = [
    {
      icon: "fas fa-award",
      title: "International Brands",
      description: "Equipment from renowned global fitness brands",
    },
    {
      icon: "fas fa-tools",
      title: "Regular Maintenance",
      description: "Well-maintained and regularly serviced equipment",
    },
    {
      icon: "fas fa-sync-alt",
      title: "Latest Technology",
      description: "State-of-the-art fitness technology and features",
    },
  ];

  return (
    <section id="equipment" className="section-padding bg-white">
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
            Our <span className="text-gradient">Equipment</span>
          </h2>
          <div className="w-24 h-1 bg-orange-primary mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            State-of-the-art fitness equipment from leading brands to ensure the best workout experience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {equipmentCategories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 * index }}
              className="bg-gradient-to-br from-gray-light to-white rounded-2xl shadow-xl p-8 card-hover border border-gray-200"
              data-testid={`equipment-category-${index}`}
            >
              <div className="text-center">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-32 object-cover rounded-lg mb-4"
                />
                <div className="w-16 h-16 bg-orange-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className={`${category.icon} text-white text-2xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-black-primary mb-4">{category.name}</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  {category.equipment.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center justify-center">
                      <i className="fas fa-check text-orange-primary mr-2"></i>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Equipment Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 bg-gradient-to-r from-orange-primary to-orange-600 rounded-2xl p-8 md:p-12 text-white"
        >
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">Premium Equipment Features</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={feature.title} className="text-center" data-testid={`feature-${index}`}>
                  <i className={`${feature.icon} text-4xl mb-4`}></i>
                  <h4 className="font-semibold mb-2">{feature.title}</h4>
                  <p className="text-sm opacity-90">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
