import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToView(){
    const location = useLocation();

    useEffect(() =>{
        window.scrollTo(0,0);
    }, [location])
}
export default ScrollToView;