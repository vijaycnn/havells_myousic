import React from "react";
import { Container } from "react-bootstrap";
import FAQs from "../components/Faqs";
// import Stories from "../components/Stories";
import HeroBanner from "../components/HeroBanner";
import HowItWorks from "../components/HowItWorks";
import MentorExperts from "../components/MentorExperts";
import ArtistUsp from "../components/ArtistUsp";
import Bootcamp from "../components/Bootcamp";
// import VideoSlider from "../components/VideoSlider";
import QrScanner from "../components/QrScanner";
import Gallery from "../components/Gallery";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <HowItWorks />
      <MentorExperts />
      <ArtistUsp />
      <Bootcamp />
      <QrScanner />
      <Gallery />
      {/* <Stories /> */}
      <FAQs />
      {/* <VideoSlider /> */}
    </>
  );
}
