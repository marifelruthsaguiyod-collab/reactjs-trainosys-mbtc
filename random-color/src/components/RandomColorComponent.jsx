import { useState, useEffect } from "react";

const RandomColorComponent = () => {
    const [color, setColor] = useState ("red");

    useEffect (() => {
        const colors = [ "red", "blue", "green", "orange", "purple", "yellow", "pink"];

        const interval = setInterval(() => {
            const randomIndex = Math.floor(Math.random() * colors.length);
            setColor(colors[randomIndex]);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div 
            style={{
                height: "200px",
                width: "200px",
                backggroundColor: color,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontWeight: "bold",
                transition: "0.3s",
            }}
        >
            {color}
        </div>
    );
};

export default RandomColorComponent;