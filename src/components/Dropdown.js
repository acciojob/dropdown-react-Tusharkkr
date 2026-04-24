import React, { useEffect, useState } from "react";

let Dropdown = ({ states }) => {

    let [state, setState] = useState('')
    let [city, setCity] = useState('')
    let [landmark, setLandmark] = useState('')
    let [dis, setDis] = useState('')

    function handleState(e) {
        let value = e.target.value
        // console.log(e)
        setLandmark('')
        setState(value)
        let filter = states.filter(item => item.name == value)
        setCity(filter)
        setLandmark(filter[0].city[0].name)
        // console.log(filter[0].city[0].name)
    }

    function handleLandmark(e) {
        setLandmark(e.target.value)
        discription()
    }

    function discription(){
        let ans = ''
        for(let t of states){
            
            if(t.name == state){
                // console.log('t',t.description)
                // console.log('t.name',t.name)
                ans = t.description
            }
        }
        setDis(ans)
    }


    return (
        <div>
            <select id='state' onChange={handleState}>
                {/* <option>-- Select State --</option> */}
                {states.map(value => (
                    <option key={value.name} id="state-title">{value.name}</option>
                ))}
            </select>


            {city ?
                <select id='city' onChange={handleLandmark}>
                    {/* <option>-- Select State --</option> */}
                    {city[0].city.map(value => (
                        <option key={value.name} id="state-title">{value.name}</option>
                    ))}
                </select>
                : <select id='city'>
                    {/* <option>-- Select State --</option> */}
                    {states.map(value => (
                        value.city.map(item => {
                            // console.log(value.city)
                            return <option key={item.name} id="state-title">{item.name}</option>
                        })
                    ))}
                </select>}


            {landmark ?
                <select id='landmark'>
                    {city[0].city.map(value => {
                        // console.log(value)
                        if(value.name == landmark){
                            return value.landmarks.map(item=>(
                                <option key={item.name} id="state-title">{item.name}</option>
                            ))
                        }
                    })}
                </select>
                :
                <select id='landmark'>
                    {states.map(value => (
                        value.city.map(item => {
                            // console.log(item.landmarks)
                            return item.landmarks.map(item=>{
                                // {console.log(value.city)}
                                return <option key={item.name} id="state-title">{item.name}</option>
                        })
                        })
                    ))}
                </select>}
                <div id="state-description">
                    {dis && <p>{dis}</p>}
                </div>
        </div>
    )
}

export default Dropdown

