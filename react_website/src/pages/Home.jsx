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
import { galleryList, slideFileList } from "../api";
import Seo from "../components/Seo";

export default function Home( {contextData}) {  
  
  const [loading, setLoading] = useState(true);
  const [list, setList] = useState([]);
  const [fileList, setFileList] = useState([]);
    
  const getBannerList = async () => {
      let galleryRes = await galleryList();
      // console.log('>>>', galleryRes)
      if (galleryRes?.data) {
        setList(galleryRes.data);
      }
    };
  const getSlideFilesList = async () => {
    let slideFileRes = await slideFileList();
    if (slideFileRes?.data) {
      const normalized = Object.fromEntries(
        Object.entries(slideFileRes?.data).map(([key, val]) => [key, val[0]])
      );
      setFileList(normalized);
      // console.log('SlideFiles ::: >>>', normalized)
    }
  };
  useEffect( () => {
    if (loading) {
      getBannerList();  getSlideFilesList();
      setLoading(false)
    }
  }, [loading]);
  return (
    <>
      <Seo
        title="Havells mYOUsic – A Stage for India’s Real Sound"
        description="Havells mYOUsic is a platform to discover and nurture India’s grassroots music talent through mentorship, bootcamps, and original music creation opportunities."
        keywords="Havells mYOUsic, Indian music talent platform, music mentorship program, music bootcamp India, original music platform, singer and composer opportunity, music platform, online music platform, best music distribution platform"
      />
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
        (contextData?.ArtistUsp && (contextData?.["ArtistUsp-Box1"] || contextData?.["ArtistUsp-Box2"] || contextData?.["ArtistUsp-Box3"])) ?
        <ArtistUsp data={fileList?.artistusp}  title={contextData?.ArtistUsp}  data1={contextData?.["ArtistUsp-Box1"]} data2={contextData?.["ArtistUsp-Box2"]} data3={contextData?.["ArtistUsp-Box3"]}/>
        :''
      }
      {
        (contextData?.Bootcamp) ?
        <Bootcamp  data={contextData?.Bootcamp} bg={fileList?.bootcamp}/> : ''
      }
      <QrScanner />
      {
        (contextData?.Gallery) ?
        <Gallery  data={contextData?.Gallery} galleryData={list?.["image"]}  /> : ''
      }
      {/* <Stories /> */}
      <FAQs data={fileList?.guideline}  title={contextData?.Guideline} />
      {
        (list?.["video"]) ?
        <VideoSlider galleryData={list?.["video"]}  /> : ''
      }
    </>
  );
}
