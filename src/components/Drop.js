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
        let cityObj = states.find(value => value.name == state)

        
    } 
        
    

} 

export default Dropdown