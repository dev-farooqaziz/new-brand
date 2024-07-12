//=============== Import Components
import { Hero2, Trun, Feedback, Provide, Expert, Cryptocurrency, CustomBi, Recognition, Trust, Contact, Faqs, AwardLogos } from "@/components";
//========== Import Hero Images
import BanImg1 from "media/business/banImg-1.png"
//========== Import FeedBack Images
import client from "media/images/client.png"
import stars from "media/icons/starts.png"
//========== Import Provide Images
import provideImg from "media/business/provideBg.png"
import provideIcn1 from "media/icons/businessIcons/provideIcn1.png"
import provideIcn2 from "media/icons/businessIcons/provideIcn2.png"
import provideIcn3 from "media/icons/businessIcons/provideIcn3.png"
//========== Import Bust Images
import bustImg from "media/business/bustBg.png"
import bustIcn1 from "media/icons/businessIcons/bustIcn1.png"
import bustIcn2 from "media/icons/businessIcons/bustIcn2.png"
import bustIcn3 from "media/icons/businessIcons/bustIcn3.png"
//========== Import Marketplace Images
import marketPlace from "media/business/marketBg.png"
import marketIcn1 from "media/icons/businessIcons/marketIcn1.png"
import marketIcn2 from "media/icons/businessIcons/marketIcn2.png"
import marketIcn3 from "media/icons/businessIcons/marketIcn3.png"
//========== Import Cryptocurrency Images
import cryptoImg1 from "media/business/cryptoImg1.png"
import cryptoIcn1 from "media/icons/businessIcons/cryptoIcn1.png"


export default function Home() {
  //=============== Hero ===============
  const heroContent = {
    title: "Our Award-Winning",
    subtitle: (<> Business <span className="text-primary-100">Intelligence</span> <br /> Software Development </>),
    para: "Taking Business To New Heights with Custom AI-Driven BI Software Solutions",
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
      title: 'Custom BI Development',
      description: 'As a BI developer, we provide comprehensive business intelligence development. We use Online Analytical Processing (OLAP) technology to facilitate multi-dimensional analyses of big data from multiple sources.',
    },
    {
      icon: provideIcn2,
      title: 'BI Data Warehouse Development',
      description: 'We provide Business Intelligence (BI) data warehouse services, including the engineering of central repositories, to Extract, Transform and Load (ETL) data from disparate platforms and applications.',
    },
    {
      icon: provideIcn3,
      title: 'On-Premise BI Software Development',
      description: 'We develop self-service and server-based dashboard software that can be easily deployed and installed into any on-premise network environment. Our BI solutions can be customized for any existing hardware.',
    },
  ];
  //=============== 
  const provideContent = {
    subtitle: "Experienced and Dedicated BI Developers",
    title: "Hire Experienced and Dedicated BI Developers",
    para: (<> As Business Intelligence (BI) developers continue to advance the technology's ability to automate mission-critical business decisions, enterprises that fail <br /> to invest will find themselves unable to catch up to their more modern competitors. We expertly program and implement BI solutions for market <br /> forecasting, trend analysis, and operations optimization. </>),
    bg: provideImg,
    bgColor: "bg-black lg:bg-none",
    textColor: "text-white",
    heading: "BI Development",
    text: "Bitswits is a leading development company that can help you hit the market with a newly developed Blockchain solution or revamp your existing systems. Our Blockchain Development promotes business growth while transforming companies and establishing improved business models with custom cryptocurrencies, consensus algorithms, individual nodes, and architectures.",
    provideData: provideData,
  };
  //=============== CryptoCurrency ===============
  const crypto = [
    {
      img: cryptoImg1,
      icon: cryptoIcn1,
      title: 'BI Reporting & Dashboards',
      para: 'As a BI report developer, we build robust and customizable dashboards with reporting and data analytics tools that provide real-time insights in a variety of pixel-perfect displays. Our dashboards and reporting tools have the ability to run on any browser or platform.',
    },
    {
      img: cryptoImg1,
      icon: cryptoIcn1,
      title: 'BI Reporting & Dashboards',
      para: 'As a BI report developer, we build robust and customizable dashboards with reporting and data analytics tools that provide real-time insights in a variety of pixel-perfect displays. Our dashboards and reporting tools have the ability to run on any browser or platform.',
    },
    {
      img: cryptoImg1,
      icon: cryptoIcn1,
      title: 'BI Reporting & Dashboards',
      para: 'As a BI report developer, we build robust and customizable dashboards with reporting and data analytics tools that provide real-time insights in a variety of pixel-perfect displays. Our dashboards and reporting tools have the ability to run on any browser or platform.',
    },
  ];
  //===============
  const cryptoCurrency = {
    cryptoCurrency: crypto,
  };
  //=============== Bust ===============
  const bustData = [
    {
      icon: bustIcn1,
      title: 'AI Cloud Solutions',
      description: 'We leverage the power of custom AI solutions to create cloud machine learning platforms, launch intelligent chatbots, optimize external data storage, and so much more.',
    },
    {
      icon: bustIcn2,
      title: 'Iot Cloud Solutions',
      description: 'We combine the power of IoT and the cloud to create robust, highly functional cloud IoT solutions that support connected applications, power industrial operations, and more.',
    },
    {
      icon: bustIcn3,
      title: 'Big Data Cloud Solutions',
      description: 'We unlock the power of cloud computing to enhance big data storage processing & visualization, adjusting big data volume, velocity, and variety to meet business needs.',
    },
  ];
  //=============== 
  const bustContent = {
    subtitle: "BI Cloud Solutions",
    title: "Custom BI Cloud Solutions",
    para: (<> Chetu’s engineers create custom business intelligence (BI) cloud app solutions that utilize AI-powered software, IoT technologies, <br /> and/or big data storage to optimize core business operations. can be analyzed in real-time. </>),
    bg: bustImg,
    bgColor: "bg-[#EEEEEE] lg:bg-none",
    textColor: "text-black",
    heading: "BI Development",
    text: "Bitswits is a leading development company that can help you hit the market with a newly developed Blockchain solution or revamp your existing systems. Our Blockchain Development promotes business growth while transforming companies and establishing improved business models with custom cryptocurrencies, consensus algorithms, individual nodes, and architectures.",
    provideData: bustData,
  };
  //=============== Custom ===============
  const customServices = [
    {
      title: (<> Augmented Analytics </>),
      description: "Our developers augment your existing analytics software with AI and other tools to deliver broad and precise insights and instantly detect anomalies."
    },
    {
      title: (<> Unified Business Insights </>),
      description: "Our developers help you connect KPI’s, dashboards, and reports in a secure and easy-to-use portal, creating a fuller scope of unified analytics."
    },
    {
      title: (<> Security Compliance & Governance </>),
      description: "We implement SecureKey Authorization technology to provide enhanced security and the ability to govern accessibility permissions on a scalable level."
    },
    {
      title: (<> Automated Business Processes </>),
      description: "We implement features that automate and standardize the development process to improve productivity, save time, and reduce costs."
    },
    {
      title: (<> Embedded BI Analytics </>),
      description: "We create embedded analytics platforms to seamlessly integrate with any application or self-service portal using API & SAML authentication."
    },
    {
      title: (<> Flexible Data Deployment</>),
      description: "Our consultant BI experts help you deploy data to an in-cloud, on-premise, or hybrid platform to meet your specific data deployment needs."
    }
  ];
  //=============== 
  const customContent = {
    subtitle: "Blockchain Development Services",
    title: (<> Custom BI Data Visualization & <br /> Reporting Solutions </>),
    para: (<> Our BI services create interactive and data-rich data visualization and reporting tools with a variety of custom displays such <br /> as tables, charts, candlesticks, gauges, diagrams, maps, and more. </>),
    expertServices: customServices,
    bg: "bg-[#000000]",
    textColor: "text-white",
  };
  //=============== Bust ===============
  const marketPlaceData = [
    {
      icon: marketIcn1,
      title: 'Data Preparation & Integrations',
      description: 'We help you acquire data from diverse sources and streamline it into one secure hub with the ability to integrate with any existing infrastructure for optimized analysis.',
    },
    {
      icon: marketIcn2,
      title: 'Mobile BI Applications',
      description: 'We build custom mobile apps designed to promote enhanced scalability, better connectivity & broadband coverage, unlimited data storage, and so much more.',
    },
    {
      icon: marketIcn3,
      title: 'Real-Time Visual Data Analysis',
      description: 'We create custom interactive visual analytics dashboards for real-time data analysis and monitoring through graphs, tables, charts, and more on an easy-to-use interface',
    },
  ];
  //=============== 
  const marketplaceContent = {
    subtitle: "BI Software Features",
    title: "Custom BI Software Features",
    para: (<> We customize your BI platform’s features to best fit your unique business needs while turning raw data into actionable insights that <br /> can be analyzed in real-time. </>),
    bg: marketPlace,
    bgColor: "bg-[#EEEEEE] lg:bg-none",
    textColor: "text-black",
    heading: "BI Development",
    text: "Bitswits is a leading development company that can help you hit the market with a newly developed Blockchain solution or revamp your existing systems. Our Blockchain Development promotes business growth while transforming companies and establishing improved business models with custom cryptocurrencies, consensus algorithms, individual nodes, and architectures.",
    provideData: marketPlaceData,
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
      <Cryptocurrency content={cryptoCurrency} />
      <Provide content={bustContent} />
      <Expert content={customContent} />
      <Provide content={marketplaceContent} />
      <CustomBi />
      <Recognition />
      <Trust />
      <Contact />
      <Faqs content={faqsContent} />
      <AwardLogos />
    </>
  );
}