import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {menagerPlus} from "../roles";

export default function WorkTime() {

    const navigate = useNavigate();

    useEffect(() => {
        const storedRole = localStorage.getItem("userRole");
        if (!menagerPlus.includes(storedRole)) {
            navigate(`/`);
        }
    }, []);
    return(
        <div></div>
    )
}