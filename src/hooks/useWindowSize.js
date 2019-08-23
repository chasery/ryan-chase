import { useState, useEffect } from "react";

export default function useWindowSize() {
    const [windowSize, setWindowSize] = useState(0);

    useEffect(() => {
        const isClient = typeof window === "object";

        if (!isClient) {
            return false;
        }

        function getSize() {
            return {
                width: isClient
                    ? document.documentElement.clientWidth
                    : undefined,
                height: isClient
                    ? document.documentElement.clientHeight
                    : undefined
            };
        }

        function handleResize() {
            setWindowSize(getSize());
        }

        window.addEventListener("load", handleResize);
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("load", handleResize);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return windowSize;
}
