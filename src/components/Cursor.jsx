import { useEffect, useRef } from "react";

export default function Cursor() {
    const cursorRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (cursorRef.current) {
                cursorRef.current.style.transform = `translate(${e.clientX - 10}px, ${e.clientY - 10}px)`;
                cursorRef.current.style.opacity = "1";
            }
        };

        const handleMouseLeave = () => {
            if (cursorRef.current) {
                cursorRef.current.style.opacity = "0";
            }
        };

        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);

    return (
        <div
            ref={cursorRef}
            className="cursor fixed w-[15px] h-[15px] bg-red-800 rounded-md pointer-events-none transition-transform ease-linear duration-100 opacity-0"
        />
    );
}
