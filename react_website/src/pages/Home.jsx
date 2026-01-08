import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import FAQs from "../components/Faqs";
// import Stories from "../components/Stories";
import HeroBanner from "../components/HeroBanner";
import HowItWorks from "../components/HowItWorks";
import MentorExperts from "../components/MentorExperts";
import ArtistUsp from "../components/ArtistUsp";
import Bootcamp from "../components/Bootcamp";
import VideoSlider from "../components/VideoSlider";
import QrScanner from "../components/QrScanner";
import Gallery from "../components/Gallery";
import { galleryList } from "../api";

export default function Home( {contextData}) {  
  
  const [loading, setLoading] = useState(true);
  const [list, setList] = useState([]);
    
  const getBannerList = async () => {
      let galleryRes = await galleryList();
      // console.log('>>>', galleryRes)
      if (galleryRes?.data) {
        setList(galleryRes.data);
        // console.log('gallery is reached ', list)
      }
    };
  useEffect( () => {
    if (loading) {
      getBannerList();
      setLoading(false)
    }
  }, [loading]);
  return (
    <>
      <HeroBanner  data={contextData?.Banner} />
      {
        (contextData?.HowItWorks) ?
        <HowItWorks  data={contextData?.HowItWorks}/> : ''        
      }
      {
        (contextData?.Mentors) ?
        <MentorExperts data={contextData?.Mentors} /> : ''
      }
      {
        (contextData?.["ArtistUsp-Box1"] && contextData?.["ArtistUsp-Box2"] && contextData?.["ArtistUsp-Box3"]) ?
        <ArtistUsp  data1={contextData?.["ArtistUsp-Box1"]} data2={contextData?.["ArtistUsp-Box2"]} data3={contextData?.["ArtistUsp-Box3"]}/>
        :''
      }
      {
        (contextData?.Bootcamp) ?
        <Bootcamp  data={contextData?.Bootcamp}/> : ''
      }
      <QrScanner />
      {
        (contextData?.Gallery) ?
        <Gallery  data={contextData?.Gallery} galleryData={list?.["image"]}  /> : ''
      }
      {/* <Stories /> */}
      <FAQs />
      {
        (list?.["video"]) ?
        <VideoSlider galleryData={list?.["video"]}  /> : ''
      }
    </>
  );
}
