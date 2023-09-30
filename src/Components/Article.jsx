export default function Article ({button, title, text}) {
    return (
        <article className="text-center sm:mt-40 lg:my-12 md:my-4">
                        <h1 className="px-24 mb-16 lg:my-12 md:px-36 md:mb-8">{title}</h1>
                        <p className="px-12 lg:px-56 text-sm lg:text-2xl md:px-32 text-left lg:text-center">{text}</p>
                        {button}
                    </article>
    )
}