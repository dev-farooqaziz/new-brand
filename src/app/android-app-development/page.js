//=============== Import Components
import { Hero2, Trun, Feedback, Solution, Work, Trust, Startup, Journey, Technologies, Choose, Showcasing, Quote, Recognition, Contact, Faqs, AwardLogos, } from "@/components";
//========== Import Hero Images
import BanImg1 from "media/androidApp/banImg-1.png"
//========== Import FeedBack Images
import client from "media/images/client.png"
import stars from "media/icons/starts.png"
//========== Import Solutions Images
import solution1 from "media/androidApp/solution1.png"
import solution2 from "media/androidApp/solution2.png"
import solution3 from "media/androidApp/solution3.png"
//=============== Import work Images
import workImg1 from "media/home/workImg1.png"
import workImg2 from "media/home/workImg2.png"
import workImg3 from "media/home/workImg3.png"
//========== Import Startup Images
import startupBg from "media/images/whoBg.png"
import startupImg from "media/images/startupImg2.png"
//========== Import Journey Images
import journeyBg from "media/images/journyBg2.png"
import journeyImg from "media/images/journyImg2.png"
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
    title: "Revolutionizing & Creating A Smarter Future",
    subtitle: (<> <span className="text-primary-100">Android App </span> <br /> Development Company </>),
    para: "At BitsWits, we specialize in creating custom-crafted Android applications that meet  our customer's needs. Our android app development team firmly believes that no two  businesses are the same, and neither should their apps be.",
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
  //=============== Solution ===============
  const solutions = [
    {
      image: solution1,
      title: (<> Custom Android App <br /> Development </>),
      description: 'Our expert Android development team can help take your business to the next level with custom Android mobile app development services. '
    },
    {
      image: solution2,
      title: (<> Android App <br /> Integration </>),
      description: 'Need help integrating your Android app with other software systems and APIs? Look no further.'
    },
    {
      image: solution3,
      title: (<> Android Game <br /> Development </>),
      description: 'Hire us to build technology that can recognize your face, just like a key unlocks a door. Our systems use your unique'
    },
    {
      image: solution1,
      title: (<> Custom Android App <br /> Development </>),
      description: 'Our expert Android development team can help take your business to the next level with custom Android mobile app development services. '
    },
    {
      image: solution2,
      title: (<> Android App <br /> Integration </>),
      description: 'Need help integrating your Android app with other software systems and APIs? Look no further.'
    },
    {
      image: solution3,
      title: (<> Android Game <br /> Development </>),
      description: 'Do you plan to produce an exceptional Android mobile game that will captivate your audience? Worry no more, as our team of Android game '
    }
  ];
  //=============== 
  const solutionContent = {
    subtitle: "Android App Development Services",
    title: (<> Leveling Up Your App Game With Our Slew Of <br /> Android App Development Service! </>),
    solutions: solutions,
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
      <Solution content={solutionContent} />
      <Work content={workContent} />
      <Trust />
      <Startup content={startupContent} />
      <Journey content={journeyContent} />
      <Technologies content={techContent} />
      <Choose />
      <Showcasing />
      <Quote />
      <Recognition />
      <Contact />
      <Faqs content={faqsContent} />
      <AwardLogos />
    </>
  );
}
