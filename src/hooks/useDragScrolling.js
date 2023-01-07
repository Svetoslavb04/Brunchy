import { useCallback, useEffect, useRef } from "react"

export const directions = {
    horizontal: 'horizontal',
    vertical: 'vertical'
}

const useHorizontalDrag = (element, direction, scrollSpeed = 1.2) => {

    let isDown = useRef();
    let start = useRef();;
    let scroll = useRef();;

    const handleMouseDown = useCallback((e) => {

        isDown.current = true;

        switch (direction) {
            case directions.horizontal:
                start.current = e.pageX - element.current.offsetLeft;
                scroll.current = element.current.scrollLeft;
                break;
            case directions.vertical:
                start.current = e.pageY - element.current.offsetTop;
                scroll.current = element.current.scrollTop;
                break;
            default:
                break;
        }

    }, [element, direction])

    const handleMouseLeave = useCallback(() => { isDown.current = false }, [])
    const handleMouseUp = useCallback(() => { isDown.current = false }, [])

    const handleMouseMove = useCallback((e) => {
        if (!isDown.current) return;

        e.preventDefault();

        let walk;

        switch (direction) {
            case directions.horizontal:
                const x = e.pageX - element.current.offsetLeft;
                walk = (x - start.current) * scrollSpeed;

                element.current.scrollLeft = scroll.current - walk;
                break;
            case directions.vertical:
                const y = e.pageY - element.current.offsetTop;
                walk = (y - start.current) * scrollSpeed;

                element.current.scrollTop = scroll.current - walk;
                break;
            default:
                break;
        }

    }, [element, direction, scrollSpeed])

    useEffect(() => {

        element.current.addEventListener('mousedown', handleMouseDown)
        element.current.addEventListener('mouseup', handleMouseUp)
        element.current.addEventListener('mouseleave', handleMouseLeave)
        element.current.addEventListener('mousemove', handleMouseMove)

    }, [element, handleMouseDown, handleMouseUp, handleMouseLeave, handleMouseMove])

}

export default useHorizontalDrag