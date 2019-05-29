import { useState, useEffect, useRef } from "react";

const useSizeElement = () => {
    const [width, setWidth] = useState(0);
    const elementRef = useRef(null);

    useEffect(() => {
        setWidth[elementRef.current.clientWidth]
    }, [elementRef.current])
    return {width, elementRef};
}

export default useSizeElement;