import { useContext } from "react";
import CLassroomContext from "./ClassroomContext";

const ChildComponent = () => {
    const childData = useContext(ClassroomContext);

    return (
        <div
            style={{
                padding: "20px",
                marginTop: "20px",
                borderRadius: "10px",
                backgroundColor: childData.theme,
                color: "white",
                width: "300px",
                textAlign: "center",
            }}
        >
            <h2>Child Component</h2>
            <br></br>
            <p><strong>Username:</strong> {childData.username}</p>
            <p><strong>Theme:</strong> {childData.theme}</p>
        </div>
    );
};

export default ChildComponent