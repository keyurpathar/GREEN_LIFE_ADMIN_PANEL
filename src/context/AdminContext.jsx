import { createContext, useState } from "react";

export const AdminContext = createContext()

const AdminContextProvider = (props) => {

    const [admintoken , setadmintoken] = useState(localStorage.getItem('admintoken') ? localStorage.getItem('admintoken'):'')

    const backendurl = import.meta.env.VITE_BACKEND_URL
 
    const value = {
            admintoken,setadmintoken,backendurl
    }

    return (
        <AdminContext.Provider value={value}>
            {props.children}
        </AdminContext.Provider>
    )

}

export default AdminContextProvider