
import {useState,useEffect,useRef} from 'react'


function useConttext(startingTime){
    const [text, setText] = useState("")
    const [timeRemaining, setTimeRemaining] = useState(startingTime)
    const [isTimeRunning, setIsTimeRunning] = useState(false)
    const [wordCount, setWordCount] = useState(0)
    const inputRef = useRef(null)

    function handleChange(e) {
        const {value} = e.target
        setText(value)
    }

    function startClock(){
    setIsTimeRunning(true)
    setTimeRemaining(startingTime)
    setText('')
    setWordCount(0)
    inputRef.current.disabled = false
    inputRef.current.focus()

    }

    function endGame(){
    setIsTimeRunning(false)
    setWordCount(calculateWordCount(text))
    }

    function calculateWordCount(text) {
        const wordsArr = text.trim().split(" ")
        return wordsArr.filter(word => word !== "").length
    }

    useEffect(() => {
        if(isTimeRunning && timeRemaining > 0) {
            setTimeout(() => {
                setTimeRemaining(time => time - 1)
            }, 1000)
        } else if(timeRemaining === 0) {
            endGame()
        }
    }, [timeRemaining, isTimeRunning])


    return {text,inputRef,wordCount,isTimeRunning,timeRemaining, setIsTimeRunning,handleChange,startClock,endGame}

}


export default useConttext