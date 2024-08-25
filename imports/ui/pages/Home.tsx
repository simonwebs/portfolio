import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import 'aos/dist/aos.css';

const Home: React.FC = React.memo(() => {
  const navigate = useNavigate();

  useEffect(() => {
    const initAOS = async () => {
      await import('aos').then((AOS) => AOS.init({ duration: 1000 }));
    };
    initAOS();
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate('/contact');
  };

  return (
    <>
      {/* Add Helmet for preloading */}
      <Helmet>
        <link
          rel="preload"
          as="image"
          href="https://simonwebs.github.io/images/visionlyze_1-800.webp"
        />
        <link
          rel="preload"
          as="image"
          href="https://simonwebs.github.io/images/visionlyze_1-1200.webp"
        />
        <link
          rel="preload"
          as="image"
          href="https://simonwebs.github.io/images/visionlyze_1-1920.webp"
        />
      </Helmet>

      <div className="mt-16 relative overflow-hidden h-screen">
        <div className="absolute inset-0">
          <img
            data-aos="zoom-in"
            data-aos-duration="1000"
            className="w-full h-full rounded-md object-cover"
            src="https://simonwebs.github.io/images/visionlyze_1.webp"
            srcSet="https://simonwebs.github.io/images/visionlyze_1-800.webp 800w,
                    https://simonwebs.github.io/images/visionlyze_1-1200.webp 1200w,
                    https://simonwebs.github.io/images/visionlyze_1-1920.webp 1920w"
            sizes="(max-width: 800px) 100vw, 
                   (max-width: 1200px) 100vw,
                   100vw"
            width="1920"
            height="1080"
            alt="Simon Agbey hero image"
          />
          <div className="absolute inset-0 bg-opacity-50 mix-blend-multiply"></div>
        </div>

        <div className="relative flex flex-col items-center justify-center h-full px-4 py-8 sm:px-6 lg:px-8">
          <h1 className="text-center text-3xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            <span className="block text-white" data-aos="fade-up">Hello I'm</span>
            <span className="block text-white" data-aos="fade-up">Simon Agbey</span>
          </h1>
          <p className="mt-6 max-w-lg mx-auto text-white text-center text-xl sm:max-w-3xl" data-aos="fade-up">
            Full-Stack Developer crafting smooth web experiences
          </p>
          <form onSubmit={handleSubmit} className="mt-10">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              aria-label="Hire me"
            >
              Hire me
            </button>
          </form>
        </div>
      </div>
    </>
  );
});

export default Home;
