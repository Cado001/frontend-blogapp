import { useEffect } from "react"

export default function CardContainer(){

    // 1. As soon as components loads/mounting -fetch data
   useEffect(() => {
    fetch('http://localhost:8080')
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.error(err))
   }, [])
    // 2. put data array in state variable
    // 3. Map data array from state variable
    // 4. Then return jsx from the Map
    
    return(
        <>
        <h2>This is Card Container</h2>
        </>
    )
}