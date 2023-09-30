import { useState } from "react";
import {MdKeyboardArrowUp,MdKeyboardArrowDown} from "react-icons/md"

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
        <div className="my-10 flex items-center gap-10 justify-center text-sm md:text-[28px]">
            <span className="border border-black p-2">15 ml</span>
            <div className="flex items-center gap-4 ">
                <span className="">Q.TY</span>
                <div className="flex items-center border border-black w-[120px] h-[50px]">
                <span className="w-[100px] ">{quantity}</span>
                <div className="flex flex-col h-full w-full">
                    <button
                        className="border-l border-b border-black flex justify-center items-center h-full"
                        onClick={incrementQuantity}
                    >
                        <MdKeyboardArrowUp/>
                    </button>
                    <button
                        className="border-l border-b border-black flex justify-center items-center h-full"
                        onClick={decrementQuantity}
                    >
                        <MdKeyboardArrowDown/>
                    </button>
                </div>
                </div>
                

            </div>
        </div>
    );
}
