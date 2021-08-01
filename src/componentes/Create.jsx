import React, {useState, createContext} from 'react';
import {Text, View} from 'react-native';
import Formulario from './Formulario';


export const MinhaConta = createContext();

export default function Create(){

    const[conta, setConta] = useState({
        valor: 0,
        

    });

return(
    <View>
        <MinhaConta.Provider value={{conta, setConta}}>
            <Formulario/>
        </MinhaConta.Provider>
    </View>
)    
}