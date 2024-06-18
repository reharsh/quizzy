//@ts-nocheck
import {useNavigate} from "react-router-dom"
export const Home = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h1>Select a topic</h1>
        <button onClick={()=>{
            navigate("/quiz/science")
            localStorage.setItem("topic","science")
        }}
        >Science</button>
        <button onClick={()=>{
            navigate("/quiz/popculture")
            localStorage.setItem("topic","popculture")
        }}
        >Pop Culture</button>
        <button onClick={()=>{
            navigate("/quiz/technology")
            localStorage.setItem("topic","technology")
        }}
        >Technology</button>
        <h3>Swipe right for true, left for false</h3>
        </div>
    )
}