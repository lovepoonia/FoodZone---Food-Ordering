import { createContext } from "react";

const UserContext = createContext({
    loggedInUser:"byDefault",
    isLoggedIn:false,
});

export default UserContext;