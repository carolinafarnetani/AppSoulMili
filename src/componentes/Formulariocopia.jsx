import React, {useContext} from 'react';
import { StyleSheet, Text, View, StatusBar, Button, Dimensions, Image, ScrollView} from 'react-native';
import {MinhaConta} from './Create';


export default function Formulario({navigation}) {
  
  // const{conta} = useContext(MinhaConta);
    return (
<ScrollView>
  <View style={styles.container}>
    <Text style={styles.h1}>Formulário de depósito</Text>
    {/* <Text>Digite o valor que quer depositar: {conta.valor}</Text> */}

    

<Button color={'#020065'}
    title="Retornar a Home"
    onPress={() => navigation.navigate('Home')}/>

<Image style={{width:Dimensions.get('screen').width,resizeMode:'contain', }} source={ require('../../assets/formulario.jpg')}/>     

    <Text style={styles.h1}>Você é milionária!</Text>
    
<Image style={{width:Dimensions.get('screen').width,resizeMode:'contain', }} source={ require('../../assets/mili.jpg')}/>

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

    container: {
        backgroundColor: 'white',
    },


    });