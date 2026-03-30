"use client";
import { useState } from "react";

const testimonials = [
  {
    text: "What a great experience I had throughout the whole of my treatment. From the day I walked through the door I felt really comfortable and at ease. They really are a wonderful bunch of people. It really has given me a new lease of life.",
    author: "Mark",
    treatment: "General Treatment",
  },
  {
    text: "As always my experience of the practice, the dental care, the team, and patient experience is summed up as \"totally exceptional\"! I can't recommend the practice enough in terms of private caring dentistry.",
    author: "David",
    treatment: "Private Dentistry",
  },
  {
    text: "Thanks for all your care and impeccable attention to detail. You and all your staff are very caring and pleasant and made me feel very special. I'm thrilled with the results! From the \"new me\"!",
    author: "Iris",
    treatment: "Cosmetic Dentistry",
  },
  {
    text: "I smile with confidence at everyone. I would recommend Helens Bay Dental Practice in the highest terms to anyone who is looking for a quality experience with expert professionals.",
    author: "Imelda",
    treatment: "General Care",
  },
  {
    text: "I opted for Invisalign Lite and I am delighted with the result. I wish I had started sooner! It only took 4 months to get the result I wanted and I barely noticed the time go by! My teeth look so much better. I am AMAZED!",
    author: "Emily",
    treatment: "Invisalign",
  },
  {
    text: "The whole experience with Helens Bay Dental was carried out in a very efficient, pain free manner and with a high standard of quality care. I would strongly urge anyone considering implants to consult Helens Bay Dental first.",
    author: "Implant Patient",
    treatment: "Dental Implants",
  },
  {
    text: "Sometimes I forget I now have very straight, white teeth… until someone looks at me a little longer than usual and says \"Wow! you've got great teeth.\" The expert team made the whole process effortless and straightforward.",
    author: "Heather",
    treatment: "6 Month Smiles & Whitening",
  },
  {
    text: "I previously had my teeth straightened with orthodontic treatment, but unfortunately my teeth had moved. I opted for 6-month smile and now 6 months later I have straight teeth and I couldn't be happier.",
    author: "Courtenay",
    treatment: "Six Month Smiles",
  },
];

export default function Testimonials() {
  const [page, setPage] = useState(0);
  const perPage = 3;
  const totalPages = Math.ceil(testimonials.length / perPage);
  const visible = testimonials.slice(page * perPage, page * perPage + perPage);

  return (
    <section id="testimonials" className="section-padding bg-gray-50">
      <div className="container-max">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-sm font-semibold uppercase tracking-wider text-teal-600">
            Patient Stories
          </span>
          <h2 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">
            What Our Patients Say
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            Real stories from real patients who have transformed their smiles with us.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {visible.map((t, i) => (
            <div
              key={`${page}-${i}`}
              className="rounded-2xl bg-white p-8 shadow-md border border-gray-100 flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-1 text-amber-400 mb-4">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="flex-1 text-gray-600 leading-relaxed italic">
                &ldquo;{t.text}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="mt-6 pt-4 border-t border-gray-100">
                <p className="font-semibold text-gray-900">{t.author}</p>
                <p className="text-sm text-teal-600">{t.treatment}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-10 flex justify-center gap-2">
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              className={`h-3 rounded-full transition-all ${
                i === page ? "w-8 bg-teal-600" : "w-3 bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Page ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
