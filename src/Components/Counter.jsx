import { useState } from "react";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md"

export default function Counter() {

    const [quantity, setQuantity] = useState(0);

    const incrementQuantity = () => {
        setQuantity(quantity + 1);
    };

    const decrementQuantity = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <section className="relative">
            <div className="my-10 flex items-center justify-evenly md:justify-between  text-sm md:text-lg">
                <div className="border border-black p-3 flex gap-1 text-center mx-10"><span>15</span><span>ml</span></div>
                <div className="flex items-center w-full md:justify-evenly gap-10 lg:h-[50px]">

                    <div className="flex items-center lg:w-[100px] lg:h-[50px] w-20 h-10">
                        <span className="mr-4">Q.TY</span>
                        <span className="w-[100px] p-4 border-y border-l border-black flex items-center justify-center h-full">{quantity}</span>
                        <div className="flex flex-col h-full w-full border border-black">
                            <button
                                className="flex justify-center items-center border-b border-black h-full px-4"
                                onClick={incrementQuantity}
                            >
                                <MdKeyboardArrowUp />
                            </button>
                            <button
                                className="border-l flex justify-center items-center h-full"
                                onClick={decrementQuantity}
                            >
                                <MdKeyboardArrowDown />
                            </button>
                        </div>
                    </div>
                    <button className="bg-lavanda md:block hidden uppercase p-3 text-beige absolute md:relative">add To cart</button>
                </div>
            </div>
            <div className="md:hidden absolute inset-x-0 ">
                <button className="bg-lavanda uppercase p-3 mx-10 text-beige md:relative">add To cart</button>
            </div>
        </section>


    );
}
