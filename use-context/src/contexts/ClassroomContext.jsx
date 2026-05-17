import { createContext } from "react";

const ClassroomContext = createContext ();

// export default ClassroomContext;

const ClassroomProvider = ({children}) => {
    const user = {
        userName: "johndoe",
        theme: "red"
    }

    return (
        <ClassroomContext.Provider value={user}>
            {children}
        </ClassroomContext.Provider>
    )

}

export { ClassroomContext, ClassroomProvider };
