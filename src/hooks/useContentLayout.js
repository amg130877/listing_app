import { useEffect, useState } from "react";
import useLocalStorage from "./useLocalStorage";

export const useContentLayout = () => {
    const [loading, setLoading] = useState(true);
    const [collapsed, setCollapsed] = useState(false);
    const [user, setUser] = useState(null);
    const [roles, setRoles] = useState();
    const [authorized, setAuthorized] = useState(false);
    const [roleLocal, setRoleToLocal] = useLocalStorage('role', '');
    const [userLocal, setUserToLocal] = useLocalStorage('user', '');
    const [activeTab, setActiveTab] = useState('list');
    const [openFilter, setOpenFilter] = useState(false);


    useEffect(() => {
        setLoading(true)
        if (user) {
            registerUser();
        } else {
            fetchUser();
        }
    }, [user]);



    const fetchUser = async () => {
        try {
            if(roleLocal){
                const response = await fetch(`/api/${roleLocal}/me`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    }
                });
                const userData = await response.json();
                if (!userData.data.user) {
                    setAuthorized(false);
                    setLoading(false)
                    return;
                }
                setUser(userData.data);
                setAuthorized(true);
                registerUser();
                setLoading(false)
            }
            else {
                setLoading(false)
                new Error("No Role in the Local storage")
            }
        } catch (error) {
            console.log("Error fetching user:", error);
            setLoading(false)
            setAuthorized(false);
        }
        // finally{
        //     setLoading(false)
        // }
    }

    const registerUser = () => {
        if (user?.user) {
            const role = user.user.favshops ? "buyer" : "seller";
            setAuthorized(true)
            setRoles(role);
            setRoleToLocal(role);
            setUserToLocal(JSON.stringify(user));
            setLoading(false)
        }
    };

    const handleLogout = async() =>{
        localStorage.removeItem('user');
        localStorage.removeItem('role');
        setRoles(null)
        setTimeout(()=> setAuthorized(false), 1000)
    }

    return { loading, setLoading, collapsed, setCollapsed, user, setUser, roles, setRoles, authorized , handleLogout , fetchUser , activeTab , setActiveTab , openFilter , setOpenFilter }
}