export default function Layout ({children}) {
    return (
        <section>
            <div className="flex flex-col gap-5 lg:flex-row h-full lg:h-screen py-18 px-10 lg:px-36 lg:py-20  w-full">
                {children}
            </div>
        </section>
    )
}