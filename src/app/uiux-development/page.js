//=============== Import Components
import { Hero2, Trun, Feedback, Provide, Journey, Technologies, Recognition, Trust, Contact, Faqs, AwardLogos } from "@/components";
//========== Import Hero Images
import BanImg1 from "media/uiux/banImg-1.png"
//========== Import FeedBack Images
import client from "media/images/client.png"
import stars from "media/icons/starts.png"
//========== Import Provide Images
import provideImg from "media/uiux/provideBg.png"
import provideIcn1 from "media/icons/uiuxIcons/provideIcn1.png"
import provideIcn2 from "media/icons/uiuxIcons/provideIcn2.png"
import provideIcn3 from "media/icons/uiuxIcons/provideIcn3.png"
import provideIcn4 from "media/icons/uiuxIcons/provideIcn4.png"
//========== Import Journey Images
import journeyBg from "media/images/journyBg.png"
import journeyImg from "media/images/journyImg.png"
//========== Import Technology Images
import tech1 from "media/icons/uiuxIcons/techIcn1.png"
import tech2 from "media/icons/uiuxIcons/techIcn2.png"
import tech3 from "media/icons/uiuxIcons/techIcn3.png"
import tech4 from "media/icons/uiuxIcons/techIcn4.png"


export default function Home() {
  //=============== Hero ===============
  const heroContent = {
    title: "Our Award-Winning",
    subtitle: (<> UI & UX <span className="text-primary-100">Design</span> And <br /> Development Services </>),
    para: "Empowering Businesses with Tailored UI/UX Solutions By Our Design Experts",
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
  //=============== Provide ===============
  const provideData = [
    {
      icon: provideIcn1,
      title: 'Information Architecture Design',
      description: 'Our developers use industry-leading tools to construct new content management lifecycles, content models, and robust Document Information Typing Architecture (DITA) all while streamlining organic processes for conversion rate optimization (CRO).',
    },
    {
      icon: provideIcn2,
      title: 'User Experience (UX) Development',
      description: 'We construct highly responsive Graphical User Interfaces (GUI) that include elements like 2D/3D animations and embedded media, providing an organic, unified user experience throughout our custom solutions.',
    },
    {
      icon: provideIcn3,
      title: 'User Interface (UI) Development',
      description: 'Our UI/UX designers are experts in graphic libraries, including OpenGL and WebGL. We collaborate with your stakeholders and IT team to develop a style (including color palettes, logo designs and layouts) that harmonizes with your company culture.',
    },
    {
      icon: provideIcn4,
      title: 'Web & Mobile App UI/UX Development',
      description: 'We utilize frameworks like Xamarin, DevExpress, Ionic, Appcelerator, and Apache Cordova to deliver highly responsive UI/UX designs that fully leverage touchscreen functionality and provide mobile-first user experiences for progressive web apps.',
    },
  ];
  //=============== 
  const provideContent = {
    subtitle: "Design Services For Smarter User Navigation",
    title: "Dynamic User Design Services For Smarter User Navigation",
    para: (<> The key to developing a successful app is marrying the functionality your users demand with an intuitive design and experience that make it as simple <br /> as possible to use. Chetu’s UI/UX experts will design the perfect web, desktop, or mobile app to meet your specific business requirements, industry needs, <br /> and product development goals. We design and develop innovative digital user experiences that solve complex business problems. </>),
    bg: provideImg,
    bgColor: "bg-black lg:bg-none",
    textColor: "text-white",
    heading: "User Design Services",
    text: "Bitswits is a leading development company that can help you hit the market with a newly developed Blockchain solution or revamp your existing systems. Our Blockchain Development promotes business growth while transforming companies and establishing improved business models with custom cryptocurrencies, consensus algorithms, individual nodes, and architectures.",
    provideData: provideData,
  };
  //=============== Journey ===============
  const journeyContent = {
    subtitle: "Streamlined Process to Develop Your App",
    title: "Our Strategic Web Development Process",
    para: (<> We meet the demands of your business by executing our strategically planned processes for delivering top-of-the-line <br /> Custom Websites & Applications.</>),
    journeyImg: journeyImg,
    journeyBg: journeyBg
  };
  //=============== Technologies ===============
  const techData = [
    {
      label: 'Programming Languages & Technologies',
      techItems: [
        { src: tech1, text: "Bootstrap" },
        { src: tech2, text: "HTML5" },
        { src: tech3, text: "CSS3" },
        { src: tech4, text: "jQuery" },
      ]
    },
    {
      label: 'Wireframe & Prototype',
      techItems: [
        { src: tech1, text: "Bootstrap" },
        { src: tech2, text: "HTML5" },
        { src: tech3, text: "CSS3" },
        { src: tech4, text: "jQuery" },
      ]
    },
    {
      label: 'Visual Designs',
      techItems: [
        { src: tech1, text: "Bootstrap" },
        { src: tech2, text: "HTML5" },
        { src: tech3, text: "CSS3" },
        { src: tech4, text: "jQuery" },
      ]
    },
  ];
  //===============
  const techContent = {
    subtitle: "Technology",
    title: "Bitswits UX/UI Technology Stack",
    para: (<> We use multiple platforms and programming languages to ensure our desktop and mobile UI/UX design services are <br /> versatile and leverage the full strength of these systems to provide computing power, enhanced graphics, robust <br /> security standards, and greater sssss performance. </>),
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
      <Provide content={provideContent} />
      <Journey content={journeyContent} />
      <Technologies content={techContent} />
      <Recognition />
      <Trust />
      <Contact />
      <Faqs content={faqsContent} />
      <AwardLogos />
    </>
  );
}