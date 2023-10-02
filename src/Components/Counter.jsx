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
        <div className="my-10 flex items-center gap-10 justify-center text-sm md:text-lg">
            <span className="border border-black lg:h-[50px] h-10 flex justify-center items-center p-4">15 ml</span>
            <div className="flex items-center gap-4 ">
                <span className="">Q.TY</span>
                <div className="flex items-center lg:w-[120px] lg:h-[50px] w-20 h-10 px-2">
                    <span className="w-[100px] p-6 border-y border-l border-black flex items-center justify-center h-full">{quantity}</span>
                    <div className="flex flex-col h-full w-full border border-black">
                        <button
                            className="flex justify-center items-center border-b border-black h-full px-8"
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


            </div>
        </div>
    );
}
