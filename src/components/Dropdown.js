import React, { useEffect, useState } from "react";

let Dropdown = ({ states }) => {

    let [state, setState] = useState('')
    let [city, setCity] = useState('')
    let [landmark, setLandmark] = useState('')

    function handleState(e) {
        let value = e.target.value
        setLandmark('')
        setState(value)
        setCity(states.filter(item => item.name == value))
    }

    function handleLandmark(e) {
        setLandmark(e.target.value)
    }


    return (
        <div>
            <select id='state' onChange={handleState}>
                {/* <option>-- Select State --</option> */}
                {states.map(value => (
                    <option>{value.name}</option>
                ))}
            </select>


            {city ?
                <select id='city' onChange={handleLandmark}>
                    {/* <option>-- Select State --</option> */}
                    {city[0].city.map(value => (
                        <option>{value.name}</option>
                    ))}
                </select>
                : <select id='city'>
                    {/* <option>-- Select State --</option> */}
                    {states.map(value => (
                        value.city.map(item => {
                            // console.log(value.city)
                            return <option>{item.name}</option>
                        })
                    ))}
                </select>}


            {landmark ?
                <select id='landmark'>
                    {city[0].city.map(value => {
                        console.log(value)
                        if(value.name == landmark){
                            return value.landmarks.map(item=>(
                                <option>{item.name}</option>
                            ))
                            // console.log(value)
                        }
                    })}
                </select>
                :
                <select id='city'>
                    {states.map(value => (
                        value.city.map(item => {
                            // console.log(item.landmarks)
                            return item.landmarks.map(item=>{
                                // {console.log(value.city)}
                                return <option>{item.name}</option>
                        })
                        })
                    ))}
                </select>}

        </div>
    )
}

export default Dropdown

