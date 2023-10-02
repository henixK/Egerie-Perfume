// componenti
import Hero from "./Components/Hero";
import Layout from "./Components/Layout";
import Article from "./Components/Article";
import Nav from "./Components/Nav";
import Carousel from "./Components/Carousel";
import Counter from "./Components/Counter";
import { Picture } from "./Components/Note";
import Card from "./Components/Cards";

// import foto
import perfume from "../public/Assets/Immagini/foto1-prodotto.jpg";
import modella from "../public/Assets/Immagini/foto2-modella.jpg";
import prodotto from "../public/Assets/Immagini/foto5-prodotto.png";
import Footer from "./Components/Footer";



const data = [
  {
    id: 1,
    title: "Top Notes",
    description:
      "Égérie opens with a burst of refre- shing notes that evoke the bubbling springs where Egeria was believed to have dwelled. Crisp green accords of fresh mint leaves and the sparkling essence of bergamot blend harmoniously, instantly captivating the senses and setting the stage for the enchanting journey ahead."
  },
  {
    id: 2,
    title: "Heart Notes",
    description: "As the fragrance unfolds, the heart notes come to life, exuding the essen- ce of the forest where Egeria was often sought by the virtuous King Numa Pompilius for her wisdom and counsel. Lush and verdant, the heart is a rich tapestry of delicate white florals, where the gentle caress of blooming jasmine and the sweet allure of neroli intertwine with the subtle grace of lotus flower. This floral symphony reflects the nymph's purity and grace, drawing you deeper into her mystical realm."
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

  return (
    <>
      {/* hero section with nav */}
      <Hero>
        <Nav />
      </Hero>

      {/* Description product*/}
      <Layout>
        <div className="h-full w-full">
          <img src={perfume} alt="" />
        </div>
        <Article title={"A Fragrance Inspired by the Legend of the Nymph Egeria"} text={"Step into a mesmerizing world of mythical allure with Égérie, a captivating fragrance that pays homage to the legendary nymph Egeria. Drawing inspiration from the enchanting tales of ancient Rome, this perfume transports you to a lush, mystical realm where nature's beauty and a nymph's allure intertwine in a dance of ethereal elegance."} button={<button className="my-10 uppercase relative">Learn more <span className="absolute border-2 border-black left-0 right-0 -bottom-1 "></span> </button>} />
      </Layout>


      <div className="w-full h-full lg:mt-10">
        <img className="" src={modella} alt="" />
      </div>


      {/* product to buy for mobile */}
      <div className="lg:hidden block">
        <Layout>
          <div className="w-full border-2 border-black">
            <img className=" lg:mb-0" src={prodotto} alt="" />
          </div>
          <Article title={"Égérie Eau de Parfum"} text={"Let Égérie transport you to a realm where ancient legends and the essence of nature converge in perfect harmony, forever leaving a trail of magic and allure wherever you go."} button={<Counter />} />
        </Layout>
      </div>
      <Picture />
      <div className="lg:hidden">
        <Carousel
          cards={cards}
          height="500px"
          width="30%"
          margin="0 auto"
          offset={2}
          showArrows={false}
        />
      </div>
      {/* cards for desktop */}
      <div className="px-32 hidden lg:block mt-20">
        <div className="flex gap-10">
          {cards}
        </div>
        {/* product to buy for desktop */}
      </div>
      <div className="hidden lg:block">
        <Layout>
          <div className="w-full">
            <img className="lg:mb-0" src={prodotto} alt="" />
          </div>
          <Article title={"Égérie Eau de Parfum"} text={"Let Égérie transport you to a realm where ancient legends and the essence of nature converge in perfect harmony, forever leaving a trail of magic and allure wherever you go."} button={<Counter />} />
        </Layout>
      </div>
      <Footer/>
    </>
  )
}
