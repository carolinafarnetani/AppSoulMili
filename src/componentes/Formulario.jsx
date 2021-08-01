import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, Dimensions, Image, ScrollView, TextInput, TouchableOpacity} from 'react-native';
// import {MinhaConta} from './Create';


export default function Formulario({navigation}) {
  
  const [conta, setConta] = useState({
    
    deposito: 0,
    final: 0,
  })

  const Total = () => {
    setConta({
      ...conta, final: (conta.deposito * 0.7 + conta.deposito).toFixed(2)
    })
  }

  console.log(conta);

    return (



<ScrollView>
  <View style={styles.container}>
    <Text style={styles.h1}>Formulário de depósito</Text>
    <Image style={{width:Dimensions.get('screen').width,resizeMode:'contain', }} source={ require('../../assets/formulario.jpg')}/>
    

    

<View style={styles.caixa}>
    <Text style={styles.h3}>Digite um valor:</Text>

    <TextInput style={styles.borda} keyboardType={"numeric"} 
    onChangeText={(depositex) => setConta({...conta,deposito: parseInt(depositex)})}/>

    
</View>
<View style={styles.caixa}>
    <Text style={styles.h3}>Valor final:</Text>
    <Text style={styles.borda2}>{conta.final}</Text>
</View>
      <TouchableOpacity style={styles.btn}onPress={Total}>
        <Text style={styles.h3}>Clique aqui</Text>
      </TouchableOpacity>


    <Text style={styles.h2}>Você é milionária!</Text>
    
<Image style={{width:Dimensions.get('screen').width,resizeMode:'contain', }} source={ require('../../assets/mili.jpg')}/>


<Button color={'#020065'}
    title="Retornar a Home"
    onPress={() => navigation.navigate('Home')}/>

  </View>
</ScrollView> 
  
  
  );
  }

  const styles = StyleSheet.create({
    h1: {
        fontSize: 30,
        textAlign: 'center',
        color: 'black',
        fontFamily: 'sans-serif-thin',
        backgroundColor: '#C5D2D9',
        paddingTop: 20,
        paddingBottom:20,
     },

     h2: {
      fontSize: 30,
      textAlign: 'center',
      color: 'white',
      fontFamily: 'sans-serif-thin',
      backgroundColor: '#020065',
      paddingTop: 20,
      paddingBottom:20,
   },

    container: {
        backgroundColor: 'white',
    },

    caixa: {
      width: 400,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingVertical: 5,
      alignSelf: 'center',
    },

    h3: {
      fontSize: 20,
      textAlign: 'center',
      color: 'black',
      fontFamily: 'sans-serif-light',
      paddingTop: 20,
      paddingBottom:20,
    },

    borda: {
      fontSize: 20,
      textAlign: 'center',
      color: 'black',
      fontFamily: 'sans-serif-light',
      borderWidth: 1,
      borderColor: '#C5D2D9',
      width: 230, 
      padding: 5,
      
    },

    borda2: {
      fontSize: 25,
      textAlign: 'center',
      color: 'green',
      fontFamily: 'sans-serif-medium',
      borderWidth: 1,
      borderColor: '#C5D2D9',
      width: 230,  
      padding:5,
      
    },


    btn: {
      backgroundColor: '#C5D2D9',
      
      textAlign: 'center',
      
    },
    

});