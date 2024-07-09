//=============== Import Components
import { Hero3, Trun, Feedback, Work, Bullet, Solution, Gameplay, Technologies, Game, Engage, Quote, Recognition, Trust, Contact, Faqs, AwardLogos } from "@/components";
//========== Import Hero Images
import BanImg1 from "media/gameApp/banImg.png"
import heroImg from "media/gameApp/heroImg.png"
//========== Import FeedBack Images
import client from "media/images/client.png"
import stars from "media/icons/starts.png"
//=============== Import work Images
import workImg1 from "media/gameApp/workImg1.png"
import workImg2 from "media/gameApp/workImg2.png"
import workImg3 from "media/gameApp/workImg3.png"
//========== Import Solutions Images
import solution1 from "media/gameApp/solution1.png"
import solution2 from "media/gameApp/solution2.png"
import solution3 from "media/gameApp/solution3.png"
//========== Import Technology Images
import tech1 from "media/icons/gameTech/techIcn1.png"
import tech2 from "media/icons/gameTech/techIcn2.png"
import tech3 from "media/icons/gameTech/techIcn3.png"
import tech4 from "media/icons/gameTech/techIcn4.png"
import tech5 from "media/icons/gameTech/techIcn5.png"
import tech6 from "media/icons/gameTech/techIcn6.png"



export default function Home() {
  //=============== Hero ===============
  const heroContent = {
    title: "Awarded #1 Game App Development Company",
    subtitle: (<> Experience The Roller <br /> Coaster Of The Gaming <br /> World With Us! </>),
    heroImg: heroImg,
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
  //=============== Work ===============
  const workData = [
    {
      imgSrc: workImg1,
      title: (<> 2D Game <br className="hidden md:block" /> Development </>),
      description: 'Bitswits, a premier 2D game development company, transforms your vision into captivating 2D games. Specializing in comprehensive 2D game development services, we craft everything',
    },
    {
      imgSrc: workImg2,
      title: (<> 3D Game <br className="hidden md:block" /> Development </>),
      description: 'Enter a new era of gaming with Bitswits, your trusted 3D game development company. Our 3D game development services focus on creating rich, interactive worlds that enthrall and engage.',
    },
    {
      imgSrc: workImg3,
      title: (<> NFT Game <br className="hidden md:block" /> Development </>),
      description: 'BitsWits is an NFT game development company that offers innovative and secure NFT game development services for players who want more control over their gaming assets. Our team of ',
    }
  ];
  //===============
  const workContent = {
    subtitle: "Our Services Are Where Innovation Meets Play",
    title: "What Genre Of Games Do We Create?",
    workData: workData
  };
  //=============== Solution ===============
  const solutions = [
    {
      image: solution1,
      title: 'Unity 3D Games',
      description: 'We work with Unity 3D technology to foster unforgettable gaming experiences that push the boundaries of what`s possible. Whether you'
    },
    {
      image: solution2,
      title: 'Virtual Reality Games',
      description: 'Producing immersive and mind-blowing virtual reality experiences for gamers and businesses alike. Our games are designed with the player`s'
    },
    {
      image: solution3,
      title: '3D Game Development',
      description: 'BitsWits masters the art of creating stunning 3D games, harnessing the power of cutting-edge technology and state-of-the-art tools. We'
    },
    {
      image: solution1,
      title: 'Unity 3D Games',
      description: 'We work with Unity 3D technology to foster unforgettable gaming experiences that push the boundaries of what`s possible. Whether you'
    },
    {
      image: solution2,
      title: 'Virtual Reality Games',
      description: 'Producing immersive and mind-blowing virtual reality experiences for gamers and businesses alike. Our games are designed with the player`s'
    },
    {
      image: solution3,
      title: '3D Game Development',
      description: 'BitsWits masters the art of creating stunning 3D games, harnessing the power of cutting-edge technology and state-of-the-art tools. We'
    }
  ];
  //=============== 
  const solutionContent = {
    subtitle: (<> Delivering Excellence Daily </>),
    title: (<> The Genres Of Games We Develop </>),
    para: (<> We are famous for creating immersive game experiences with engaging storylines, stunning visuals, and innovative  <br /> gameplay mechanics. Here's an exciting rundown of what we bring to the table. </>),
    solutions: solutions,
  };
  //=============== Technologies ===============
  const techData = [
    {
      label: 'Game Development',
      techItems: [
        { src: tech1, text: "HTML 5" },
        { src: tech2, text: "Unity" },
        { src: tech3, text: "Unreal Engine" },
        { src: tech4, text: "Photon" },
        { src: tech5, text: "Cocos 2D" },
        { src: tech6, text: "Smartfox Server" },
      ]
    },
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
      <Hero3 content={heroContent} />
      <Trun />
      <Feedback content={feedbackContent} />
      <Work content={workContent} />
      <Bullet />
      <Solution content={solutionContent} />
      <Gameplay />
      <Technologies content={techContent} />
      <Game />
      <Engage />
      <Quote />
      <Recognition />
      <Trust />
      <Contact />
      <Faqs content={faqsContent} />
      <AwardLogos />
    </>
  );
}