import threeLines from '../assets/undraw_three-lines.svg'
import { useContext } from "react"
import { chanceContext } from "../App"

function Balance({money}){
    const chance = useContext(chanceContext)
    
    return(
        <div className="balance">
            <img src={threeLines} alt="three lines" id='threeLines'/>
            <h1>Your Money: ${money} </h1>
            <h3>Chance/s left: {chance}</h3>
        </div>
    )
}

export {Balance}