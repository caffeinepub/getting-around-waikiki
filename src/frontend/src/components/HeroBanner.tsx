export default function HeroBanner() {
  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ height: "320px" }}
    >
      {/* Hero image */}
      <img
        src="/assets/generated/waikiki-hero.dim_1200x400.png"
        alt="Scenic Waikiki beachfront with Diamond Head"
        className="w-full h-full object-cover object-center"
      />
      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.45) 100%)",
        }}
      />
      {/* Text overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-end pb-10 px-4 text-center">
        <h2
          className="font-display text-4xl md:text-5xl font-bold mb-2 drop-shadow-lg"
          style={{ color: "#fff" }}
        >
          Getting Around Waikiki
        </h2>
        <p
          className="font-sans text-base md:text-lg font-light max-w-xl drop-shadow"
          style={{ color: "rgba(255,255,255,0.92)" }}
        >
          Everything you need to explore Oahu — from buses to bikes, trolleys to
          rideshares
        </p>
        {/* Decorative wave */}
        <div className="flex gap-1 mt-4">
          {["🌊", "🌺", "🌴", "🌺", "🌊"].map((emoji, i) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: static decorative list, order is fixed
            <span key={i} className="text-lg opacity-90">
              {emoji}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
