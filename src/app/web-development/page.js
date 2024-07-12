//=============== Import Components
import { Hero4, Trun, UniqueModel, Feedback, Provide, Expert, Process, Technologies, FullStack, Recognition, Trust, Contact, Faqs, AwardLogos } from "@/components";
//========== Import Hero Images
import BanImg1 from "media/web/banImg.png"
//========== Import FeedBack Images
import client from "media/images/client.png"
import stars from "media/icons/starts.png"
//========== Import Provide Images
import provideImg from "media/web/provideBg.png"
import provideIcn1 from "media/icons/webIcons/provideIcn1.png"
import provideIcn2 from "media/icons/webIcons/provideIcn2.png"
import provideIcn3 from "media/icons/webIcons/provideIcn3.png"
//========== Import Marketplace Images
import marketPlace from "media/web/marketBg.png"
import marketIcn1 from "media/icons/webIcons/marketIcn1.png"
import marketIcn2 from "media/icons/webIcons/marketIcn2.png"
//========== Import Technology Images
import tech1 from "media/icons/blockTech/techIcn1.png"
import tech2 from "media/icons/blockTech/techIcn2.png"
import tech3 from "media/icons/blockTech/techIcn3.png"
import tech4 from "media/icons/blockTech/techIcn4.png"
import tech5 from "media/icons/blockTech/techIcn5.png"
import tech6 from "media/icons/blockTech/techIcn6.png"
import tech7 from "media/icons/blockTech/techIcn7.png"
import tech8 from "media/icons/blockTech/techIcn8.png"


export default function Home() {
  //=============== Hero ===============
  const heroContent = {
    title: "Our Award-Winning",
    subtitle: (<> Custom <span className="text-primary-100">Web </span> <br /> Development Services </>),
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
      title: 'Custom Website Application Development',
      description: 'As a Custom Website Application, we provide comprehensive business intelligence development. We use Online Analytical Processing (OLAP) technology to facilitate multi-dimensional analyses of big data from multiple sources.',
    },
    {
      icon: provideIcn2,
      title: 'Content Management Systems',
      description: 'We provide Custom Website Application data warehouse services, including the engineering of central repositories, to Extract, Transform and Load (ETL) data from disparate platforms and applications.',
    },
    {
      icon: provideIcn3,
      title: 'No Cookie-Cutter Solutions',
      description: 'We develop self-service and server-based dashboard software that can be easily deployed and installed into any on-premise network environment. Our Custom Website Application solutions can be customized for any existing hardware.',
    },
  ];
  //=============== 
  const provideContent = {
    subtitle: "Web Development Services",
    title: "Our Web Development Company Can Build Your Dream Website",
    para: (<> As Web developers continue to advance the technology's ability to automate mission-critical business decisions, enterprises that fail <br /> to invest will find themselves unable to catch up to their more modern competitors. We expertly program and implement BI solutions for market <br /> forecasting, trend analysis, and operations optimization. </>),
    bg: provideImg,
    bgColor: "bg-black lg:bg-none",
    textColor: "text-white",
    heading: "Web Development Services",
    text: "Bitswits is a leading development company that can help you hit the market with a newly developed Blockchain solution or revamp your existing systems. Our Blockchain Development promotes business growth while transforming companies and establishing improved business models with custom cryptocurrencies, consensus algorithms, individual nodes, and architectures.",
    provideData: provideData,
  };
  //=============== Analysis ===============
  const AnalysisServices = [
    {
      title: (<> Web App Integration Services </>),
      description: "We always stay on top of the latest developments in deployment, customization, and integration to design the perfect, seamless approach to how you utilize your software. Our back-end developers are experts in Java, PHP, Ruby, Python, SQL, and more while our front-end designers."
    },
    {
      title: (<> Mobile App Development Services </>),
      description: "With years of expertise under our belt, our team specializing in custom mobile app development can assist you in creating seamless and fluid experiences across various mobile devices."
    },
    {
      title: (<> Enterprise Web Design and Development </>),
      description: "We use custom APIs and our vast knowledge of web services to build Enterprise Web Applications for digital marketing, CRM, inventory control, expedited workflows, and so much more."
    },
    {
      title: (<> Full-Stack Web Development Solutions </>),
      description: "Our expert Full-Stack website developers are highly skilled in Java and SQL programming languages with experience in leading 12-factor applications and cloud platform implementation."
    },
    {
      title: (<> Web Portal Development </>),
      description: "We leverage AI techniques like federated learning, which can be applied to protect the privacy of data stored on the blockchain. AI algorithms enable computations on encrypted data, allowing privacy-preserving analysis while maintaining data confidentiality."
    },
    {
      title: (<> Animation & Graphics Web Design </>),
      description: "Our award-winning animators and graphic designers create beautiful logos, branding materials, illustrations, infographics, motion graphics, and more to fulfill your branding vision."
    },
    {
      title: (<> Ecommerce Development Solutions </>),
      description: "Our Ecommerce development services can help you build an online store that drives sales and revenue. We have experience with various e-commerce platforms, including Magento, Shopify, and BigCommerce and we can help you choose the best for your business."
    },
    {
      title: (<> Web Integration Services </>),
      description: "Our team of experienced web developers provides comprehensive web integration services, ensuring your software operates seamlessly across all platforms and devices for optimal performance and user experience."
    },
    {
      title: (<> CMS Integration </>),
      description: "We integrate CMS capabilities into your existing website or application, enabling you to add and edit web content without needing to rewrite or update any code."
    }
  ];
  //=============== 
  const AnalysisContent = {
    subtitle: "Web Design and Development Company",
    title: "Professional Web Design and Development Company",
    para: (<> Our Full-Stack Web Developers have the programming expertise and industry-specific experience to build, integrate, and customize <br /> your website or application to align perfectly with your vision. </>),
    expertServices: AnalysisServices,
    bg: "bg-[#EEEEEE]",
    textColor: "text-black",
  };
  //=============== Bust ===============
  const marketPlaceData = [
    {
      icon: marketIcn1,
      title: 'Chatbots And Virtual Assistants',
      description: 'Our experts customize AI-powered programs to provide automated customer support and assistance to website visitors. We build custom chatbots using programming languages like Python, Java, or JavaScript. Our website engineers use artificial intelligence and natural language processing technologies to build custom virtual assistants that improve the customer experience.',
    },
    {
      icon: marketIcn2,
      title: 'Personalization And Recommendation Engines',
      description: 'Our website engineers integrate machine learning algorithms to provide users with personalized content and product recommendations based on browsing behavior and preferences. Predictive analytics involves using machine learning algorithms to analyze data and make predictions about user behavior, website performance, and other relevant metrics.',
    },

  ];
  //=============== 
  const marketplaceContent = {
    subtitle: "Web Development Services",
    title: "AI Web Development Services",
    para: (<> We customize your  AI web development features to best fit your unique business needs while turning raw data into actionable insights that <br /> can be analyzed in real-time. </>),
    bg: marketPlace,
    bgColor: "bg-[#EEEEEE] lg:bg-none",
    textColor: "text-black",
    heading: "Web Development Services",
    text: "Bitswits is a leading development company that can help you hit the market with a newly developed Blockchain solution or revamp your existing systems. Our Blockchain Development promotes business growth while transforming companies and establishing improved business models with custom cryptocurrencies, consensus algorithms, individual nodes, and architectures.",
    provideData: marketPlaceData,
  };
  //=============== Technologies ===============
  const techData = [
    {
      label: 'Blockchain Technology Platforms',
      techItems: [
        { src: tech1, text: "Stellar" },
        { src: tech2, text: "Ethereum" },
        { src: tech3, text: "Hyperledger" },
        { src: tech4, text: "Eos" },
        { src: tech5, text: "Bitcoin" },
        { src: tech6, text: "Echo" },
        { src: tech7, text: "r3-corda" },
        { src: tech8, text: "Quorum" },
      ]
    },
    {
      label: 'Technology Stack',
      techItems: [
        { src: tech1, text: "Stellar" },
        { src: tech2, text: "Ethereum" },
        { src: tech3, text: "Hyperledger" },
        { src: tech4, text: "Eos" },
        { src: tech5, text: "Bitcoin" },
        { src: tech6, text: "Echo" },
        { src: tech7, text: "r3-corda" },
        { src: tech8, text: "Quorum" },
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
      <Hero4 content={heroContent} />
      <UniqueModel />
      <Trun />
      <Feedback content={feedbackContent} />
      <Provide content={provideContent} />
      <Expert content={AnalysisContent} />
      <Provide content={marketplaceContent} />
      <Process />
      <Technologies content={techContent} />
      <FullStack />
      <Recognition />
      <Trust />
      <Contact />
      <Faqs content={faqsContent} />
      <AwardLogos />
    </>
  );
}