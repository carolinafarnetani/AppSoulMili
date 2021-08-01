import React, {useState}  from 'react';
import { StyleSheet, Text, View, StatusBar, Button, Dimensions, Image } from 'react-native';



export default function Content({navigation}) {
    const[conta,setConta]=useState({
        conta:'',
    })
    return (
  

  <View style={styles.container}>
      
    {/* <Text style={styles.h1}>Bem-vinda!</Text> */}
    <Text style={styles.h1}>Leide {` `}
    <Image style={{width:50, height:50,}} source={ require('../../assets/perfil.jpg')}/></Text>
    <Text style={styles.h4}>2020-2  |  2020-2</Text>

    <View style={styles.container2}>
    <Text style={styles.h3}>SORRIA, seu saldo atual:</Text>
    <Text style={styles.h2}>R$: 10.000.000,00 </Text>
    </View>

    <Button color={'#020065'}
        title="Ir para Formulário"
        onPress={() => navigation.navigate('Form')}/>

<Image style={{width:Dimensions.get('screen').width,resizeMode:'contain', marginTop: -450,}} source={ require('../../assets/banco.jpg')}/>

    </View>

  
  
  );
  }


  const styles = StyleSheet.create({
    h1: {
        fontSize: 38,
        textAlign: 'center',
        padding: 30,
        color: 'black',
        fontFamily: 'sans-serif-medium',
        color: '#020065',
        
        
     },

    h2: {
        fontSize: 35,
        textAlign: 'center',
        padding: 20,
        color: 'green',
        fontFamily: 'sans-serif-medium',
        
     },

    h3: {
        fontSize: 17,
        textAlign: 'left',
        color: 'black',
        fontFamily: 'sans-serif-medium',
        padding: 20,
        
     }, 

    h4: {
        fontSize: 17,
        textAlign: 'center',
        paddingBottom: 20,
        color: 'black',
        fontFamily: 'sans-serif-medium',
        color: '#020065',
        
        
     },

    container: {
        backgroundColor: 'white',
    }, 

    container2: {
        backgroundColor: '#C5D2D9',
    },

    


});