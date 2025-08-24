import { motion } from "framer-motion";

export default function About() {
  const teamMembers = [
    {
      name: "Nima M. Wasu",
      role: "Head Trainer",
      description: "Certified Personal Trainer with expertise in strength training and nutrition",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
    },
    {
      name: "John Doe",
      role: "MMA Coach",
      description: "Professional MMA fighter and certified combat sports instructor",
      image: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
    },
    {
      name: "Priya Sharma",
      role: "Yoga Instructor",
      description: "Certified yoga teacher specializing in Hatha and Vinyasa flow",
      image: "https://pixabay.com/get/g7544517ce23b67d161ab3ce18e371beacf9e4477bbcb95c295b3323b804de0762054b0a354f52ff4ed87274f2951180c12dadf08d844a847825dca0d2d45107f_1280.jpg",
    },
    {
      name: "Rahul Patil",
      role: "Manager",
      description: "Operations manager ensuring smooth gym operations and member satisfaction",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
    },
  ];

  return (
    <section id="about" className="section-padding bg-gray-light">
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
            About <span className="text-gradient">Our Gym</span>
          </h2>
          <div className="w-24 h-1 bg-orange-primary mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Our mission is to provide world-class fitness facilities and training to help you achieve your best version.
          </p>
        </motion.div>

        {/* Founder Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-16 card-hover"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-poppins font-bold text-black-primary mb-4">Meet Our Director</h3>
              <h4 className="text-xl font-semibold text-orange-primary mb-4">Mahesh Wasu</h4>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                "Our mission is to provide world-class fitness facilities and training to help you achieve your best version. We believe in empowering individuals through fitness, creating a community of strong, confident, and healthy people."
              </p>
              <div className="flex items-center space-x-4">
                <div className="text-orange-primary">
                  <i className="fas fa-dumbbell text-2xl"></i>
                </div>
                <div>
                  <p className="font-semibold text-black-primary">Gym Director</p>
                  <p className="text-gray-600">15+ Years Experience</p>
                </div>
              </div>
            </div>
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
                alt="Mahesh Wasu - Gym Director"
                className="w-64 h-64 rounded-full object-cover mx-auto shadow-lg"
              />
            </div>
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl md:text-3xl font-poppins font-bold text-black-primary mb-8">Our Expert Team</h3>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 * index }}
              className="bg-white rounded-xl shadow-lg p-6 text-center card-hover"
              data-testid={`team-member-${index}`}
            >
              <img
                src={member.image}
                alt={`${member.name} - ${member.role}`}
                className="w-24 h-24 rounded-full object-cover mx-auto mb-4 border-4 border-orange-primary"
              />
              <h4 className="font-semibold text-black-primary text-lg mb-2">{member.name}</h4>
              <p className="text-orange-primary font-medium mb-2">{member.role}</p>
              <p className="text-gray-600 text-sm">{member.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
