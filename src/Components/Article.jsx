


export default function Article({ button, title, text, style }) {



    return (
        <article style={style}
            className="text-center lg:w-1/2 h-full flex flex-col justify-center">
            <h1 className="mb-8 lg:px-20 md:mb-8">{title}</h1>
            <p className="lg:px-0 md:px-8 text-justify lg:text-center">{text}</p>
            {button}
        </article>
    )
}