import { useState } from "react"
import Counter from "./Counter"

export default function Hero(){
    const [value,setValue]=useState("lclkslsn")

   

    return(
        <div>
        <Counter/>
        <Counter/>
        <Counter/>
        <input 
        type="text" 
        value={value} 
        onChange={event=>setValue(event.target.value)}
        />

        </div>
    )
}