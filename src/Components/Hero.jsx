import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const Hero = () => {
  const slides = [ // ✅ নাম ঠিক করা হলো
    {
      image: "https://i.ibb.co/Cs2Gprrs/istockphoto-1393093359-612x612.jpg",
      heading: "Book Your Tickets Easily",
      text: "Fast and secure online ticket booking for transport, events, and entertainment.",
      button: "Book Now",
    },
    {
      image: "https://i.ibb.co/2YnrHYPx/agence-de-voyage-1.jpg",
      heading: "Discover Amazing Events",
      text: "Find and book tickets for concerts, sports, and local events instantly.",
      button: "Explore Events",
    },
    {
      image: "https://i.ibb.co/h1XMFyP7/images-18.jpg",
      heading: "Travel Smoothly",
      text: "Book transport tickets hassle-free and save your time with our platform.",
      button: "Explore Transport",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden">
      <Swiper
        loop
        effect="fade"
        modules={[Autoplay, Pagination, EffectFade]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        className="h-[75vh]" // ✅ height 75% of viewport
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div
              className="relative h-full bg-cover bg-center flex items-center justify-center"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>

              {/* Centered Text Box 75% width */}
              <div className="relative z-10 text-white px-6 md:px-0 max-w-[75%] mx-auto text-center">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-2xl animate-float">
                  {slide.heading}
                </h1>
                <p className="text-sm sm:text-base md:text-lg mb-6 opacity-90 drop-shadow-lg animate-fadeIn">
                  {slide.text}
                </p>
                <button className="relative bg-blue-600 text-white font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-full shadow-lg hover:shadow-2xl hover:bg-blue-700 transition-all duration-300 group overflow-hidden">
                  <span className="relative z-10">{slide.button}</span>
                  <span className="absolute inset-0 bg-white/20 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></span>
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2">
        <div className="text-white text-sm font-medium animate-bounce">Scroll Down</div>
        <div className="w-[2px] h-8 bg-white rounded-full animate-scrollLine"></div>
      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
          .animate-float {
            animation: float 4s ease-in-out infinite;
          }

          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn {
            animation: fadeIn 1.2s ease-in-out;
          }

          @keyframes scrollLine {
            0% { transform: scaleY(0); opacity: 0.4; }
            50% { transform: scaleY(1); opacity: 1; }
            100% { transform: scaleY(0); opacity: 0.4; }
          }
          .animate-scrollLine {
            animation: scrollLine 2s infinite;
          }
        `}
      </style>
    </section>
  );
};

export default Hero;
