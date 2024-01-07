import React from "react";

const Hero = () => {
  return (
    <section className="mt-[4rem]">
  <div class="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
      <div class="bg-blue-600 p-8 md:p-12 lg:px-16 lg:py-24 rounded-2xl">
        <div class="mx-auto max-w-xl text-center">
          <h2 class="text-2xl font-bold text-white md:text-3xl">
          Tech Marvels: Explore Docs, Build Projects!
          </h2>

          <p class="hidden text-white/90 sm:mt-4 sm:block">
          Embark on an exhilarating journey through cutting-edge Tech Stacks and comprehensive documentation. Our resources empower you to explore exciting projects, from innovative Node.js apps to dynamic Go and Python creations. Uncover the limitless possibilities of modern technology and unleash your project wonders with detailed documentation to guide every step of the way.
          </p>

          <div class="mt-4 md:mt-8">
            <a
              href="#"
              class="inline-block rounded border border-white bg-white px-12 py-3 text-sm font-medium text-blue-500 transition hover:bg-transparent hover:text-white focus:outline-none focus:ring focus:ring-yellow-400"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2">
        <img
          alt="Student"
          src="https://images.unsplash.com/photo-1567168544813-cc03465b4fa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
          class="h-40 w-full object-cover sm:h-56 md:h-full sm:object- rounded-2xl"
        />

        <img
          alt="Student"
          src="https://img.freepik.com/free-photo/html-css-collage-concept-with-person_23-2150061978.jpg?size=626&ext=jpg&ga=GA1.1.899746832.1703976342&semt=ais"
          class="h-40 w-full object-cover sm:h-56 md:h-full rounded-2xl"
        />
      </div>
    </div>
  </div>
</section>
  );
};

export default Hero;
