import {useState} from "react";

export const useHandleNodeExpand = () => {
    const [isExpanded, setIsExpanded] = useState(false)
    const toggleExpand = () => setIsExpanded(prev => !prev);
    const close = () => setIsExpanded(false)

    return [isExpanded, toggleExpand, close]
}

export const useContextHandlers = () => {
    const [closeCallbacks, setCloseCallbacks] = useState([])
    const addCallback = (callback) => setCloseCallbacks((prev) => [...prev, callback])

    const resetCallbacks = () => setCloseCallbacks([])

    return [closeCallbacks, addCallback, resetCallbacks]
}