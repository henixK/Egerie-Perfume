export default function Article ({button, title, text}) {
    return (
        <article className="text-center sm:mt-40 lg:mt-12 md:my-4 lg:w-full h-full">
                        <h1 className=" mb-8 lg:px-20 md:mb-8">{title}</h1>
                        <p className=" lg:px-0  md:px-32 text-left lg:text-center">{text}</p>
                        {button}
                    </article>
    )
}