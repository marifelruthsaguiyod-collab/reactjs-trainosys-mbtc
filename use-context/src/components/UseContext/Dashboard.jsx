import { useContext } from "react";
import { ClassroomContext } from "../ClassroomContext";

const Dashboard = () => {
    const {userName, theme } = useContext(ClassroomContext);

    return (
        <div>
            <h2>Dashboard</h2>
            <p>Username: {user.userName} {user.theme} </p>
        </div>
    );
};

export default Dashboard;