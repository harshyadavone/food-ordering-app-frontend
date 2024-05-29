import heroLight from "../assets/hero.png";
import heroDark from "../assets/hero1.jpg";

const Hero = () => {
  return (
    <div>
      <img
        src={heroLight}
        className="w-full max-h-[600px] object-cover dark:hidden"
        alt="Hero"
      />
      <img
        src={heroDark}
        className="w-full max-h-[600px] object-cover hidden dark:block"
        alt="Hero"
      />
    </div>
  );
};

export default Hero;
