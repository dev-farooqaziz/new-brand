//=============== Import Components
import { Hero2, Trun, Feedback, Provide, Expert, Cryptocurrency, Technologies, Recognition, Trust, Contact, Faqs, AwardLogos } from "@/components";
//========== Import Hero Images
import BanImg1 from "media/blockchain/banImg-1.png"
//========== Import FeedBack Images
import client from "media/images/client.png"
import stars from "media/icons/starts.png"
//========== Import Provide Images
import provideImg from "media/blockchain/provideBg.png"
import provideIcn1 from "media/icons/blockIcons/provideIcn1.png"
import provideIcn2 from "media/icons/blockIcons/provideIcn2.png"
import provideIcn3 from "media/icons/blockIcons/provideIcn3.png"
//========== Import Bust Images
import bustImg from "media/blockchain/bustBg.png"
import bustIcn1 from "media/icons/blockIcons/bustIcn1.png"
import bustIcn2 from "media/icons/blockIcons/bustIcn2.png"
import bustIcn3 from "media/icons/blockIcons/bustIcn3.png"
//========== Import Marketplace Images
import marketPlace from "media/blockchain/marketBg.png"
import marketIcn1 from "media/icons/blockIcons/marketIcn1.png"
import marketIcn2 from "media/icons/blockIcons/marketIcn2.png"
import marketIcn3 from "media/icons/blockIcons/marketIcn3.png"
//========== Import Cryptocurrency Images
import cryptoImg1 from "media/blockchain/cryptoImg1.png"
import cryptoIcn1 from "media/icons/blockIcons/cryptoIcn1.png"
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
    subtitle: (<> Blockchain <span className="text-primary-100">Development</span> <br /> Services </>),
    para: "Bitswits is a leading development company that can help you hit the market with a newly developed Blockchain solution or revamp your existing systems.",
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
      title: 'Blockchain Security',
      description: 'We create blockchain security software that identifies and addresses the fundamental elements of a cross-industry standard for shared and distributed ledgers while transforming how businesses conduct transactions globally.',
    },
    {
      icon: provideIcn2,
      title: 'Public & Private Blockchain',
      description: 'We develop customized and protected private blockchain for businesses that process hundreds or thousands of transactions per second, as well as open, decentralized public blockchain that grants public access to the network.',
    },
    {
      icon: provideIcn3,
      title: 'Decentralized Applications (Dapps)',
      description: 'We develop custom decentralized applications and integrate them into existing enterprise systems where businesses can leverage a protected, secure environment for collaboration and diverse business transactions.',
    },
  ];
  //=============== 
  const provideContent = {
    subtitle: "Blockchain Development Services",
    title: "We Provide Blockchain Development Services",
    para: (<> Our software developers are highly proficient in building blockchain technologies from scratch and customizing existing blockchain solutions <br /> through software integrations, functionality modifications, and feature implementations. </>),
    bg: provideImg,
    bgColor: "bg-black lg:bg-none",
    textColor: "text-white",
    heading: "Blockchain Technology Development",
    text: "Bitswits is a leading development company that can help you hit the market with a newly developed Blockchain solution or revamp your existing systems. Our Blockchain Development promotes business growth while transforming companies and establishing improved business models with custom cryptocurrencies, consensus algorithms, individual nodes, and architectures.",
    provideData: provideData,
  };
  //=============== Analysis ===============
  const AnalysisServices = [
    {
      title: (<> Data Analysis </>),
      description: "Our experts can develop Blockchain software with AI algorithms that analyze large volumes of data recorded on the Blockchain to gather insights, patterns, and trends. AI can identify anomalies and predict future behavior using machine learning and data analytics strategies."
    },
    {
      title: (<> Natural Language Processing </>),
      description: "Our AI and Blockchain experts can incorporate natural language processing capabilities into your AI-powered Blockchain solution to enhance smart contracts to have the ability to understand human-readable language and enable greater accessibility of Blockchain technology. This streamlines business processes and reduces the need for manual intervention."
    },
    {
      title: (<> Smart Contract Optimization </>),
      description: "Our Blockchain development using AI includes smart contract optimization, which automates the process of contract creation, validation, and enforcement. AI analyzes contract templates, historical data, and legal regulations to generate more efficient and smart contracts. It improves contract performance, reduces errors, and enhances contract management processes."
    },
    {
      title: (<> Security and Fraud Detection </>),
      description: "We develop AI-powered security solutions to enhance the security of Blockchain networks. It can monitor network activity, detect suspicious behavior, and identify potential security threats or attacks. AI can assist in detecting fraudulent transactions, preventing unauthorized access, and ensuring the Blockchain network's integrity."
    },
    {
      title: (<> Privacy and Confidentiality </>),
      description: "We leverage AI techniques like federated learning, which can be applied to protect the privacy of data stored on the blockchain. AI algorithms enable computations on encrypted data, allowing privacy-preserving analysis while maintaining data confidentiality."
    },
    {
      title: (<> AI-Enhanced Consensus Mechanisms </>),
      description: "Our experts leverage AI algorithms to optimize consensus mechanisms within Blockchain networks. Using machine learning, AI can adapt the consensus protocol based on network conditions, transaction patterns, or node behavior. This improves scalability, efficiency, and fault tolerance within the Blockchain network."
    }
  ];
  //=============== 
  const AnalysisContent = {
    subtitle: "Blockchain Development Services",
    title: "Custom AI Blockchain Development Services",
    para: (<> Our developers can combine Artificial Intelligence (AI) and Blockchain to more effectively secure data, establish ownership, optimize smart <br /> contracts, and track goods. We integrate AI technology into Blockchain software to develop transformative solutions across various industries. <br /> Our AI Blockchain solutions provide advanced functionality and optimal benefits. </>),
    expertServices: AnalysisServices,
    bg: "bg-[#EEEEEE]",
    textColor: "text-black",
  };
  //=============== Bust ===============
  const bustData = [
    {
      icon: bustIcn1,
      title: 'Strengthen Security',
      description: 'We leverage blockchain’s peer-to-peer nature to create internal & external breach-resistant applications for preventing fraud & cyber-attacks while managing sensitive data.',
    },
    {
      icon: bustIcn2,
      title: 'Bust Operational Bottlenecks',
      description: 'We build Blockchain-as-a-Service (BaaS) solutions to replace error-prone, paper-heavy, and time-consuming processes by embedding automated workflows into existing applications.',
    },
    {
      icon: bustIcn3,
      title: 'Cut Intermediary Costs',
      description: 'We develop public and private blockchains for applications to exchange data records, status updates, payments, and other transaction information without added financial restraints.',
    },
  ];
  //=============== 
  const bustContent = {
    subtitle: "Custom Blockchain Applications",
    title: "We Build Custom Blockchain Applications",
    para: (<> Bitswits designs and integrates custom Blockchain Applications into existing enterprise systems for businesses to leverage a safe, <br /> secure environment for diverse business transactions. </>),
    bg: bustImg,
    bgColor: "bg-[#EEEEEE] lg:bg-none",
    textColor: "text-black",
    heading: "Blockchain Application Development",
    text: "We leverage third-party blockchain software solutions to develop protected, trusted, and scalable Blockchain Applications designed to support a wide range of plugins, reduce losses, avoid fraud, eliminate expensive intermediary fees, boost local & international trade, distribute sensitive information, and so much more in a centralized platform.",
    provideData: bustData,
  };
  //=============== CryptoCurrency ===============
  const crypto = [
    {
      img: cryptoImg1,
      icon: cryptoIcn1,
      title: 'Cryptocurrency Mining Software',
      para: 'We integrate Application-Specific Integrated Circuit (ASIC) chips within existing cryptocurrency mining software to accelerate transaction verifications, along with designing decentralized networks for mining pools, creating miner performance dashboards, and providing architecture solutions for mining farms.',
    },
    {
      img: cryptoImg1,
      icon: cryptoIcn1,
      title: 'Cryptocurrency Mining Software',
      para: 'We integrate Application-Specific Integrated Circuit (ASIC) chips within existing cryptocurrency mining software to accelerate transaction verifications, along with designing decentralized networks for mining pools, creating miner performance dashboards, and providing architecture solutions for mining farms.',
    },
    {
      img: cryptoImg1,
      icon: cryptoIcn1,
      title: 'Cryptocurrency Mining Software',
      para: 'We integrate Application-Specific Integrated Circuit (ASIC) chips within existing cryptocurrency mining software to accelerate transaction verifications, along with designing decentralized networks for mining pools, creating miner performance dashboards, and providing architecture solutions for mining farms.',
    },
  ];
  //===============
  const cryptoCurrency = {
    cryptoCurrency: crypto,
  };
  //=============== Custom ===============
  const customServices = [
    {
      title: (<> Custom Blockchain <br /> Finance & Banking Solutions </>),
      description: "We develop Blockchain Finance & Banking Solutions, including high-speed algorithmic trading platforms for trading, risk management & RPA platforms for banking, and P2P & SME lending platforms for loan management, along with developing solutions for payment processing, international money transfers, and e-wallets."
    },
    {
      title: (<> Custom Blockchain <br /> Supply Chain Solutions </>),
      description: "We offer custom Blockchain Supply Chain Solutions to help supply chain & logistics enterprises enhance security, control expenses, monitor goods provenance, and flag inefficiencies within existing workflows using counterfeit detection software, document digitization & automation, and digital certification & logistics tracking."
    },
    {
      title: (<> Custom Blockchain <br /> Retail & E-Commerce Solutions </>),
      description: "We create custom Blockchain Retail & E-Commerce Solutions to help retailers ensure product authentication, execute secure payment transactions, and enhance their data capabilities. We implement features for crypto payments, chain-of-custody data access, and cost reduction transactions."
    },
    {
      title: (<> Custom Blockchain <br /> Healthcare Solutions </>),
      description: "We engineer Blockchain Healthcare Solutions to maintain HIPAA compliance and protect sensitive patient data for intuitive outcome-based contracts, clinical trial management, and patient health data exchange, thus increasing the quality of care by enabling new healthcare business models and ecosystems to evolve."
    },
    {
      title: (<> Custom Blockchain <br /> Development Services Company </>),
      description: "Our Blockchain solutions for real estate industry, offer enhanced pre-purchase due diligence, liquid asset implementation, marketplace data encryption, and ownership verification using automation processes to accelerate & trace land sales transactions while reducing the number of intermediaries and eliminating existing database"
    },
    {
      title: (<> Custom Blockchain <br /> Gaming Solutions </>),
      description: "We create Blockchain Gaming Solutions that are cryptographically programmed to provide enhanced security and protection against cheating, DDoS attacks, and system failures. Our solutions also verify and secure digital items, tokenized assets, and in-game history, allowing players to freely buy, sell, and trade assets."
    }
  ];
  //=============== 
  const customContent = {
    subtitle: "Blockchain Development Services",
    title: "Custom AI Blockchain Development Services",
    para: (<> Our developers can combine Artificial Intelligence (AI) and Blockchain to more effectively secure data, establish ownership, optimize smart <br /> contracts, and track goods. We integrate AI technology into Blockchain software to develop transformative solutions across various industries. <br /> Our AI Blockchain solutions provide advanced functionality and optimal benefits. </>),
    expertServices: customServices,
    bg: "bg-[#000000]",
    textColor: "text-white",
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
  //=============== Bust ===============
  const marketPlaceData = [
    {
      icon: marketIcn1,
      title: 'Blockchain Security',
      description: 'We create blockchain security software that identifies and addresses the fundamental elements of a cross-industry standard for shared and distributed ledgers while transforming how businesses conduct transactions globally.',
    },
    {
      icon: marketIcn2,
      title: 'Advanced NFT Functionality',
      description: 'Create an NFT Marketplace where cryptocurrency investors can access real-time data about the cost, payment methods, and the length of the auction during which bidding is allowed as well as the trading history.',
    },
    {
      icon: marketIcn3,
      title: 'Opensea SDK',
      description: 'We can develop marketplaces using the OpenSea SDK infrastructure enabling innovative functionality with your custom design and the ability to sell items for your own ERC 20.',
    },
  ];
  //=============== 
  const marketplaceContent = {
    subtitle: "NFT Marketplace Development",
    title: "Custom NFT Marketplace Development",
    para: (<> We offer custom designs and development services for NFT marketplaces where digital assets of users are minted to NFTs and sold or <br /> auctioned to other individuals. </>),
    bg: marketPlace,
    bgColor: "bg-[#EEEEEE] lg:bg-none",
    textColor: "text-black",
    heading: "Blockchain Security",
    text: "We create blockchain security software that identifies and addresses the fundamental elements of a cross-industry standard for shared and distributed ledgers while transforming how businesses conduct transactions globally.",
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
      <Expert content={AnalysisContent} />
      <Provide content={bustContent} />
      <Cryptocurrency content={cryptoCurrency} />
      <Expert content={customContent} />
      <Technologies content={techContent} />
      <Provide content={marketplaceContent} />
      <Recognition />
      <Trust />
      <Contact />
      <Faqs content={faqsContent} />
      <AwardLogos />
    </>
  );
}