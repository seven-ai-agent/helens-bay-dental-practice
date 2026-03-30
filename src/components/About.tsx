import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-max">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="/images/practice-exterior.jpg"
                alt="Helens Bay Dental Practice exterior"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden lg:block">
              <Image
                src="/images/badge-round.png"
                alt="Helens Bay Dental badge"
                width={140}
                height={140}
                className="drop-shadow-xl"
              />
            </div>
          </div>

          {/* Text Side */}
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-teal-600">
              About Our Practice
            </span>
            <h2 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">
              Quality Dental Care Since 1994
            </h2>
            <div className="mt-6 space-y-4 text-gray-600 leading-relaxed">
              <p>
                At Helens Bay Dental Practice in Bangor, we thrive on the principle of providing
                high quality dental care in surroundings which are comfortable and relaxing. Our aim
                is to treat all of our patients as individuals and to protect and maintain your teeth
                through the very best dental care.
              </p>
              <p>
                Treating you — our patient — as we would wish ourselves and our family to be treated.
              </p>
              <p>
                Being a patient of our practice presents you with the opportunity to access the most
                up-to-date and innovative dental care. Our dedicated team are progressive and
                enthusiastic in their approach to modern dentistry.
              </p>
              <p>
                Helens Bay Dental was purchased by Gareth Small in October 1994. Digital workflows
                have been developed as new technologies were added — intra-oral scanners, digital
                X-ray, facial bone CT scanner, and most recently facial scans — enhancing the ease of
                treatment and quality of results.
              </p>
            </div>

            {/* Key Stats */}
            <div className="mt-8 grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-600">30+</div>
                <div className="mt-1 text-sm text-gray-500">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-600">20+</div>
                <div className="mt-1 text-sm text-gray-500">Team Members</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-600">25+</div>
                <div className="mt-1 text-sm text-gray-500">Years of Implants</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
