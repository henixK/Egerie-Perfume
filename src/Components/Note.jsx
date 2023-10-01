import prodotto2 from "../../public/Assets/Immagini/foto3-prodotto.jpg";
import modella2 from "../../public/Assets/Immagini/foto4-modella.jpg";

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

const data1 = [
    {
        id: 1,
        description:
            "Égérie è una fragranza che cattura l'essenza della mitica ninfa Egeria, celebrando la sua bellezza, saggezza e il fascino delle meraviglie della natura. Con il suo armonioso mix di verdi freschi, delicati fiori bianchi e calde essenze legnose, questo profumo è un viaggio in un mondo di incanto senza tempo, dove lo spirito della leggendaria ninfa danza con il tuo, risvegliando i tuoi sensi e accendendo la tua immaginazione.",
    },
    {
        id: 2,
        description:
            "Égérie è un inno olfattivo alla magia e al mistero, una fragranza in grado di evocare un senso di meraviglia e grazia, catturando il cuore di tutti coloro che ne sperimentano l'incantevole attrazione. Lasciati trasportare da Égérie in un regno dove leggende antiche e l'essenza della natura si fondono in perfetta armonia, imprimendo una scia di magia e fascino ovunque tu vada.",
    },
];


const Square = ({ title, description }) => {
    return (
        <div className="w-full lg:w-[50%] h-[500px] bg-lavanda text-beige text-center px-10 py-12">
            <h1>{title}</h1>
            <p className="mt-10">{description}</p>
        </div>
    );
};

export function Notes() {
    return (
        <div className="flex flex-col lg:flex-row gap-10 bg-white my-10 lg:px-20 text-white">
            {data.map((data) => (
                <Square
                    key={data.id}
                    title={data.title}
                    description={data.description}
                />
            ))}
        </div>
    );
}

const Pictures = ({ description, reverse }) => {
    return (
        <div className="w-full text-center">
            {reverse ? (
                <>
                    <div className="w-full">
                        <p className="text-sm">{description}</p>
                        <div className="">
                            <img className="object-contain w-full lg:h-[600px]" src={prodotto2} alt="" />
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <div>
                        <div className="">
                            <img className="object-contain w-full lg:h-[600px]" src={modella2} alt="" />
                        </div>

                        <p className="mt-10">{description}</p>
                    </div>

                </>
            )}
        </div>
    );
};
export function Picture() {
    return (
        <div className="flex flex-col lg:flex-row gap-10 bg-white lg:my-10 lg:px-20">
            {data1.map((data, index) => (
                <Pictures
                    key={data.id}
                    description={data.description}
                    reverse={index % 2 === 0}
                />
            ))}
        </div>
    );
}
