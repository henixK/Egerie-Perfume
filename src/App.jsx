// componenti
import Hero from "./Components/Hero";
import Layout from "./Components/Layout";
import Article from "./Components/Article";
import Nav from "./Components/Nav";
import Carousel from "./Components/Carousel";
import Counter from "./Components/Counter";
import { Picture } from "./Components/Note";
import Card from "./Components/Cards";

import { useRef } from "react";
import { useInView } from "framer-motion";

// import foto
import perfume from "../public/Assets/Immagini/foto1-prodotto.jpg";
import modella from "../public/Assets/Immagini/foto2-modella.jpg";
import prodotto from "../public/Assets/Immagini/foto5-prodotto.png";
import Footer from "./Components/Footer";
import NoteMobile from "./Components/NoteMobile";



const data = [
  {
    id: 1,
    title: "Top Notes",
    description:
      "Égérie opens with a burst of refreshing notes that evoke the bubbling springs where Egeria was believed to have dwelled. Crisp green accords of fresh mint leaves and the sparkling essence of bergamot blend harmoniously, instantly captivating the senses and setting the stage for the enchanting journey ahead."
  },
  {
    id: 2,
    title: "Heart Notes",
    description: "As the fragrance unfolds, the heart notes come to life, exuding the essence of the forest where Egeria was often sought by the virtuous King Numa Pompilius for her wisdom and counsel. Lush and verdant, the heart is a rich tapestry of delicate white florals, where the gentle caress of blooming jasmine and the sweet allure of neroli intertwine with the subtle grace of lotus flower. This floral symphony reflects the nymph's purity and grace, drawing you deeper into her mystical realm."
  },
  {
    id: 3,
    title: "Base Notes",
    description:
      "In the dry-down, Égérie's base notes reveal a warm and captivating blend that embodies the lingering presence of the nymph amidst the ancient Roman woods. Sensual and earthy vetiver rises from the forest floor, entwining with the woody notes of cedarwood, reminiscent of the trees where Egeria would seek solace and wisdom. As the fragrance settles, a velvety veil of smooth vanilla and a hint of musk adds a touch of intrigue, leaving an unforgettable and sensual trail in her wake."
  },
];

const cards = data.map((data) => (
  <Card
    key={data.id}
    title={data.title}
    description={data.description}
  />
));


export default function App() {
  const ref = useRef(null)
  const isInView = useInView(ref)
  return (
    <>
      {/* hero section with nav */}
      <Hero>
        <Nav />
      </Hero>

      {/* Description product*/}
      <Layout>
        <div ref={ref}
          style={{
            transform: isInView ? "none" : "translateX(-100px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1s"
          }}
          className="h-full w-full mt-10 md:mt-20 lg:mt-0 overflow-hidden">
          <img className="h-full w-full object-cover" src={perfume} alt="" />
        </div>
        <Article ref={ref} style={{
          transform: isInView ? "none" : "translateX(100px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1s"
        }} title={"A Fragrance Inspired by the Legend of the Nymph Egeria"} text={"Step into a mesmerizing world of mythical allure with Égérie, a captivating fragrance that pays homage to the legendary nymph Egeria. Drawing inspiration from the enchanting tales of ancient Rome, this perfume transports you to a lush, mystical realm where nature's beauty and a nymph's allure intertwine in a dance of ethereal elegance."} button={<button className="my-10 uppercase relative hover:underline underline-offset-8">Learn more</button>} />
      </Layout>

      {/* modella desktop */}
      <div className="w-full h-full md:block hidden lg:mt-10">
        <img className="" src={modella} alt="" />
      </div>

      {/* product to buy for mobile */}
      <div className="lg:hidden block my-10">
        <Layout>
          <div className="w-full">
            <img className="lg:mb-0" src={prodotto} alt="" />
          </div>
          <Article title={"Égérie Eau de Parfum"} text={"Let Égérie transport you to a realm where ancient legends and the essence of nature converge in perfect harmony, forever leaving a trail of magic and allure wherever you go."} button={<Counter />} />
        </Layout>
      </div>

      {/* description with image list */}
      <div className="hidden lg:block">
        <Picture />
      </div>
      <div className="md:hidden block mt-40 mb-20">
        <Carousel />
      </div>
      {/* modella mobile */}
      <div className="w-full h-full md:hidden block mb-10">
        <img className="" src={modella} alt="" />
      </div>
      <NoteMobile />
      {/* cards for desktop */}
      <div className="px-32 hidden lg:block mt-20">
        <div className="flex gap-10">
          {cards}
        </div>
      </div>
      {/* product to buy for desktop */}
      <div className="hidden md:block">
        <div className="flex h-screen items-center px-20 py-10">
          <div className="w-full h-full botder-2 border-black ">
            <img className="w-full h-full lg:mb-0 object-contain" src={prodotto} alt="" />
          </div>
          <Article title={"Égérie Eau de Parfum"} text={"Step into a mesmerizing world of mythical allure with Égérie, a captivating fragrance that pays homage to the legendary nymph Egeria. Drawing inspiration from the enchanting tales of ancient Rome, this perfume transports you to a lush, mystical realm where nature's beauty and a nymph's allure intertwine in a dance of ethereal elegance."} button={<Counter />} />
        </div>
      </div>
      <Footer />
    </>
  )
}
