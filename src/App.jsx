import Hero from "./Components/Hero";
import Layout from "./Components/Layout";
import Article from "./Components/Article";
import perfume from "../public/Assets/Immagini/foto1-prodotto.jpg"
import modella from "../public/Assets/Immagini/foto2-modella.jpg"



function App() {


  return (
    <>
      <Hero />
      <Layout >
        <img className="px-8 py-12 lg:w-full md:min-w-1/7" src={perfume} alt="" />
        <Article title={"A Fragrance Inspired by the Legend of the Nymph Egeria"} text={"Step into a mesmerizing world of mythi- cal allure with Égérie, a captivating fragrance that pays homage to the legendary nymph Egeria. Drawing inspiration from the enchanting tales of ancient Rome, this perfume transports you to a lush, mystical realm where natu- re's beauty and a nymph's allure inter- twine in a dance of ethereal elegance."} button={<button className="my-10 uppercase relative">Learn more <span className="absolute border-2 border-black left-0 right-0 -bottom-1 "></span> </button>} />
      </Layout>
      <div className="w-screen mt-10">
        <img className="w-full h-full lg:h-screen" src={modella} alt="" />
      </div>

    </>
  )
}

export default App
