// Mock data for ELIXR MOTORS dealership website

export const companyInfo = {
  name: "ELIXR MOTORS",
  tagline: "Redefining Luxury Automotive Experience",
  description: "Where premium meets performance, and every drive becomes an extraordinary journey.",
  logo: "https://customer-assets.emergentagent.com/job_auto-showcase-31/artifacts/154ph416_WhatsApp%20Image%202025-07-27%20at%2002.10.05_26dc22ba.jpg"
};

export const heroContent = {
  title: "DRIVE THE FUTURE",
  subtitle: "Experience the pinnacle of automotive excellence with our curated collection of luxury vehicles",
  cta: "Explore Collection"
};

export const successStory = {
  title: "OUR SUCCESS STORY",
  content: `From humble beginnings in 2018, ELIXR MOTORS has revolutionized the luxury car dealership experience. What started as a vision to bridge the gap between premium automotive brands and discerning customers has grown into a trusted name in the industry.

  Over the years, we've successfully delivered over 2,500 premium vehicles to satisfied customers across the region. Our commitment to excellence, transparent pricing, and personalized service has earned us recognition as the "Dealer of the Year" for three consecutive years.

  Today, we represent some of the world's most prestigious automotive brands and continue to set new standards in customer satisfaction and automotive retail innovation.`,
  stats: [
    { number: "2500+", label: "Vehicles Delivered" },
    { number: "98%", label: "Customer Satisfaction" },
    { number: "15+", label: "Premium Brands" },
    { number: "7", label: "Years of Excellence" }
  ]
};

export const businessEdge = {
  title: "WHY CHOOSE ELIXR MOTORS",
  features: [
    {
      title: "Curated Premium Collection",
      description: "Hand-picked selection of the finest luxury and performance vehicles from renowned manufacturers worldwide."
    },
    {
      title: "Transparent Pricing",
      description: "No hidden costs, no surprises. We believe in honest, upfront pricing that respects your investment."
    },
    {
      title: "Personalized Service",
      description: "Dedicated relationship managers who understand your preferences and guide you to the perfect vehicle."
    },
    {
      title: "Certified Quality",
      description: "Every vehicle undergoes rigorous inspection and comes with comprehensive warranty coverage."
    },
    {
      title: "Flexible Financing",
      description: "Tailored financing solutions with competitive rates and flexible terms to suit your needs."
    },
    {
      title: "Lifetime Support",
      description: "Ongoing maintenance support and exclusive member benefits for life-long automotive care."
    }
  ]
};

export const leadership = {
  founder: {
    name: "Harsroop Sohanpal",
    title: "Founder & CEO",
    bio: "Visionary entrepreneur with over 15 years in the automotive industry. Harsroop's passion for luxury vehicles and customer excellence drives ELIXR MOTORS' commitment to redefining the dealership experience.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=faces"
  },
  cto: {
    name: "Prabhneet Sohanpal",
    title: "Chief Technology Officer",
    bio: "Technology innovator leading ELIXR MOTORS' digital transformation. Prabhneet combines automotive expertise with cutting-edge technology to create seamless customer experiences.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=faces"
  }
};

export const contactInfo = {
  title: "GET IN TOUCH",
  subtitle: "Ready to find your dream vehicle? Let's start the conversation.",
  address: "123 Luxury Avenue, Premium District, City 12345",
  phone: "+1 (555) 123-4567",
  email: "info@elixrmotors.com",
  hours: "Mon-Sat: 9AM-8PM | Sun: 10AM-6PM"
};

// Form submission mock handler
export const submitInquiry = async (formData) => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  console.log("Inquiry submitted:", formData);
  return { success: true, message: "Thank you for your inquiry! We'll get back to you within 24 hours." };
};

// Navigation menu
export const navigationMenu = [
  { label: "Home", href: "#home" },
  { label: "Collection", href: "#collection" },
  { label: "About", href: "#about" },
  { label: "Leadership", href: "#leadership" },
  { label: "Contact", href: "#contact" }
];