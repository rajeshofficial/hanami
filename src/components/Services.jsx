import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();

  const services = [
    {
      title: "The First Bloom",
      slug: "the-first-bloom",
      description:
        "Includes a full lifestyle evaluation program and basic wardrobe guidance. Cluster shopping done online to help you shop efficiently and stylishly.",
      features: [
        "Full lifestyle evaluation program",
        "Style insight - Basic wardrobe guidance",
        "Cluster shopping done online",
      ],
      price: "Rs. 5,000",
      image: "https://ext.same-assets.com/3327434280/3045647499.jpeg",
    },
    {
      title: "True Tones",
      slug: "true-tones",
      description:
        "Learn how to select colors that enhance your natural beauty. Includes lifestyle evaluation, color analysis, and an optional makeup session.",
      features: [
        "Lifestyle Evaluation",
        "Colour Analysis",
        "Makeup Shopping",
        "Makeup Session (costs extra Rs. 1,000)",
      ],
      price: "Rs. 6,000",
      image: "https://ext.same-assets.com/3327434280/3902647611.jpeg",
    },
    {
      title: "Style Sculpt",
      slug: "style-sculpt",
      description:
        "Discover your signature look and the fits that complement your body shape. Cluster shopping can be done online or offline (offline costs extra Rs. 2,000).",
      features: [
        "Lifestyle Evaluation",
        "Personal Style - Your signature look",
        "Fit & Fashion - Body shape analysis",
        "Cluster Shopping (online)",
        "Cluster Shopping (offline) (costs extra Rs. 2,000)",
      ],
      price: "Rs. 9,000",
      image: "https://ext.same-assets.com/3327434280/1870328051.jpeg",
    },
    {
      title: "Image Edit",
      slug: "image-edit",
      description:
        "Combine personal style, body fit, and colour analysis for a complete style edit. Includes online cluster shopping and optional offline shopping/makeup sessions.",
      features: [
        "Lifestyle Evaluation",
        "Personal Style - Your signature look",
        "Fit & Fashion - Body shape analysis",
        "Colour Analysis",
        "Cluster shopping (online)",
        "Cluster shopping (offline) (costs extra Rs. 2,000)",
        "Makeup Shopping (costs extra Rs. 2,000)",
      ],
      price: "Rs. 11,000",
      image: "https://ext.same-assets.com/3327434280/4212507088.jpeg",
    },
    {
      title: "Style Alchemy",
      slug: "style-alchemy",
      description:
        "A full transformation combining style, fit, color, wardrobe evaluation, and shopping guidance. Online cluster shopping included; optional offline shopping/makeup sessions at additional cost.",
      features: [
        "Lifestyle Evaluation",
        "Personal Style - Your signature look",
        "Fit & Fashion - Body shape analysis",
        "Colour Analysis",
        "Cluster Shopping (online)",
        "Wardrobe Evaluation",
        "Cluster shopping (offline) (costs extra Rs. 2,000)",
        "Makeup Shopping (costs extra Rs. 2,000)",
      ],
      price: "Rs. 14,000",
      image: "https://ext.same-assets.com/3327434280/3045647499.jpeg",
    },
    {
      title: "Closet Curator",
      slug: "closet-curator",
      description:
        "Streamline your closet and enhance your personal style with expert guidance. Online cluster shopping included; optional offline shopping at additional cost.",
      features: [
        "Lifestyle Evaluation",
        "Personal Style - Your signature look",
        "Wardrobe Evaluation",
        "Cluster shopping (online)",
        "Cluster shopping (offline) (costs extra Rs. 2,000)",
      ],
      price: "Rs. 10,000",
      image: "https://ext.same-assets.com/3327434280/3902647611.jpeg",
    },
    {
      title: "Dining Etiquette",
      slug: "dining-etiquette",
      description:
        "Learn formal and casual dining manners, including cutlery usage and conversation tips. Enhance your presence and confidence during meals with graceful etiquette.",
      features: [
        "Table manners for formal & casual settings",
        "Understanding cutlery and place settings",
        "Do’s and Don’ts while dining",
        "Graceful conversations during meals",
      ],
      price: "Rs. 5,000",
      image: "https://ext.same-assets.com/3327434280/1870328051.jpeg",
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading text-[#0F0000] mb-6">
            Our Services
          </h2>
          <p className="text-xl text-[#866061] max-w-3xl mx-auto font-['sans-serif']">
            Professional styling services tailored to your individual needs, lifestyle, and personal goals
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <div key={index} className="bg-[#F2EDE7] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="h-64 bg-gray-200">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-heading text-[#0F0000] mb-4">
                  {service.title}
                </h3>
                <p className="text-[#866061] mb-6 font-['sans-serif']">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-[#0F0000] font-['sans-serif']">
                      <svg className="w-5 h-5 text-[#743438] mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-heading text-[#743438]">{service.price}</span>
                  <button
                    onClick={() => navigate(`/services/${service.slug}`)}
                    className="bg-[#743438] text-white px-6 py-3 rounded-md hover:bg-[#440000] transition-colors font-['sans-serif']"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services;
