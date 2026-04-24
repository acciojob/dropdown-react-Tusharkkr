// import React, { useEffect, useState } from "react";

// let Drop = ({ states }) => {

//     let [state, setState] = useState([])
//     let [city, setCity] = useState([])
//     let [landmark, setLandmark] = useState([])


//     function statefun() {
//         return states.map(value => value.name)
//     }

//     function cityfun(state) {
//         let cityObj = states.find(value => value.name == state)
//         return cityObj.city.map(value => value.name)
//     }

//     function landmarkfun(state, city) {
//         let stateObj = states.find(value => value.name == state)
//         let cityObj = stateObj.city.find(value => value.name == city)
//         return cityObj.landmarks.map(value => value.name)
//     }

    

//     return (
//         <div>
//                 <select onChange={(e)=>setChange(e.target.value)}>
//                     {state.map((value, index) => {
//                         { console.log(value) }
//                         return <option>{value}</option>
//                     })}
//                 </select>
            
//                 <select>
//                     {city.map((value, index) => {
//                         { console.log(value) }
//                         return <option>{value}</option>
//                     })}
//                 </select>
//         </div>
//     )
// }

// export default Drop