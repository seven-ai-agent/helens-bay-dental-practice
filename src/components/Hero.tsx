"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const slides = [
  {
    image: "/images/hero-team.jpg",
    title: "Welcome to Helens Bay Dental",
    subtitle: "High quality dental care in a comfortable, relaxing environment",
  },
  {
    image: "/images/hero-invisalign.jpg",
    title: "Invisalign® Clear Aligners",
    subtitle: "The invisible way to straighten your teeth — now with Silver Provider status",
  },
  {
    image: "/images/hero-digital.jpg",
    title: "Digital Dentistry is Here",
    subtitle: "CEREC same-day crowns, 3D scanning & cutting-edge technology",
  },
  {
    image: "/images/hero-which-side.jpg",
    title: "Smile with Confidence",
    subtitle: "Cosmetic dentistry, teeth whitening & complete smile makeovers",
  },
  {
    image: "/images/hero-complimentary.jpg",
    title: "Complimentary Consultations",
    subtitle: "Start your smile journey with a free initial consultation",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="relative h-[85vh] min-h-[600px] pt-16 overflow-hidden">
      {/* Background Images */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            priority={i === 0}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="container-max w-full px-4 md:px-8">
          <div className="max-w-2xl">
            <h1
              key={`title-${current}`}
              className="animate-fade-in-up text-4xl font-bold text-white md:text-5xl lg:text-6xl leading-tight"
            >
              {slides[current].title}
            </h1>
            <p
              key={`sub-${current}`}
              className="animate-fade-in-up mt-4 text-lg text-white/90 md:text-xl lg:text-2xl"
              style={{ animationDelay: "0.2s" }}
            >
              {slides[current].subtitle}
            </p>
            <div
              className="animate-fade-in-up mt-8 flex flex-wrap gap-4"
              style={{ animationDelay: "0.4s" }}
            >
              <a
                href="https://uk.dentalhub.online/soe/new/Helens%20Bay%20Dental%20Practice?pid=UKHEL01"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-teal-600 px-8 py-3.5 text-base font-semibold text-white hover:bg-teal-700 transition-all shadow-lg hover:shadow-xl"
              >
                Book Appointment
              </a>
              <a
                href="tel:02891853304"
                className="rounded-full border-2 border-white px-8 py-3.5 text-base font-semibold text-white hover:bg-white hover:text-gray-900 transition-all"
              >
                Call 028 9185 3304
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-0 right-0 z-10 flex justify-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2.5 rounded-full transition-all ${
              i === current ? "w-8 bg-teal-400" : "w-2.5 bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
