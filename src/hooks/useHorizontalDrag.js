import { useCallback, useEffect, useRef } from "react"

const useHorizontalDrag = (element, scrollSpeed = 1.2) => {

    let isDown = useRef();
    let startX = useRef();;
    let scrollLeft = useRef();;

    const handleMouseDown = useCallback((e) => {
        isDown.current = true;
        startX.current = e.pageX - element.current.offsetLeft;
        scrollLeft.current = element.current.scrollLeft;
    }, [element])

    const handleMouseLeave = useCallback(() => { isDown.current = false }, [])
    const handleMouseUp = useCallback(() => { isDown.current = false }, [])

    const handleMouseMove = useCallback((e) => {
        if (!isDown.current) return;

        e.preventDefault();

        const x = e.pageX - element.current.offsetLeft;
        const walk = (x - startX.current) * scrollSpeed;

        element.current.scrollLeft = scrollLeft.current - walk;
    }, [element, scrollSpeed])

    useEffect(() => {

        element.current.addEventListener('mousedown', handleMouseDown)
        element.current.addEventListener('mouseup', handleMouseUp)
        element.current.addEventListener('mouseleave', handleMouseLeave)
        element.current.addEventListener('mousemove', handleMouseMove)

    }, [element, handleMouseDown, handleMouseUp, handleMouseLeave, handleMouseMove])

}

export default useHorizontalDrag