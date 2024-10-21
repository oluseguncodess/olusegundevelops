import { useEffect, useState } from "react"

export default function Cursor() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const cursor = document.querySelector('#mouseCursor')

        const handleMouseMove = (e) => {
            cursor.style.transform = `translate(${e.pageX - 10}px, ${e.pageY - 10}px)`
            setIsVisible(true)      
        }

        document.addEventListener('mousemove', handleMouseMove);

        // clean-up memory
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        }
    }, [])
    
    return(
        <div className={`cursor absolute w-[15px] h-[15px] bg-red-800 rounded-md pointer-events-none transition-transform ease-linear duration-100 ${isVisible ? '' : 'hidden'}`} id="mouseCursor">
        </div>
    );
}