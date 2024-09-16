import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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
    const navigate = useNavigate();


    useEffect(() => {
        setLoading(true);
        if (user) {
            // console.log('registering existing')
            registerUser();
        } else {
            // console.log('registering new from local')
            fetchUser();
        }
    }, [user]);


    const fetchUser = async () => {
        setLoading(true);
        if (userLocal.token) {
            setUser(userLocal);
        }
        else {
            // console.log('No user in the local storage so setting both to false')
            setLoading(false);
            setAuthorized(false);
        }

    }

    const setTokenToCookie = (user) => {
        if (user && user.token) {
            const expirationDate = new Date();
            expirationDate.setDate(expirationDate.getDate() + 1);
            document.cookie = `_token=${user.token}; expires=${expirationDate.toUTCString()}; path=/app; Secure; SameSite=Strict`;
        }
    };

    const registerUser = () => {
        setLoading(true);
        try {
            if (user) {
                // console.log('inside the register functin', loading, authorized, user.roleNames)
                setAuthorized(true)
                setTokenToCookie(user);
                setRoles(user.roleNames);
                setUserToLocal(JSON.stringify(user));
                setLoading(false)
                // console.log('inside the register functin', loading, authorized, user.roleNames)
            }
            else {
                setLoading(false);
                setAuthorized(false);
                alert('No User')
            }
        }
        catch (e) {
            setLoading(false);
            setAuthorized(false);
            throw new Error(e)
        }

    };
    // console.log(user)
    // console.log('outside', loading, authorized, user)
    const handleLogout = async () => {
        localStorage.removeItem('user');
        setUser(null)
        setRoles(null)
        setTimeout(() => setAuthorized(false), 1000);
        document.cookie = "_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        navigate('/login');
    }

    return { loading, setLoading, collapsed, setCollapsed, user, setUser, roles, setRoles, authorized, handleLogout, fetchUser, activeTab, setActiveTab, openFilter, setOpenFilter }
}