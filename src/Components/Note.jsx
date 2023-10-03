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


const Pictures = ({ title, description, reverse }) => {
    return (
        <div className="w-full px-10 my-20">
            {reverse ? (
                <>
                    <div>
                        <div className="w-full lg:h-[800px]">
                            <img className="object-cover w-full h-full" src={prodotto2} alt="" />
                        </div>
                        <div className="mt-12">
                            <h1 className="mb-10 text-center">{title}</h1>
                            <p className="text-justify">{description}</p>
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <div className="w-full">
                        <div className="mb-12 ">
                            <h1 className="mb-10 text-center">{title}</h1>
                            <p className="text-justify">{description}</p>
                        </div>
                        <div className="w-full lg:h-[800px]">
                            <img className="object-cover w-full h-full" src={modella2} alt="" />
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};
export function Picture() {
    return (
        <div className="flex flex-col lg:flex-row gap-10 bg-white md:my-10 md:px-20">
            {data1.map((data, index) => (
                <Pictures
                    key={data.id}
                    title={data.title}
                    description={data.description}
                    reverse={index % 2 === 0}
                />
            ))}
        </div>
    );
}
