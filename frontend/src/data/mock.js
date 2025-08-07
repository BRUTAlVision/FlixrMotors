// Mock data for ELIXR MOTORS auction platform website

export const companyInfo = {
  name: "ELIXR MOTORS",
  tagline: "Revolutionary Vehicle Auction Platform",
  description: "Where sellers meet buyers in the most transparent and efficient automotive auction experience.",
  logo: "https://customer-assets.emergentagent.com/job_auto-showcase-31/artifacts/154ph416_WhatsApp%20Image%202025-07-27%20at%2002.10.05_26dc22ba.jpg"
};

export const heroContent = {
  title: "AUCTION THE FUTURE",
  subtitle: "Join the revolutionary platform where vehicle owners directly auction their cars to the highest bidders",
  cta: "Join Platform"
};

export const successStory = {
  title: "OUR SUCCESS STORY",
  content: `From a vision in 2018, ELIXR MOTORS has been developing the most innovative vehicle auction platform in the industry. What started as an idea to revolutionize how people buy and sell vehicles has evolved into a cutting-edge platform that puts control directly in the hands of vehicle owners.

  Over the years, we've built partnerships with over 2,500 vehicle owners and 10,000+ potential buyers who are eagerly waiting for our platform launch. Our transparent auction model and direct seller-to-buyer approach has already garnered recognition as "Innovation of the Year" from three automotive industry publications.

  Today, we're on the verge of launching the platform that will change how the automotive market operates forever - giving every vehicle owner the power to get the true market value for their vehicle.`,
  stats: [
    { number: "2500+", label: "Registered Sellers" },
    { number: "10K+", label: "Waiting Buyers" },
    { number: "15+", label: "Partner Brands" },
    { number: "7", label: "Years Developing" }
  ]
};

export const businessEdge = {
  title: "WHY CHOOSE ELIXR AUCTION PLATFORM",
  features: [
    {
      title: "Direct Seller-to-Buyer Model",
      description: "Skip the middleman. Vehicle owners list directly on our platform and get maximum value from serious buyers."
    },
    {
      title: "Transparent Auction Process",
      description: "Real-time bidding with complete transparency. Every bid, every participant, every detail is visible to all parties."
    },
    {
      title: "Verified Participants Only",
      description: "Both sellers and buyers go through our rigorous verification process ensuring safe and legitimate transactions."
    },
    {
      title: "Professional Vehicle Assessment",
      description: "Expert inspections and detailed reports for every vehicle to ensure buyers bid with complete confidence."
    },
    {
      title: "Secure Payment System",
      description: "Bank-grade security with escrow services ensuring safe transactions for both parties."
    },
    {
      title: "24/7 Platform Support",
      description: "Dedicated support team available round the clock to assist with auctions, payments, and platform queries."
    }
  ]
};

export const leadership = {
  founder: {
    name: "Harsroop Sohanpal",
    title: "Founder & CEO",
    bio: "Visionary entrepreneur revolutionizing the automotive auction industry. Harsroop's passion for technology and fair market practices drives ELIXR MOTORS' mission to democratize vehicle auctions.",
    image: "https://customer-assets.emergentagent.com/job_auto-showcase-31/artifacts/t0sd04gd_WhatsApp%20Image%202025-08-03%20at%2001.25.02_24336d83.jpg"
  },
  cto: {
    name: "Prabhneet Sohanpal", 
    title: "Chief Technology Officer",
    bio: "Technology innovator building the next-generation auction platform. Prabhneet combines automotive expertise with cutting-edge blockchain and AI technology for seamless auction experiences.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=faces"
  }
};

export const contactInfo = {
  title: "GET EARLY ACCESS",
  subtitle: "Ready to join the future of vehicle auctions? Register for early access to our platform.",
  address: "123 Innovation Drive, Tech District, City 12345",
  phone: "+1 (555) 123-4567",
  email: "info@elixrmotors.com",
  hours: "Mon-Fri: 9AM-6PM | Sat-Sun: 10AM-4PM"
};

// Platform launch content
export const platformLaunch = {
  title: "PLATFORM LAUNCHING SOON",
  subtitle: "Be among the first to experience the future of vehicle auctions",
  features: [
    {
      title: "Live Bidding Engine",
      description: "Real-time bidding with instant notifications and automatic bid increments"
    },
    {
      title: "AI-Powered Valuations", 
      description: "Get accurate market valuations using our advanced AI pricing algorithms"
    },
    {
      title: "Mobile Auction App",
      description: "Bid on-the-go with our iOS and Android app featuring push notifications"
    },
    {
      title: "Blockchain Verification",
      description: "Immutable transaction records and ownership verification on blockchain"
    }
  ],
  launchDate: "Q2 2025",
  waitlistCount: "12,847"
};

// Form submission mock handler
export const submitInquiry = async (formData) => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  console.log("Early access request submitted:", formData);
  return { success: true, message: "Thank you for your interest! You've been added to our early access list." };
};

// Navigation menu
export const navigationMenu = [
  { label: "Home", href: "#home" },
  { label: "Platform", href: "#platform" },
  { label: "About", href: "#about" },  
  { label: "Leadership", href: "#leadership" },
  { label: "Early Access", href: "#contact" }
];