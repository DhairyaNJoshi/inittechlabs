import AboutUs from "./AboutUs";
import BannerSection from "./BannerSection";
import ContactUsSection from "./ContactUsSection";
import HeroSection from "./HeroSection";
import OurServices from "./OurServices";
import WhyChooseUs from "./WhyChooseUs";

const HomePage = () => {
  return (
    <>
      <BannerSection />
      <HeroSection />
      <AboutUs />
      <OurServices />
      <WhyChooseUs />
      <ContactUsSection />
    </>
  );
};

export default HomePage;
