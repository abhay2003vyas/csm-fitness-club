import { motion } from "framer-motion";
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

interface MembershipData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  planType: string;
  duration: string;
  amount: string;
}

export default function Pricing() {
  const [selectedPlan, setSelectedPlan] = useState<any>(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const membershipMutation = useMutation({
    mutationFn: async (data: MembershipData) => {
      const response = await apiRequest("POST", "/api/membership", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Membership Created!",
        description: "Welcome to our fitness family! We'll contact you soon.",
      });
      setSelectedPlan(null);
      setFormData({ firstName: "", lastName: "", email: "", phone: "" });
      queryClient.invalidateQueries({ queryKey: ["/api/memberships"] });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to create membership. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handlePlanSelect = (plan: any) => {
    setSelectedPlan(plan);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedPlan && formData.firstName && formData.lastName && formData.email && formData.phone) {
      membershipMutation.mutate({
        ...formData,
        planType: selectedPlan.type,
        duration: selectedPlan.duration,
        amount: selectedPlan.price,
      });
    }
  };

  const regularPlans = [
    {
      type: "Monthly",
      duration: "1 month",
      price: "₹1,500",
      icon: "fas fa-calendar-alt",
      description: "Perfect for beginners",
      features: ["Full gym access", "Group classes", "Diet consultation", "Locker facility"],
      popular: false,
    },
    {
      type: "Quarterly",
      duration: "3 months",
      price: "₹4,000",
      icon: "fas fa-calendar-check",
      description: "Best value for money",
      features: ["Full gym access", "Group classes", "Diet consultation", "Priority booking"],
      popular: true,
    },
    {
      type: "Half-Yearly",
      duration: "6 months",
      price: "₹7,500",
      icon: "fas fa-calendar-week",
      description: "Great savings plan",
      features: ["Full gym access", "Group classes", "Diet consultation", "Premium support"],
      popular: false,
    },
    {
      type: "Yearly",
      duration: "12 months",
      price: "₹14,000",
      icon: "fas fa-crown",
      description: "Maximum savings",
      features: ["Full gym access", "Group classes", "Diet consultation", "VIP treatment"],
      popular: false,
    },
  ];

  const specialPlans = [
    {
      type: "Guest Pass",
      duration: "1 day",
      price: "₹100/day",
      icon: "fas fa-user-clock",
      description: "Try before you commit",
    },
    {
      type: "Couple Package",
      duration: "Monthly/Quarterly",
      price: "₹2,800 / ₹7,500",
      icon: "fas fa-heart",
      description: "Fitness together",
    },
    {
      type: "Personal Training",
      duration: "1-2 months",
      price: "₹5,000 / ₹9,000",
      icon: "fas fa-user-graduate",
      description: "One-on-one coaching",
    },
  ];

  return (
    <section id="pricing" className="section-padding bg-gray-dark">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-poppins font-bold text-white mb-4">
            Membership <span className="text-gradient">Pricing</span>
          </h2>
          <div className="w-24 h-1 bg-orange-primary mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            Choose the perfect membership plan that fits your fitness goals and budget.
          </p>
          <div className="bg-orange-primary text-white px-6 py-3 rounded-full inline-block mt-6 font-semibold">
            <i className="fas fa-gift mr-2"></i>
            Diet, Workout & Cardio Classes included in all memberships
          </div>
        </motion.div>

        {/* Regular Membership Plans */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {regularPlans.map((plan, index) => (
            <motion.div
              key={plan.type}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 * index }}
              className={`bg-white rounded-2xl shadow-xl p-8 card-hover border-2 ${
                plan.popular ? "border-orange-primary relative" : "border-transparent hover:border-orange-primary"
              }`}
              data-testid={`plan-${plan.type.toLowerCase()}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-orange-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Popular
                </div>
              )}
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className={`${plan.icon} text-white text-2xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-black-primary mb-2">{plan.type}</h3>
                <div className="text-3xl font-bold text-orange-primary mb-4">{plan.price}</div>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <ul className="text-sm text-gray-600 space-y-2 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <i className="fas fa-check text-orange-primary mr-2"></i>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => handlePlanSelect(plan)}
                  className="w-full btn-gradient text-white py-3 rounded-full font-semibold"
                  data-testid={`button-select-${plan.type.toLowerCase()}`}
                >
                  Choose Plan
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Special Plans */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialPlans.map((plan, index) => (
            <motion.div
              key={plan.type}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 * index }}
              className="bg-gradient-to-br from-orange-primary to-orange-600 rounded-2xl shadow-xl p-8 text-white card-hover"
              data-testid={`special-plan-${index}`}
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className={`${plan.icon} text-orange-primary text-2xl`}></i>
                </div>
                <h3 className="text-xl font-bold mb-2">{plan.type}</h3>
                <div className="text-lg font-bold mb-4">{plan.price}</div>
                <p className="mb-4">{plan.description}</p>
                <button
                  onClick={() => handlePlanSelect(plan)}
                  className="w-full bg-white text-orange-primary py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
                  data-testid={`button-select-special-${index}`}
                >
                  {plan.type === "Guest Pass" ? "Get Day Pass" : 
                   plan.type === "Couple Package" ? "Choose Package" : "Book Training"}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <div className="bg-white rounded-xl p-6 inline-block">
            <p className="text-gray-600 font-medium">
              <i className="fas fa-info-circle text-orange-primary mr-2"></i>
              Fee Structure - No refund or Transfer | New Membership Charges: ₹200
            </p>
          </div>
        </motion.div>

        {/* Membership Form Modal */}
        {selectedPlan && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-black-primary">Join Our Gym</h3>
                <button
                  onClick={() => setSelectedPlan(null)}
                  className="text-gray-500 hover:text-gray-700"
                  data-testid="button-close-modal"
                >
                  <i className="fas fa-times text-xl"></i>
                </button>
              </div>
              
              <div className="mb-6 p-4 bg-orange-primary/10 rounded-lg">
                <p className="font-semibold text-orange-primary">Selected Plan: {selectedPlan.type}</p>
                <p className="text-gray-600">Price: {selectedPlan.price}</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">First Name</label>
                    <input
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-primary focus:border-transparent outline-none"
                      placeholder="Enter your first name"
                      required
                      data-testid="input-first-name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Last Name</label>
                    <input
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-primary focus:border-transparent outline-none"
                      placeholder="Enter your last name"
                      required
                      data-testid="input-last-name"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-primary focus:border-transparent outline-none"
                    placeholder="Enter your email"
                    required
                    data-testid="input-email"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Phone</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-primary focus:border-transparent outline-none"
                    placeholder="Enter your phone number"
                    required
                    data-testid="input-phone"
                  />
                </div>
                <button
                  type="submit"
                  disabled={membershipMutation.isPending}
                  className="w-full btn-gradient text-white py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 disabled:opacity-50"
                  data-testid="button-submit-membership"
                >
                  {membershipMutation.isPending ? (
                    <span>Processing...</span>
                  ) : (
                    <>
                      <span>Join Now</span>
                      <i className="fas fa-arrow-right"></i>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
