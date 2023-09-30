import Hero from "./Components/Hero";
import Layout from "./Components/Layout";
import Article from "./Components/Article";
import Nav from "./Components/Nav";
import perfume from "../public/Assets/Immagini/foto1-prodotto.jpg";
import modella from "../public/Assets/Immagini/foto2-modella.jpg";
import prodotto from "../public/Assets/Immagini/foto5-prodotto.png"
import Counter from "./Components/Counter";



export default function App() {

  return (
    <>
      <Hero>
        <Nav />
      </Hero>
      <Layout>
        <div className="h-full w-full">
        <img src={perfume} alt="" />
        </div>
        <Article title={"A Fragrance Inspired by the Legend of the Nymph Egeria"} text={"Step into a mesmerizing world of mythi- cal allure with Égérie, a captivating fragrance that pays homage to the legendary nymph Egeria. Drawing inspiration from the enchanting tales of ancient Rome, this perfume transports you to a lush, mystical realm where nature's beauty and a nymph's allure intertwine in a dance of ethereal elegance."} button={<button className="my-10 uppercase relative">Learn more <span className="absolute border-2 border-black left-0 right-0 -bottom-1 "></span> </button>} />
      </Layout>
      <div className="w-screen lg:mt-10">
        <img className="w-full h-full lg:h-screen" src={modella} alt="" />
      </div>
      <div className="lg:hidden block">
      <Layout>
          <div className="w-full">
          <img className=" lg:mb-0" src={prodotto} alt="" />
          </div>
          <Article title={"Égérie Eau de Parfum"} text={"Let Égérie transport you to a realm where ancient legends and the essence of nature converge in perfect har- mony, forever leaving a trail of magic and allure wherever you go."} button={<Counter/>}/>
      </Layout>
      </div>
      
      
    </>
  )
}
