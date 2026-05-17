import { useState } from "react"

const ColorPickerComponent = () => {
    
    const [selectedColor, setSelectedColor] =  useState ("red");

    const handleColorChange = (event) => {
        setSelectedColor(event.target.value);
    };

    return (
        <div style={{ padding: "100px", fontFamily: "Calibri", fontSize: "30px"}}>

            <select value={selectedColor} onChange={handleColorChange}>
                <option value="red"> R E D </option>
                <option value="green"> G R E E N </option>
                <option value="blue"> B L U E </option>
                <option value="yellow"> Y E L L O W </option>
                <option value="orange"> O R A N G E </option>
                <option value="purple"> P U R P L E </option>
                <option value="pink"> P I N K </option>
            </select>

            <div
                style={{
                    width: "250px",
                    height: "250px",
                    backgroundColor: selectedColor,
                    border: "3px solid black",
                    display: "flex",
                    borderRadius: "1px",
                    justifyContent: 'center',
                }}
            ></div>
        </div>
    );
};

export default ColorPickerComponent;