const HeroSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between py-16">
      {/* Left content */}
      <div className="flex-1 text-center md:text-left space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
          Discover Your Style, <br /> Shop the Latest Trends
        </h1>
        <p className="text-gray-600 text-lg md:w-3/4">
          Upgrade your wardrobe with our latest collection. Quality, comfort, and
          confidence — all in one place.
        </p>
        <div className="space-x-4">
          <button className="primary_button">
            Shop Now
          </button>
          <button
            className="outline_button"
          >
            Learn More
          </button>
        </div>
      </div>

      {/* Right image */}
      <div className="flex-1 mt-10 md:mt-0 flex justify-center">
        <img
          src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
          alt="Fashion product"
          className="w-full max-w-md rounded-2xl shadow-lg"
        />
      </div>
    </section>
  );
};

export default HeroSection;
