export default function Layout ({children, title, text, button}) {
    return (
        <section>
            <div className="flex flex-col lg:flex-row lg:h-screen">
                {children}
            </div>
        </section>
    )
}