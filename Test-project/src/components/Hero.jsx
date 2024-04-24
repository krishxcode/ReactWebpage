function Hero() {
  return (
    <>
      <section className="dark:bg-gray-100 dark:text-gray-800">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-5xl font-bold leading-none sm:text-6xl">
              <span className="text-3xl">
                Hello<span className="dark:text-violet-600"> !!</span>{" "}
              </span>{" "}
              <br /> Ranveer
              <span className="dark:text-violet-600"> Pandit</span>
              <br /> Web Developer
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12">
              Web Developer <span className="dark:text-violet-600">||</span> Web
              Desiginer <span className="dark:text-violet-600">||</span> UI/UX
              Designer
              <br className="hidden md:inline lg:hidden" />
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <a
                rel="noopener noreferrer"
                href="#"
                className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-600 dark:text-gray-50"
              >
                Contact Me
              </a>
              <a
                rel="noopener noreferrer"
                href="#"
                className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-800"
              >
                Hire Me
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              src="image/speed-optimization.png"
              alt=""
              className="logo object-contain h-86 sm:h-85 lg:h-80 xl:h-112 2xl:h-128"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
