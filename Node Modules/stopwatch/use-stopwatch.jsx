import { useCallback, useEffect, useState } from "react";

const useStopwatch = ({ time, onExpire, autoStart = true }) => {

    const [countdown, setCountdown] = useState(time)
    const [timer, setTimer] = useState(null)

    const clear = () => {
        if (timer !== null) {
            clearInterval(timer)
            setTimer(null)
        }
    }

    const start = useCallback(() => {
        if (timer === null) {
            setTimer(
                setInterval(() => {
                    setCountdown(countdown => countdown - 1)
                }, 1000)
            )
        }
    }, [])

    useEffect(() => {
        if (autoStart) { start() }
        return () => { 
            if (timer !== null) {
                clearInterval(timer)
            }
        }
    }, [])

    useEffect(() => {
        if (countdown <= 0) {
            onExpire()
        }
    }, [countdown])

    return {
        countdown,
        clear,
        start,
        stop,
        resume
    }
}

export default useStopwatch