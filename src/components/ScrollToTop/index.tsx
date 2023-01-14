import React, {useEffect} from 'react';
import { useLocation } from "react-router-dom";

const ScrollToTop: React.FC = () => {
    const routePath = useLocation();
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: "smooth"})
    },[routePath])
    return (
        <></>
    );
}
export default ScrollToTop;