import prodotto2 from "../../public/Assets/Immagini/foto3-prodotto.jpg";
import modella2 from "../../public/Assets/Immagini/foto4-modella.jpg";
import { useRef } from "react";
import { useInView } from "framer-motion";


const data1 = [
    {
        id: 1,
        title: "An olfactory ode to the magical and mysterious",
        description: "Égérie is an olfactory ode to the magical and mysterious, a fragrance that will evoke a sense of wonder and grace, captivating the hearts of all who experience its spellbinding allure. Let Égérie transport you to a realm where ancient legends and the essence of nature converge in perfect harmony, forever leaving a trail of magic and allure wherever you go."
    },
    {
        id: 2,

        title: "A journey of timeless enchantment",
        description: "Égérie is a fragrance that captures the essence of the mythical nymph Egeria, celebrating her beauty, wisdom, and the allure of nature's wonders. With its harmonious blend of fresh greens, delicate white florals, and warm woods, this perfume is a journey into a world of timeless enchantment, where the legendary nymph's spirit dances with yours, awakening your senses and igniting your imagination."
    },
];


const Note = ({ title, description }) => {
    return (
        <div>
            <div className="px-10 my-12">
                <h1 className="mb-3 text-center">{title}</h1>
                <p className="text-center">{description}</p>
            </div>
        </div>
    )
}

export default function NoteMobile() {
    const ref = useRef(null)
    const isInView = useInView(ref)
    return (
        <section className="lg:hidden block">
            <Note title={"An olfactory ode to the magical and mysterious"} description={"Égérie is an olfactory ode to the magical and mysterious, a fragrance that will evoke a sense of wonder and grace, captivating the hearts of all who experience its spellbinding allure. Let Égérie transport you to a realm where ancient legends and the essence of nature converge in perfect harmony, forever leaving a trail of magic and allure wherever you go."} />
            <div
                ref={ref} style={{
                    transform: isInView ? "none" : "translateX(-100px)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1s"
                }}
                className="relative min-h-[740px] max-h-[800px] md:min-h-[1200px] py-10">
                <div className="w-[320px] h-[400px] md:w-[500px] md:h-[650px] absolute top-0 px-10 z-10">
                    <img className="object-cover w-full h-full" src={prodotto2} alt="" />
                </div>
                <div
                    ref={ref} style={{
                        transform: isInView ? "none" : "translateX(-100px)",
                        opacity: isInView ? 1 : 0,
                        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1s"
                    }}
                    className="w-[320px] h-[400px] md:w-[500px] md:h-[650px] absolute bottom-0 right-0 px-10">
                    <img className="object-cover w-full h-full" src={modella2} alt="" />
                </div>
            </div>
            <Note title={"A journey of timeless enchantment"} description={"Égérie is a fragrance that captures the essence of the mythical nymph Egeria, celebrating her beauty, wisdom, and the allure of nature's wonders. With its harmonious blend of fresh greens, delicate white florals, and warm woods, this perfume is a journey into a world of timeless enchantment, where the legendary nymph's spirit dances with yours, awakening your senses and igniting your imagination."} />
        </section>
    )
}