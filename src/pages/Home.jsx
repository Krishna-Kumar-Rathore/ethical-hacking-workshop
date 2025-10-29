import React from "react";

const Home = () => {
  return (
    <main className="pt-20">
      <section className="min-h-screen flex items-center justify-center">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 text-gradient">
            Ethical Hacking Workshop 2025
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            A Hands-On Approach to Cybersecurity
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://forms.gle/Q6xpKWdwerbsut7P8"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cyber rounded-lg px-8 py-4 text-lg font-semibold"
            >
              Register Now
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
