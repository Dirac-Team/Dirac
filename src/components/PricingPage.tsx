import { Check } from "lucide-react";
import { Footer } from "./Footer";

export function PricingPage() {
  const plans = [
    {
      name: "Free",
      price: "0",
      description: "Perfect for trying out Dirac",
      features: [
        "5 AI automations per month",
        "Basic workflow templates", 
        "Email support",
        "Core integrations"
      ],
      highlighted: false
    },
    {
      name: "Pro",
      price: "29",
      description: "For professionals and small teams",
      features: [
        "Unlimited AI automations",
        "Advanced workflow builder",
        "Priority support",
        "All integrations",
        "Custom templates",
        "Analytics & insights"
      ],
      highlighted: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large organizations",
      features: [
        "Everything in Pro",
        "Dedicated account manager",
        "Custom integrations",
        "Advanced security & compliance",
        "Training & onboarding",
        "SLA guarantee"
      ],
      highlighted: false
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-[#78AAFF] to-[#9BB5FF] bg-clip-text text-transparent mb-8">
            Simple Pricing
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Start free, scale as you grow. No hidden fees, no surprises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-black/60 rounded-2xl border p-8 transition-all duration-300 ${
                plan.highlighted 
                  ? 'border-[#78AAFF] shadow-lg shadow-[#78AAFF]/20 scale-105' 
                  : 'border-[#78AAFF]/30 hover:border-[#78AAFF]/50'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-[#78AAFF] to-[#9BB5FF] text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-semibold text-white mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-[#78AAFF]">
                    {plan.price === "Custom" ? plan.price : `$${plan.price}`}
                  </span>
                  {plan.price !== "Custom" && (
                    <span className="text-white/50 text-lg">/month</span>
                  )}
                </div>
                <p className="text-white/70 text-sm">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-[#78AAFF] flex-shrink-0" />
                    <span className="text-white/80 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 rounded-lg font-medium transition-all duration-300 ${
                plan.highlighted
                  ? 'bg-gradient-to-r from-[#78AAFF] to-[#9BB5FF] hover:from-[#6A9EFF] hover:to-[#8AABFF] text-white'
                  : 'border border-[#78AAFF] text-[#78AAFF] hover:bg-[#78AAFF]/10'
              }`}>
                {plan.name === "Enterprise" ? "Contact Sales" : "Join Waitlist"}
              </button>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-white/60 text-sm">
            All plans include a 14-day free trial. No credit card required.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}