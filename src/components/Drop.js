import { values } from "cypress/types/lodash";
import React from "react";

let Dropdown = ({states}) => {

    function states(){
        states.map(value => value.name)
    }

    function city(state){
        let cityObj = states.find(value => value.name == state)
        return cityObj.city.map(value => value.name)
    }

    function city(state,city){
        let stateObj = states.find(value => value.name == state)
        let cityObj = stateObj.city.find(value => value.name == city)
        return cityObj.landmarks.map(value => value.name)
    } 
        
    

} 

export default Dropdown