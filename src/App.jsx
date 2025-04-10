import React from "react";
import Navbar from "./components/Navbar/Navbar";
import NavbarBanner from "./components/Navbar/NavbarBanner";
import Hero from "./components/Hero/Hero";
import NumberCounter from "./components/NumberCounter/NumberCounter";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
import Banner from "./components/Banner/Banner";
import Img1 from "./assets/banner11.png";
import Img2 from "./assets/banner22.png";
import SubjectCard from "./components/SubjectCard/SubjectCard";
import { SiTestin } from "react-icons/si";
import Testimonial from "./components/Testimonial/Testimonial";
import Footer from "./components/Footer/Footer";

const BannerData = {
  image: Img1,
  tag: "CUSTOMIZE WITH YOUR SCHEDULE",
  title: "Personalized Professional Online Tutor on Your Schedule",
  subtitle:
    "Join a growing community of learners and professionals. Get certified, stay ahead, and achieve your goals with us.",
  link: "#",
};

const BannerData2 = {
  image: Img2,
  tag: "CUSTOMIZE WITH YOUR SCHEDULE",
  title: "Talented and Qualified Tutors to Serve You for Help",
  subtitle:
    "Join a growing community of learners and professionals. Get certified, stay ahead, and achieve your goals with us.",
  link: "#",
};

const App = () => {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <NavbarBanner />
      <Hero />
      <NumberCounter />
      <WhyChooseUs />
      <Banner {...BannerData}/>
      <Banner {...BannerData2} reverse={true}/>
      <SubjectCard />
      <Testimonial />
      <Footer />
    </main>
  );
};

export default App;
