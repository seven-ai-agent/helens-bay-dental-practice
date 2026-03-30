import Image from "next/image";

const accreditations = [
  { src: "/images/footer-logo-0.png", alt: "Accreditation" },
  { src: "/images/footer-logo-1.png", alt: "Accreditation" },
  { src: "/images/footer-logo-2.png", alt: "Accreditation" },
  { src: "/images/footer-logo-3.png", alt: "Accreditation" },
  { src: "/images/footer-logo-7.png", alt: "Accreditation" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Accreditations Bar */}
      <div className="border-b border-gray-800 py-8">
        <div className="container-max px-4 md:px-8">
          <div className="flex flex-wrap items-center justify-center gap-8">
            {accreditations.map((a, i) => (
              <Image
                key={i}
                src={a.src}
                alt={a.alt}
                width={120}
                height={60}
                className="h-12 w-auto opacity-70 hover:opacity-100 transition-opacity brightness-200"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-max px-4 py-12 md:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: About */}
          <div>
            <Image
              src="/images/logo.png"
              alt="Helens Bay Dental"
              width={160}
              height={50}
              className="h-10 w-auto brightness-200 mb-4"
            />
            <p className="text-gray-400 text-sm leading-relaxed">
              Providing high quality dental care in Helens Bay, Bangor since 1994. Treating our
              patients as we would wish ourselves and our family to be treated.
            </p>
            {/* Social Links */}
            <div className="mt-4 flex gap-4">
              <a
                href="https://www.facebook.com/HelensBayDental"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-teal-600 transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://www.youtube.com/channel/UCbjcXYjqEG8Lb6DNWWMdmSg"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-teal-600 transition-colors"
                aria-label="YouTube"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/helensbaydental/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-teal-600 transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {[
                { label: "About Us", href: "#about" },
                { label: "Our Services", href: "#services" },
                { label: "Meet the Team", href: "#team" },
                { label: "Testimonials", href: "#testimonials" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-teal-400 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Treatments */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">
              Treatments
            </h3>
            <ul className="space-y-2.5">
              {[
                "Dental Implants",
                "Invisalign®",
                "CEREC Same-Day Crowns",
                "Smile in a Day",
                "Teeth Whitening",
                "Hygiene Services",
                "Veneers & Bridges",
              ].map((t) => (
                <li key={t}>
                  <a
                    href="#services"
                    className="text-gray-400 hover:text-teal-400 transition-colors text-sm"
                  >
                    {t}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">
              Contact Info
            </h3>
            <div className="space-y-3 text-sm text-gray-400">
              <p>
                1b Station Square<br />
                Helens Bay, Bangor<br />
                County Down, BT19 1TN
              </p>
              <p>
                <a href="tel:02891853304" className="hover:text-teal-400 transition-colors">
                  📞 028 9185 3304
                </a>
              </p>
              <p>
                <a
                  href="mailto:reception@helensbaydental.co.uk"
                  className="hover:text-teal-400 transition-colors"
                >
                  ✉️ reception@helensbaydental.co.uk
                </a>
              </p>
              <div className="pt-2">
                <p className="text-gray-500">Mon–Thu: 8:30am – 5pm</p>
                <p className="text-gray-500">Friday: 8:30am – 4pm</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-6">
        <div className="container-max px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Helens Bay Dental Practice. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-500 hover:text-gray-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-400 transition-colors">
              Complaints Procedure
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
