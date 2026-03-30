const services = [
  {
    icon: "🦷",
    title: "Dental Implants",
    description:
      "Whether you&apos;re missing a single tooth or need full-arch replacement, our expert team provides dental implants with a 99% success rate. An implant plus crown from £2,900.",
    link: "#contact",
  },
  {
    icon: "✨",
    title: "Invisalign®",
    description:
      "The invisible way to straighten teeth using custom-made, nearly undetectable aligners. Dr Sarah Lochhead has achieved Silver status as an experienced Invisalign doctor.",
    link: "#contact",
  },
  {
    icon: "👑",
    title: "CEREC Same-Day Crowns",
    description:
      "Top quality ceramic crowns designed and fitted in a single visit. No temporary crowns, no moulds — just digital scanning and precision milling on-site.",
    link: "#contact",
  },
  {
    icon: "😁",
    title: "Smile in a Day",
    description:
      "The All-on-Four technique provides a full set of permanent teeth in one day. Come as close to a new set of natural teeth as is currently possible.",
    link: "#contact",
  },
  {
    icon: "💎",
    title: "Teeth Whitening",
    description:
      "Professional home whitening with custom-made trays for a brighter, more confident smile. Available at the special price of £330.00.",
    link: "#contact",
  },
  {
    icon: "🔬",
    title: "CBCT Scanning",
    description:
      "State-of-the-art Sirona X3GD CBCT Scanner for detailed 3D imaging, ensuring precise diagnosis and treatment planning for implants and complex cases.",
    link: "#contact",
  },
  {
    icon: "🪥",
    title: "Hygiene Services",
    description:
      "Guided Biofilm Therapy with EMS AIRFLOW — a painless, spa-like cleaning experience. Direct access available from £165, or £140 for registered patients.",
    link: "#contact",
  },
  {
    icon: "🛡️",
    title: "Preventive Care",
    description:
      "We are committed to preventive dental care, helping you maintain optimal dental health and avoid invasive treatments through regular check-ups and guidance.",
    link: "#contact",
  },
  {
    icon: "🏗️",
    title: "Veneers & Bridges",
    description:
      "Natural-looking ceramic veneers and bridges crafted with the latest digital technology for a seamless, beautiful result that blends with your natural teeth.",
    link: "#contact",
  },
];

export default function Services() {
  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container-max">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-sm font-semibold uppercase tracking-wider text-teal-600">
            Our Treatments
          </span>
          <h2 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">
            Comprehensive Dental Care
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            From preventive care to advanced cosmetic dentistry, we offer a full range of treatments
            using the latest technology and techniques.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <div
              key={i}
              className="group rounded-2xl bg-white p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-teal-600 transition-colors">
                {service.title}
              </h3>
              <p
                className="mt-3 text-gray-600 leading-relaxed text-sm"
                dangerouslySetInnerHTML={{ __html: service.description }}
              />
              <a
                href={service.link}
                className="mt-5 inline-flex items-center text-sm font-semibold text-teal-600 hover:text-teal-700 transition-colors"
              >
                Learn More
                <svg className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>

        {/* Finance Banner */}
        <div className="mt-14 rounded-2xl bg-gradient-to-r from-teal-600 to-teal-700 p-8 md:p-12 text-white text-center">
          <h3 className="text-2xl font-bold md:text-3xl">0% Finance Available</h3>
          <p className="mt-3 text-teal-100 max-w-2xl mx-auto">
            Spread the cost of your treatment with interest-free finance plans through Chrysalis
            Finance. The paperwork is straightforward with no difficult questions.
          </p>
          <a
            href="https://partner.chrysalisfinance.com/helens_bay_dental_practice"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block rounded-full bg-white px-8 py-3 text-sm font-semibold text-teal-700 hover:bg-teal-50 transition-colors shadow-lg"
          >
            Learn About Finance Options
          </a>
        </div>
      </div>
    </section>
  );
}
