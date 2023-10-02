import React, { useState } from "react";
import { useSpring, animated } from "react-spring";


export default function Card({ title, description }) {
    const [show, setShown] = useState(false);

    const props3 = useSpring({
        transform: show ? "scale(1.03)" : "scale(1)",
        boxShadow: show
            ? "0 20px 25px rgb(0 0 0 / 25%)"
            : "0 2px 10px rgb(0 0 0 / 8%)"
    });
    return (
        <animated.div
            className="w-full min-h-[100px] max-h-[600px] mb-10"
            style={props3}
            onMouseEnter={() => setShown(true)}
            onMouseLeave={() => setShown(false)}
        >
            <div className="w-full h-full bg-lavanda text-beige text-center p-7">
                <h1>{title}</h1>
                <p className="mt-10">{description}</p>
            </div>
        </animated.div>
    );
}
