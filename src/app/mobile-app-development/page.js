//=============== Import Components
import { Hero2, Trun, Feedback, Hurdles, Expert, Journey, Technologies, Choose, Recognition, Trust, Contact, Faqs, AwardLogos } from "@/components";
//========== Import Hero Images
import BanImg1 from "media/mobileApp/banImg-1.png"
//========== Import FeedBack Images
import client from "media/images/client.png"
import stars from "media/icons/starts.png"
//========== Import Journey Images
import journeyBg from "media/images/journyBg.png"
import journeyImg from "media/images/journyImg.png"
//========== Import Technology Images
import tech1 from "media/icons/tech/techIcn1.png"
import tech2 from "media/icons/tech/techIcn2.png"
import tech3 from "media/icons/tech/techIcn3.png"
import tech4 from "media/icons/tech/techIcn4.png"
import tech5 from "media/icons/tech/techIcn5.png"
import tech6 from "media/icons/tech/techIcn6.png"
import tech7 from "media/icons/tech/techIcn7.png"
import tech8 from "media/icons/tech/techIcn8.png"


export default function Home() {
  //=============== Hero ===============
  const heroContent = {
    title: "Top Mobile App Development Company",
    subtitle: (<> Top <span className="text-primary-100">Mobile App</span> <br /> Development Company </>),
    para: "Beautiful, High-Performance Apps Delivered ON TIME and WITHIN BUDGET",
    BanImg1: BanImg1,
  };
  //=============== Feedback ===============
  const testimonials = [
    {
      clientName: 'Vivien Francis',
      clientTitle: 'Digital Marketing Consultant of Asia School of Business',
      testimonialText: 'I do not give five star reviews easily and in fact save them for those who have truly exceeded my high expectations. Derrick and his team have earned my loyalty and respect through their transparent efforts of always placing the customer first.',
      clientImage: client,
      starsImage: stars
    },
    {
      clientName: 'Vivien Francis',
      clientTitle: 'Digital Marketing Consultant of Asia School of Business',
      testimonialText: 'I do not give five star reviews easily and in fact save them for those who have truly exceeded my high expectations. Derrick and his team have earned my loyalty and respect through their transparent efforts of always placing the customer first.',
      clientImage: client,
      starsImage: stars
    },
    {
      clientName: 'Vivien Francis',
      clientTitle: 'Digital Marketing Consultant of Asia School of Business',
      testimonialText: 'I do not give five star reviews easily and in fact save them for those who have truly exceeded my high expectations. Derrick and his team have earned my loyalty and respect through their transparent efforts of always placing the customer first.',
      clientImage: client,
      starsImage: stars
    },
    {
      clientName: 'Vivien Francis',
      clientTitle: 'Digital Marketing Consultant of Asia School of Business',
      testimonialText: 'I do not give five star reviews easily and in fact save them for those who have truly exceeded my high expectations. Derrick and his team have earned my loyalty and respect through their transparent efforts of always placing the customer first.',
      clientImage: client,
      starsImage: stars
    },
  ];
  //=============== 
  const feedbackContent = {
    title: "Our Client’s Feedback Has Been",
    subtitle: "Nothing Short Of Amazing!",
    testimonials: testimonials,
  };
  //=============== Expert ===============
  const expertServices = [
    {
      title: (<> iOS Application <br /> Development </>),
      description: "We bring your iOS app ideas to life by using our comprehensive approach to development, combining UI/UX app design."
    },
    {
      title: (<> Android Application <br /> Development </>),
      description: "We take Android app development to the next level by following a comprehensive approach, from ideation to launch."
    },
    {
      title: <> React Native App <br /> Development </>,
      description: "BitsWits' skilled Flutter developers create tailored cross-platform mobile apps using the latest tools and techniques for your business needs."
    },
    {
      title: (<> Flutter App <br /> Development </>),
      description: "Our team of expert Flutter app developers at BitsWits use the latest tools and techniques."
    },
    {
      title: (<> Cross Platform App <br /> Development </>),
      description: "We prioritize creating seamless user experiences in cross-platform app development."
    },
    {
      title: (<> Web App <br /> Development </>),
      description: "We offer end-to-end web app development company. Our team of skilled web app developers utilizes the latest technologies."
    }
  ];
  //=============== 
  const expertContent = {
    subtitle: "Expert App Solutions",
    title: "Mobile App Development Services",
    para: (<> No matter what your niche is, we will help build mobile apps for your business. Choose our best application <br /> development company for building apps in any business vertical. </>),
    expertServices: expertServices,
    bg: "bg-[#EEEEEE]",
    textColor:"text-black",
    cta: true,
  };
  //=============== Journey ===============
  const journeyContent = {
    subtitle: "Mobile App Development Project Process",
    title: "Explore Our App Development Journey",
    para: (<> No matter what your niche is, we will help build mobile apps for your business. Choose our best application <br /> development company for building apps in any business vertical. </>),
    journeyImg: journeyImg,
    journeyBg: journeyBg
  };
  //=============== Technologies ===============
  const techData = [
    {
      label: 'Mobile',
      techItems: [
        { src: tech1, text: "Ios" },
        { src: tech2, text: "Android" },
        { src: tech3, text: "React native" },
        { src: tech4, text: "Flutter" },
        { src: tech5, text: "Ionic" },
        { src: tech6, text: "Swift" },
        { src: tech7, text: "Kotlin" },
        { src: tech8, text: "Objectivec" }
      ]
    },
    {
      label: 'Front End',
      techItems: [
        { src: tech3, text: "React native" },
        { src: tech2, text: "Android" },
        { src: tech1, text: "Ios" },
        { src: tech4, text: "Flutter" },
        { src: tech5, text: "Ionic" },
        { src: tech6, text: "Swift" },
        { src: tech7, text: "Kotlin" },
        { src: tech8, text: "Objectivec" }
      ]
    },
    {
      label: 'Database',
      techItems: [
        { src: tech2, text: "Android" },
        { src: tech1, text: "Ios" },
        { src: tech3, text: "React native" },
        { src: tech4, text: "Flutter" },
        { src: tech5, text: "Ionic" },
        { src: tech6, text: "Swift" },
        { src: tech7, text: "Kotlin" },
        { src: tech8, text: "Objectivec" }
      ]
    },
    {
      label: 'Backend',
      techItems: [
        { src: tech1, text: "Ios" },
        { src: tech2, text: "Android" },
        { src: tech3, text: "React native" },
        { src: tech4, text: "Flutter" },
        { src: tech5, text: "Ionic" },
        { src: tech6, text: "Swift" },
        { src: tech7, text: "Kotlin" },
        { src: tech8, text: "Objectivec" }
      ]
    },
    {
      label: 'CMS',
      techItems: [
        { src: tech3, text: "React native" },
        { src: tech2, text: "Android" },
        { src: tech1, text: "Ios" },
        { src: tech4, text: "Flutter" },
        { src: tech5, text: "Ionic" },
        { src: tech6, text: "Swift" },
        { src: tech7, text: "Kotlin" },
        { src: tech8, text: "Objectivec" }
      ]
    },
    {
      label: 'Infra And Devops',
      techItems: [
        { src: tech2, text: "Android" },
        { src: tech1, text: "Ios" },
        { src: tech3, text: "React native" },
        { src: tech4, text: "Flutter" },
        { src: tech5, text: "Ionic" },
        { src: tech6, text: "Swift" },
        { src: tech7, text: "Kotlin" },
        { src: tech8, text: "Objectivec" }
      ]
    }
  ];
  //===============
  const techContent = {
    title: "Technologies we work with",
    techData: techData
  };
  //=============== Faqs ===============
  const faqData = [
    {
      question: 'How do I get started with app development at BitsWits?',
      answer: "Reach out to us via our contact page, and let's discuss your app idea.",
    },
    {
      question: 'What types of apps does BitsWits specialize in developing?',
      answer: "We specialize in a wide range of app types, from mobile and web apps to custom enterprise solutions.",
    },
    {
      question: 'How long does it typically take to develop an app?',
      answer: "Timelines vary based on complexity, but we work efficiently to ensure timely delivery.",
    },
    {
      question: 'How do I get started with app development at BitsWits?',
      answer: "Reach out to us via our contact page, and let's discuss your app idea.",
    },
    {
      question: 'What types of apps does BitsWits specialize in developing?',
      answer: "We specialize in a wide range of app types, from mobile and web apps to custom enterprise solutions.",
    }
  ];
  //=============== 
  const faqsContent = {
    title: "Faqs",
    faqData: faqData,
  };
  return (
    <>
      <Hero2 content={heroContent} />
      <Trun />
      <Feedback content={feedbackContent} />
      <Hurdles />
      <Expert content={expertContent} />
      <Journey content={journeyContent} />
      <Technologies content={techContent} />
      <Choose />
      <Recognition />
      <Trust />
      <Contact />
      <Faqs content={faqsContent} />
      <AwardLogos />
    </>
  );
}