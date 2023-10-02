export default function Footer() {
    return (
        <footer className="bg-lavanda text-lg text-beige py-10 px-20 lg:px-32 flex justify-between items-center gap-30 flex-col lg:flex-row">
            <ul className="flex flex-col lg:flex-row text-center gap-4 lg:gap-10">
                <p className="text-xl lg:hidden mb-2">Égérie Eau de Parfum</p>
                <li>Home</li>
                <li>Shop</li>
                <li>Collection</li>
                <li>About</li>
            </ul>
            <div className="mt-10 lg:mt-0 px-18 ">
            <p>&copy; 2023 Allison Salvador &amp; Evelina Maoctoe. All rights reserved.</p>
            </div>
        </footer>
    )
}