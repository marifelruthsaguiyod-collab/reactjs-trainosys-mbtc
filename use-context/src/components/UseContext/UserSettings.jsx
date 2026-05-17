import { useContext } from "react";
import { ClassroomContext } from "../../contexts/ClassroomContext";

const UserSettings = () => {

    const { userName, theme } = useContext(ClassroomContext);
    return (
        <div>
            <h2>User Settings</h2>
            <p>User Name: {username} {theme}</p>
            <button onClick={() => setUserName("johndoe")}>Change username</button>
        </div>
    );
};

export default UserSettings;