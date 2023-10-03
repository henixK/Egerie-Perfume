import prodotto2 from "../../public/Assets/Immagini/foto3-prodotto.jpg";
import modella2 from "../../public/Assets/Immagini/foto4-modella.jpg";



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
                <h1 className="mb-5">{title}</h1>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default function NoteMobile() {
    return (
        <section className="lg:hidden block">
            <Note title={"An olfactory ode to the magical and mysterious"} description={"Égérie is an olfactory ode to the magical and mysterious, a fragrance that will evoke a sense of wonder and grace, captivating the hearts of all who experience its spellbinding allure. Let Égérie transport you to a realm where ancient legends and the essence of nature converge in perfect harmony, forever leaving a trail of magic and allure wherever you go."} />
            <div className="relative min-h-[740px] max-h-[800px] py-10">
                <div className="w-[320px] h-[400px] absolute top-0 px-10 z-10">
                    <img className="object-cover w-full h-full" src={prodotto2} alt="" />
                </div>
                <div className="w-[320px] h-[400px] absolute bottom-0 right-0 px-10">
                    <img className="object-cover w-full h-full" src={modella2} alt="" />
                </div>
            </div>
            <Note title={"A journey of timeless enchantment"} description={"Égérie is a fragrance that captures the essence of the mythical nymph Egeria, celebrating her beauty, wisdom, and the allure of nature's wonders. With its harmonious blend of fresh greens, delicate white florals, and warm woods, this perfume is a journey into a world of timeless enchantment, where the legendary nymph's spirit dances with yours, awakening your senses and igniting your imagination."} />
        </section>
    )
}