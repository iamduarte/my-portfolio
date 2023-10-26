export default function LandingHero() {
  return (
    <>
      <div className="hero min-h-screen">
        <div className="hero-overlay bg-orange-950 bg-opacity-40"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-6xl font-bold text-gray-100">
              Hi I&rsquo;m Duarte
            </h1>
            <div className="flex justify-center sm:justify-normal">
              <p className="text-3xl text-gray-100 text-left sm:ml-5">
                Cu·ri·os·i·ty
              </p>
              <p className="text-xl text-gray-100 text-left ml-2 mt-2">
                (noun)
              </p>
            </div>
            <p className="text-xl text-gray-100 sm:ml-5">
              1. A strong desire to know or learn something.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
