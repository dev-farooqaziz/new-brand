//=============== Import Components
import { Hero, Who, What, Industry, Work, Publication, Startup, Technologies, Feedback, Solution, Choose, Contact, Faqs, AwardLogos } from "@/components";
//========== Import Hero Images
import BanImg1 from "media/home/banImg-1.png"
import BanImg2 from "media/home/banImg-2.png"
import BanImg3 from "media/home/banImg-3.png"
//========== Import Who Images
import whoBg1 from "media/images/whoBg.png"
import whoImg from "media/images/whoImg.png"
import Avtr from "media/icons/avtr.png"
//========== Import What Images
import whatImg from "media/images/whatImg.png"
//========== Import Industries Images
import indusIcon1 from "media/icons/industry/indusIcon1.png"
import indusIcon1a from "media/icons/industry/indusIcon1a.png"
import indusIconBg1 from "media/icons/industry/indusIconBg1.png"
import indusIcon2 from "media/icons/industry/indusIcon2.png"
import indusIcon2a from "media/icons/industry/indusIcon2a.png"
import indusIconBg2 from "media/icons/industry/indusIconBg2.png"
import indusIcon3 from "media/icons/industry/indusIcon3.png"
import indusIcon3a from "media/icons/industry/indusIcon3a.png"
import indusIconBg3 from "media/icons/industry/indusIconBg3.png"
import indusIcon4 from "media/icons/industry/indusIcon4.png"
import indusIcon4a from "media/icons/industry/indusIcon4a.png"
import indusIconBg4 from "media/icons/industry/indusIconBg4.png"
import indusIcon5 from "media/icons/industry/indusIcon5.png"
import indusIcon5a from "media/icons/industry/indusIcon5a.png"
import indusIconBg5 from "media/icons/industry/indusIconBg5.png"
import indusIcon6 from "media/icons/industry/indusIcon6.png"
import indusIcon6a from "media/icons/industry/indusIcon6a.png"
import indusIconBg6 from "media/icons/industry/indusIconBg6.png"
import indusIcon7 from "media/icons/industry/indusIcon7.png"
import indusIcon7a from "media/icons/industry/indusIcon7a.png"
import indusIconBg7 from "media/icons/industry/indusIconBg7.png"
import indusIcon8 from "media/icons/industry/indusIcon8.png"
import indusIcon8a from "media/icons/industry/indusIcon8a.png"
import indusIconBg8 from "media/icons/industry/indusIconBg8.png"
import indusIcon9 from "media/icons/industry/indusIcon9.png"
import indusIcon9a from "media/icons/industry/indusIcon9a.png"
import indusIconBg9 from "media/icons/industry/indusIconBg9.png"
import indusIcon10 from "media/icons/industry/indusIcon10.png"
import indusIcon10a from "media/icons/industry/indusIcon10a.png"
import indusIconBg10 from "media/icons/industry/indusIconBg10.png"
import indusIcon11 from "media/icons/industry/indusIcon11.png"
import indusIcon11a from "media/icons/industry/indusIcon11a.png"
import indusIconBg11 from "media/icons/industry/indusIconBg11.png"
import indusIcon12 from "media/icons/industry/indusIcon12.png"
import indusIcon12a from "media/icons/industry/indusIcon12a.png"
import indusIconBg12 from "media/icons/industry/indusIconBg12.png"
//=============== Import work Images
import workImg1 from "media/home/workImg1.png"
import workImg2 from "media/home/workImg2.png"
import workImg3 from "media/home/workImg3.png"
//========== Import Startup Images
import startupBg from "media/images/whoBg.png"
import startupImg from "media/images/startupImg2.png"
//========== Import Technology Images
import tech1 from "media/icons/tech/techIcn1.png"
import tech2 from "media/icons/tech/techIcn2.png"
import tech3 from "media/icons/tech/techIcn3.png"
import tech4 from "media/icons/tech/techIcn4.png"
import tech5 from "media/icons/tech/techIcn5.png"
import tech6 from "media/icons/tech/techIcn6.png"
import tech7 from "media/icons/tech/techIcn7.png"
import tech8 from "media/icons/tech/techIcn8.png"
//========== Import FeedBack Images
import client from "media/images/client.png"
import stars from "media/icons/starts.png"
//========== Import Solutions Images
import solution1 from "media/home/solution1.png"
import solution2 from "media/home/solution2.png"
import solution3 from "media/home/solution3.png"


export default function Home() {
  //=============== Hero ===============
  const heroContent = {
    title: "Top Mobile App Development Company",
    subtitle: (<> Where <span className="text-primary-100">Exceptional Apps</span> <br /> Are Just The Beginning. </>),
    para: "As a top-rated mobile app development company, Bitswits excels in transforming ideas into engaging, high-performance apps.",
    BanImg1: BanImg1,
    title2: "Endorsements on different Platforms",
    title3: (<> Awards & <br /> Recognition </>),
    BanImg2: BanImg2,
    title4: (<> Game <br /> Development </>),
    BanImg3: BanImg3,
    title5: (<> Artificial <br /> Intelligence (Ai) </>),
  };
  //=============== Who ===============
  const whoContent = {
    title: "Who We Are",
    subtitle: (<> Shaping a Smarter Tomorrow <br /> Through Technological Excellence. </>),
    para: "At Bitswits, we blend pioneering IT services and consulting with over a decade of expertise, helping businesses around the globe achieve their transformative goals.",
    whoBg1: whoBg1,
    whoImg: whoImg,
    Avtr: Avtr,
  };
  //=============== What ===============
  const whatContent = {
    title: "What We Do",
    subtitle: "BitsWits transforms businesses through technology",
    para: "We help businesses successfully navigate digital transformation and drive real growth, drawing on the combined power of experience and contextual knowledge, across a vast ecosystem of expertise.",
    whatImg: whatImg,
  };
  //=============== Industry ===============
  const industries = [
    {
      icon: indusIcon1,
      iconA: indusIcon1a,
      iconBg: indusIconBg1,
      industryName: "Healthcare"
    },
    {
      icon: indusIcon2,
      iconA: indusIcon2a,
      iconBg: indusIconBg2,
      industryName: "E-Commerce"
    },
    {
      icon: indusIcon3,
      iconA: indusIcon3a,
      iconBg: indusIconBg3,
      industryName: "Education"
    },
    {
      icon: indusIcon4,
      iconA: indusIcon4a,
      iconBg: indusIconBg4,
      industryName: "Banking"
    },
    {
      icon: indusIcon5,
      iconA: indusIcon5a,
      iconBg: indusIconBg5,
      industryName: "Lifestyle"
    },
    {
      icon: indusIcon6,
      iconA: indusIcon6a,
      iconBg: indusIconBg6,
      industryName: "Sports"
    },
    {
      icon: indusIcon7,
      iconA: indusIcon7a,
      iconBg: indusIconBg7,
      industryName: "Restaurants"
    },
    {
      icon: indusIcon8,
      iconA: indusIcon8a,
      iconBg: indusIconBg8,
      industryName: "Travel"
    },
    {
      icon: indusIcon9,
      iconA: indusIcon9a,
      iconBg: indusIconBg9,
      industryName: "Social"
    },
    {
      icon: indusIcon10,
      iconA: indusIcon10a,
      iconBg: indusIconBg10,
      industryName: "Entertainment"
    },
    {
      icon: indusIcon11,
      iconA: indusIcon11a,
      iconBg: indusIconBg11,
      industryName: "Game"
    },
    {
      icon: indusIcon12,
      iconA: indusIcon12a,
      iconBg: indusIconBg12,
      industryName: "Transportation"
    }
  ];
  //===============
  const industryContent = {
    title: "Industry We Serve",
    para: "No matter what your niche is, we will help build mobile apps for your business. Choose our best application <br /> development company for building apps in any business vertical.",
    industries: industries,
  };
  //=============== Work ===============
  const workData = [
    {
      imgSrc: workImg1,
      title: (<> Pre-Seed & <br className="hidden md:block" /> Seed Startups </>),
      description: 'Create a pitch deck, research your idea, run user interviews, and create MVP.',
    },
    {
      imgSrc: workImg2,
      title: (<> Startups <br className="hidden md:block" /> that Scale </>),
      description: 'Find your product-market fit, find the team with the right skill set, and scale fast.',
    },
    {
      imgSrc: workImg3,
      title: (<> Businesses that <br className="hidden md:block" /> want to digitize </>),
      description: 'Redesign and modernize your platform or SaaS, and create new internal tools.',
    }
  ];
  //===============
  const workContent = {
    title: "We Work With",
    para: (<> No matter what your niche is, we will help build mobile apps for your business. Choose our best application <br /> development company for building apps in any business vertical. </>),
    workData: workData
  };
  //=============== Startup ===============
  const startupContent = {
    title: (<> Startups From <br /> Ideas To <span className="text-primary-100">IPO</span> </>),
    para: "When it comes to startups we offer a complete range of services to help entrepreneurs succeed. From ground-zero to a booming IPO. Here’s how we do it:",
    startupImg: startupImg,
    startupBg: startupBg
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
  //=============== Solution ===============
  const solutions = [
    {
      image: solution1,
      title: 'Game Development',
      description: 'Hire our game development company to captivate your audience and transport them to thrilling virtual worlds.'
    },
    {
      image: solution2,
      title: 'Blockchain Development',
      description: 'Explore the potential of blockchain technology with our expert development services.'
    },
    {
      image: solution3,
      title: 'Artificial Intelligence (AI)',
      description: 'Utilize cutting-edge AI solutions to revolutionize your business processes and decision-making.'
    },
    {
      image: solution1,
      title: 'Game Development',
      description: 'Hire our game development company to captivate your audience and transport them to thrilling virtual worlds.'
    },
    {
      image: solution2,
      title: 'Blockchain Development',
      description: 'Explore the potential of blockchain technology with our expert development services.'
    },
    {
      image: solution3,
      title: 'Artificial Intelligence (AI)',
      description: 'Utilize cutting-edge AI solutions to revolutionize your business processes and decision-making.'
    }
  ];
  //=============== 
  const solutionContent = {
    title: (<> Trusted Development Company <br /> For Tech Solutions </>),
    para: (<> No matter what your niche is, we will help build mobile apps for your business. Choose our best application <br /> development company for building apps in any business vertical. </>),
    solutions: solutions,
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
      <Hero content={heroContent} />
      <Who content={whoContent} />
      <What content={whatContent} />
      <Industry content={industryContent} />
      <Work content={workContent} />
      <Publication />
      <Startup content={startupContent} />
      <Technologies content={techContent} />
      <Feedback content={feedbackContent} />
      <Solution content={solutionContent} />
      <Choose />
      <Contact />
      <Faqs content={faqsContent} />
      <AwardLogos />
    </>
  );
}
