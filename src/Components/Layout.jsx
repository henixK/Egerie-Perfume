export default function Layout ({children}) {
    return (
        <section>
            <div className="flex flex-col gap-10 lg:flex-row h-full lg:h-screen py-18 px-10 lg:px-32 justify-center items-center  w-full">
                {children}
            </div>
        </section>
    )
}