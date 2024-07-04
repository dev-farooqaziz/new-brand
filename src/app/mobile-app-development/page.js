import Hero from "@/components/hero/Hero";

import Feedback from "@/components/feedback/Feedback";



import Technologies from "@/components/technologies/Technologies";
import Choose from "@/components/choose/Choose";
import Recognition from "@/components/recognition/Recognition";
import Trust from "@/components/trust/Trust";
import Contact from "@/components/contact/Contact";
import Faqs from "@/components/faq/Faqs";
import AwardLogos from "@/components/awardlogos/AwardLogos";

export default function Home() {
  return (
    <>
      <Hero />

      <Feedback />



      <Technologies />
      <Choose />
      <Recognition />
      <Trust />
      <Contact />
      <Faqs />
      <AwardLogos />
    </>
  );
}
