import { ClassroomProvider } from "../UseContext/ClassroomContextComponent";

import Dashboard from "./Dashboard"
import UserProfile from "./UserProfile"
import UserSettings from "./UserSettings"

const ClassroomContextComponent = () => {
    return (
        <>
        <div className="usecontext-component">
            <h2>ClassroomContextComponent</h2>
            <ClassroomProvider>
                <Dashboard />
                <UserProfile />
                <UserSettings />
            </ClassroomProvider>
        </div>
        </>
    )
}

export default ClassroomContextComponent