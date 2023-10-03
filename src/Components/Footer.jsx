export default function Footer() {
    return (
        <footer className="bg-lavanda text-base text-beige py-4 px-20 lg:px-32 flex justify-between items-center gap-30 flex-col lg:flex-row">
            <ul className="flex flex-col lg:flex-row text-center gap-4 lg:gap-10">
                <p className="text-xl lg:hidden mb-2">Égérie Eau de Parfum</p>
                <li>Home</li>
                <li>Shop</li>
                <li>Collection</li>
                <li>About</li>
            </ul>
            <div className="mt-10 lg:mt-0 px-18 ">
                <p className="text-base">
                    &copy; 2023 Project by Allison Salvador &amp; Evelina Macovei, Developed by Kevin Bautista. All Rights Reserved.
                </p>
            </div>
        </footer>
    )
}