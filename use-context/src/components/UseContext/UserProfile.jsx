import { useContext } from "react";
import { ClassroomContext } from "../../contexts/ClassroomContext";


const UserProfile = () => {

    const { userName, theme } = useContext(ClassroomContext);
    return (
        <div>
            <h2>User Profile</h2>
                <div>
                    <p>Username: {userName} {theme}</p>
                </div>
        </div>
    );
};

export default UserProfile;