import MainLayout from "../../components/layout/MainLayout";
import FeaturesSection from "./components/FeaturesSection";
import Hero from "./components/Hero";

const HomePage = () => {
  return (
    <MainLayout>
      <Hero />
      <FeaturesSection />
    </MainLayout>
  );
};

export default HomePage;
