import egerieLogo from "../../public/Assets/Logo-SVG/SVG/logo_egerie.svg";




export default function Hero() {
    return (
        <main className="h-screen bg-hero bg-cover bg-opacity-50">
            <div className="flex justify-center flex-col items-center h-full relative  lg:px-96">
                <img className="w-[300px] lg:w-[500px] mb-20 lg:my-28" src={egerieLogo} alt="" />
                <p className="text-beige  absolute bottom-10 px-10 lg:hidden">Égérie is an olfactory ode to the magi- cal and mysterious, a fragrance that will evoke a sense of wonder and grace, captivating the hearts of all who expe- rience its spellbinding allure.</p>
                <p className="hidden lg:block text-beige ">
                    Égérie is an olfactory ode to the magical and mysterious, a fragrance that will evoke a sense of wonder and grace, captivating the hearts of all who experience its spellbinding allure.
                    Let Égérie transport you to a realm where ancient legends and the es- sence of nature converge in perfect harmony, forever leaving a trail of magic and allure wherever you go.
                </p>
            </div>
        </main>
    )
}