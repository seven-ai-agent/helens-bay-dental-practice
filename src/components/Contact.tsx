export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-max">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Info Side */}
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-teal-600">
              Get In Touch
            </span>
            <h2 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">
              Contact Us
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              We are situated adjacent to Helens Bay Railway Station and are easily accessible by
              car — free car parking is available in Station Square. Ideally placed for access from
              all areas of Northern Ireland and the Republic of Ireland.
            </p>

            {/* Contact Cards */}
            <div className="mt-8 space-y-4">
              {/* Address */}
              <div className="flex items-start gap-4 rounded-xl bg-gray-50 p-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center">
                  <svg className="w-6 h-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Our Address</h3>
                  <p className="text-gray-600 text-sm mt-1">
                    Helens Bay Dental Practice<br />
                    1b Station Square<br />
                    Helens Bay, Bangor<br />
                    County Down, BT19 1TN<br />
                    Northern Ireland
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 rounded-xl bg-gray-50 p-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center">
                  <svg className="w-6 h-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Phone</h3>
                  <a
                    href="tel:02891853304"
                    className="text-teal-600 font-medium text-lg hover:text-teal-700 transition-colors"
                  >
                    028 9185 3304
                  </a>
                  <p className="text-gray-500 text-sm mt-1">
                    For emergencies, please contact the main number for out-of-hours cover
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 rounded-xl bg-gray-50 p-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center">
                  <svg className="w-6 h-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Email</h3>
                  <a
                    href="mailto:reception@helensbaydental.co.uk"
                    className="text-teal-600 hover:text-teal-700 transition-colors"
                  >
                    reception@helensbaydental.co.uk
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4 rounded-xl bg-gray-50 p-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center">
                  <svg className="w-6 h-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Opening Hours</h3>
                  <div className="mt-1 text-sm text-gray-600 space-y-1">
                    <p>Monday – Thursday: 8:30am – 5:00pm</p>
                    <p>Friday: 8:30am – 4:00pm</p>
                    <p className="text-gray-400">Saturday & Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Accessibility Note */}
            <div className="mt-6 rounded-xl bg-teal-50 p-5 border border-teal-100">
              <p className="text-sm text-teal-800">
                <strong>For less mobile patients:</strong> The practice can be accessed by less mobile
                patients and we have a ground floor surgery for your convenience. Please inform us of
                your requirements when you make your appointment.
              </p>
            </div>
          </div>

          {/* Map Side */}
          <div className="flex flex-col gap-6">
            {/* Google Map */}
            <div className="rounded-2xl overflow-hidden shadow-lg flex-1 min-h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2311.67!2d-5.6613!3d54.6678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486174bcf5af36a1%3A0xd51c7e36a5f2f0e3!2sHelens%20Bay%20Dental%20Practice!5e0!3m2!1sen!2suk!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Helens Bay Dental Practice location"
              />
            </div>

            {/* Book Online CTA */}
            <div className="rounded-2xl bg-gradient-to-r from-teal-600 to-teal-700 p-8 text-center text-white">
              <h3 className="text-xl font-bold">Ready to Book?</h3>
              <p className="mt-2 text-teal-100">
                Schedule your appointment online — it&apos;s quick and easy.
              </p>
              <a
                href="https://uk.dentalhub.online/soe/new/Helens%20Bay%20Dental%20Practice?pid=UKHEL01"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block rounded-full bg-white px-8 py-3 text-sm font-semibold text-teal-700 hover:bg-teal-50 transition-colors shadow-lg"
              >
                Book Online Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
