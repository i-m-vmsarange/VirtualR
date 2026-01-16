import Features from "./components/Features";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 pt-20  ">
        <HeroSection />
      </div>
      <Features />
    </>
  );
};

export default App;
