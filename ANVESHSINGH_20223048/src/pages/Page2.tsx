import { useParams } from "react-router-dom"
import { Card } from "../component/Card";
import { question } from "../questions/Question";
export const Page2=()=>{

    let {topic }=useParams();
    const dbquestions=question(topic);
    dbquestions.reverse();
    // console.log(dbquestions);
    return (
        <div>
            <Card db={dbquestions} topic={topic}/>
        </div>
    ) 
}