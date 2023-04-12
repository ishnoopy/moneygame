import { useContext } from "react"
import { chanceContext } from "../App"

function Choice({prizes, moneyHandler}){
    const chance = useContext(chanceContext)
    return(
        <div className="choiceContainer">
            {prizes.map((prize, index)=>{
                return(
                <div key={index}>
                    <h3>{prize.id} Risk</h3>
                    <button onClick={()=>moneyHandler(prize.range.min, prize.range.max, prize.id)} disabled={chance<=0}>Bet 💰</button>
                    <h4>{prize.range.min} to {prize.range.max}</h4>
                </div>
                )
            })}
            
            </div>
    )
}

export {Choice}