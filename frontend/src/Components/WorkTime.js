import {useEffect} from "react";
import {useNavigate} from "react-router-dom";

export default function WorkTime() {

    const navigate = useNavigate();

    useEffect(() => {
        const storedRole = localStorage.getItem("userRole");
        if (storedRole !== "director") {
            navigate(`/`);
        }
    }, []);
    return(
        <div></div>
    )
}