export default function Layout ({children}) {
    return (
        <section>
            <div className="flex flex-col gap-20 lg:flex-row h-full py-20 px-10 lg:px-36 lg:py-20 items-center w-full">
                {children}
            </div>
        </section>
    )
}