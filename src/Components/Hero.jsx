import egerieLogo from "../../public/Assets/Logo-SVG/SVG/logo_egerie.svg";




export default function Hero({ children }) {
    return (
        <main className="h-[100dvh] lg:h-screen bg-hero bg-cover bg-opacity-90">
            <div className="flex justify-center flex-col items-center h-full relative lg:px-96">
                {children}
                <div>
                    
                </div>
                <div className="flex flex-col justify-center items-center mb-32 lg:mb-32 relative min-w-[280px] max-w-[320px] lg:min-w-[600px] lg:max-w-[650px] md:min-w-[500px] md:max-w-2xl">
                    <img className="lg:mt-32 lg:mb-20 md:mb-0" src={egerieLogo} alt="" />
                </div>
                <div className="absolute bottom-10">
                <p className="text-beige text-base px-10 lg:hidden md:hidden">Égérie is an olfactory ode to the magical and mysterious, a fragrance that will evoke a sense of wonder and grace, captivating the hearts of all who experience its spellbinding allure.</p>
                    <p className="hidden lg:block md:block text-beige md:text-sm  lg:px-96 md:px-24 md:text-center">
                        Égérie is an olfactory ode to the magical and mysterious, a fragrance that will evoke a sense of wonder and grace, captivating the hearts of all who experience its spellbinding allure.
                        Let Égérie transport you to a realm where ancient legends and the essence of nature converge in perfect harmony, forever leaving a trail of magic and allure wherever you go.
                    </p>
                </div>
                
            </div>
        </main>
    )
}