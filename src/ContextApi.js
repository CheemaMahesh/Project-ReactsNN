import { createContext,useContext ,useState} from "react";


const ContextNeha=createContext();

//we are using context and returning it
function useValue(){

    const value=useContext(ContextNeha);

    return value;
}


//this is a function component
export default  function ContextApi({children}){
    
        const [n,setN]=useState("Mahesh mahesh 2.0");
        
        const [chickenCurry,setChickenCurry]=useState("Chicken curry");


    return(
        <ContextNeha.Provider value={{n,chickenCurry}}>

                {children}

        </ContextNeha.Provider>
    )
}


export {useValue};






