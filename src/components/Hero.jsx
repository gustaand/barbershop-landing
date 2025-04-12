import logo from "../assets/images/barber-hero.png"
import bgLogo from "../assets/images/barber-hero-bg.jpg"

function Hero({ onReserveClick }) {
  return (
    <section
      id="hero"
      className="relative bg-cover bg-center min-h-screen flex items-center justify-center text-center"
      style={{ backgroundImage: `url(${bgLogo})` }}
    >
      <div className="absolute inset-0 bg-black opacity-90"></div>

      <div className="flex justify-center items-center gap-4 flex-col z-10 px-4 sm:px-6 select-none">
        <img
          src={logo}
          alt="logo"
          className="w-full md:w-3/5 mt-10 md:mt-0"
        />
        <p className="text-lg  sm:text-xl lg:text-2xl mb-6 sm:mb-8 font-light text-gray-500 animate-fade-in-up delay-300 ">
          Estilo clásico, cortes modernos. Tu mejor look empieza aquí.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 animate-fade-in-up delay-500">
          <button
            onClick={onReserveClick}
            className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-6 md:py-3 md:px-8 rounded transition duration-300 text-base md:text-lg w-full sm:w-auto" // Full width en móvil, auto en sm+
          >
            Reservar Ahora
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;