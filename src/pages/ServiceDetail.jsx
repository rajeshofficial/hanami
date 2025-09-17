import React from "react";
import { motion } from "framer-motion";
import Contact from "../components/Contact"
import { useNavigate } from "react-router-dom"; 


const serviceData = {
  "the-first-bloom": {
    title: "The First Bloom",
    tagline: "Shop smart, Dress better",
    description:
      "Kickstart your style journey with a full lifestyle evaluation and curated wardrobe guidance. Perfect for those seeking a fresh, confident look.",
    extra:
      "Our expert stylist helps you discover your personal style and create versatile outfits that work for any occasion, making fashion effortless and fun.",
    features: [
      "Full lifestyle evaluation program",
      "Basic wardrobe guidance",
      "Cluster shopping done online",
    ],
    price: "Basic",
    image: "https://ext.same-assets.com/3327434280/3045647499.jpeg",
  },
  "true-tones": {
    title: "True Tones",
    tagline: "The art of wearing your best colours",
    description:
      "Learn which colors complement your skin tone and enhance your natural beauty with a personalized color analysis.",
    extra:
      "Includes a lifestyle evaluation and makeup shopping guidance to help you radiate confidence with every look.",
    features: [
      "Lifestyle evaluation",
      "Color analysis",
      "Makeup shopping guidance",
      "Makeup session (optional, Rs.1000 extra)",
    ],
    price: "Basic",
    image: "https://ext.same-assets.com/3327434280/3902647611.jpeg",
  },
  "style-sculpt": {
    title: "Style Sculpt",
    tagline: "Flattering fits for every figure",
    description:
      "Discover your signature look with a focus on clothing that complements your unique body shape.",
    extra:
      "We guide you through both online and optional offline shopping, ensuring every outfit fits perfectly and feels great.",
    features: [
      "Lifestyle evaluation",
      "Personal style discovery",
      "Fit & fashion: body shape analysis",
      "Cluster shopping (online)",
      "Cluster shopping (offline, Rs.2000 extra)",
    ],
    price: "basic",
    image: "https://ext.same-assets.com/3327434280/1870328051.jpeg",
  },
  "image-edit": {
    title: "Image Edit",
    tagline: "Curate a look that reflects you",
    description:
      "Achieve a refined and polished look through a full evaluation of your lifestyle, wardrobe, colors, and body shape.",
    extra:
      "This comprehensive service helps you build a versatile and stylish wardrobe, including shopping and optional makeup guidance.",
    features: [
      "Lifestyle evaluation",
      "Personal style - your signature look",
      "Fit & fashion: body shape analysis",
      "Color analysis",
      "Cluster shopping (online)",
      "Cluster shopping (offline, Rs.2000 extra)",
      "Makeup shopping ",
    ],
    price: "Intermediate",
    image: "https://ext.same-assets.com/3327434280/4212507088.jpeg",
  },
  "style-alchemy": {
    title: "Petal to Power",
    tagline: "Dressing with impact and purpose",
    description:
      "Our full transformation package combines wardrobe evaluation, personal style, color and body shape analysis, and curated shopping for a complete style overhaul.",
    extra:
      "Step into the world with confidence and purpose, mastering your personal style across every aspect of your wardrobe and appearance.",
    features: [
      "Lifestyle evaluation",
      "Personal style - your signature look",
      "Fit & fashion: body shape analysis",
      "Color analysis",
      "Wardrobe evaluation",
      "Cluster shopping (online)",
      "Cluster shopping ",
      "Makeup shopping ",
    ],
    price: "Advanced",
    image: "https://ext.same-assets.com/3327434280/3902647611.jpeg",
  },
  "closet-curator": {
    title: "Closet Curator",
    tagline: "Build a wardrobe that works for you",
    description:
      "Refine your closet with expert guidance, turning it into a functional, stylish collection tailored to your lifestyle.",
    extra:
      "We provide in-depth wardrobe evaluation and curated online shopping to enhance your everyday style effortlessly.",
    features: [
      "Lifestyle evaluation",
      "Personal style - your signature look",
      "Wardrobe evaluation",
      "Cluster shopping (online)",
      "Cluster shopping (offline, Rs.2000 extra)",
    ],
    price: "Intermediate",
    image: "https://ext.same-assets.com/3327434280/3045647499.jpeg",
  },
  "dining-etiquette": {
    title: "Dining Etiquette",
    tagline: "A presence as polished as your plate",
    description:
      "Master formal and casual table manners to leave a lasting impression at every meal.",
    extra:
      "From understanding cutlery placement to graceful conversation skills, our etiquette training ensures you carry yourself with confidence in any dining setting.",
    features: [
      "Table manners for formal & casual settings",
      "Understanding cutlery and place settings",
      "Do’s and Don’ts while dining",
      "Graceful conversation during meals",
    ],
    price: "Intermediate",
    image: "https://ext.same-assets.com/3327434280/1870328051.jpeg",
  },
};


const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const ServiceDetail = ({ slug }) => {
  const service = serviceData[slug];
  const navigate = useNavigate(); 
  if (!service) return <div className="p-10 text-center">Service not found</div>;

  return (
    <section className="relative py-24 bg-gradient-to-b from-[#F9F5F1] to-[#F2EDE7] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-32 w-[28rem] h-[28rem] bg-rose-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-[-8rem] right-[-6rem] w-[26rem] h-[26rem] bg-pink-300 rounded-full blur-3xl opacity-25 animate-pulse"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          className="relative group"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <img
            src={service.image}
            alt={service.title}
            className="rounded-3xl shadow-2xl transform group-hover:scale-105 transition duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent rounded-3xl" />
          <motion.h1
            className="absolute bottom-6 left-6 text-white text-5xl font-extrabold tracking-wide drop-shadow-xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            viewport={{ once: true }}
          >
            {service.title}
          </motion.h1>
        </motion.div>

        <motion.div
  className="relative"
  variants={staggerContainer}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
  {/* Service Title */}
  <motion.h2
    className="text-4xl font-extrabold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#743438] to-[#b85a5e]"
    variants={fadeInUp}
  >
    {service.title}
  </motion.h2>

  {/* Tagline */}
  <motion.h3
    className="text-sm uppercase tracking-[0.25em] text-[#743438] mb-3"
    variants={fadeInUp}
  >
    {service.tagline}
  </motion.h3>

  {/* Description */}
  <motion.p
    className="text-xl text-[#5c3a3d] leading-relaxed mb-4"
    variants={fadeInUp}
  >
    {service.description}
  </motion.p>

  {/* Extra Info */}
  <motion.p
    className="text-md text-[#743438] italic mb-10"
    variants={fadeInUp}
  >
    {service.extra}
  </motion.p>

  {/* Features */}
  <motion.div
    className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12"
    variants={staggerContainer}
  >
    {service.features.map((f, idx) => (
      <motion.div
        key={idx}
        className="flex items-center space-x-4 bg-white/60 backdrop-blur-md p-5 rounded-2xl shadow-md hover:shadow-2xl transition border border-white/30"
        variants={fadeInUp}
      >
        <span className="text-[#b85a5e] text-2xl">✦</span>
        <span className="text-[#0F0000] font-semibold">{f}</span>
      </motion.div>
    ))}
  </motion.div>

  {/* Price */}
  <motion.p
    className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#743438] to-[#b85a5e] mb-10"
    variants={fadeInUp}
  >
    {service.price}
  </motion.p>

  {/* Book Button */}
<motion.button
  className="bg-gradient-to-r from-[#743438] to-[#b85a5e] text-white px-10 py-5 rounded-2xl text-lg font-bold tracking-wide shadow-xl hover:scale-105 hover:shadow-2xl transition duration-500"
  variants={fadeInUp}
  whileHover={{ scale: 1.08 }}
  whileTap={{ scale: 0.96 }}
  onClick={() => navigate("/contact")}
>
  Book Your Luxury Experience
</motion.button>

</motion.div>

      </div>
    </section>
  );
};

export default ServiceDetail;
