import Hero from "@/components/hero/Hero";
import Who from "@/components/who/Who";
import What from "@/components/what/What";
import Industry from "@/components/industry/Industry";
import Work from "@/components/work/Work";
import Publication from "@/components/publication/Publication";
import Startup from "@/components/startup/Startup";
import Technologies from "@/components/technologies/Technologies";
import Feedback from "@/components/feedback/Feedback";
import Trusted from "@/components/solution/Solution";
import Choose from "@/components/choose/Choose";
import Contact from "@/components/contact/Contact";
import Faqs from "@/components/faq/Faqs";
import AwardLogos from "@/components/awardlogos/AwardLogos";

export default function Home() {
  return (
    <>
      <Hero />
      <Who />
      <What />
      <Industry />
      <Work />
      <Publication />
      <Startup />
      <Technologies />
      <Feedback />
      <Trusted />
      <Choose />
      <Contact />
      <Faqs />
      <AwardLogos />
    </>
  );
}
