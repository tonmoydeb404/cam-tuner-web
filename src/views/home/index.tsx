import FeaturesSection from "./features-section";
import HeroSection from "./hero-section";

type Props = {};

const HomeView = (props: Props) => {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
    </>
  );
};

export default HomeView;
