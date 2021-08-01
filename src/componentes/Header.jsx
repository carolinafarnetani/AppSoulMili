import React  from 'react';
import { StyleSheet, Text, View, StatusBar, Image, Dimensions } from 'react-native';


export default function Header() {
    return (
  
  <View style={styles.header}>
    <Text style={styles.titulo}>Banco Mili</Text>

    {/* <Image style={{width:Dimensions.get('screen').width,resizeMode:'contain', }} source={ require('../../assets/banco.jpg')}/> */}
    
  </View>
  
  
  );
  }

  const styles = StyleSheet.create({
    titulo: {
        fontSize: 40,
        textAlign: 'center',
        color: 'white',
        fontFamily: 'sans-serif-light',
        backgroundColor: '#020065',
        paddingTop: 20,
        paddingBottom:20,
     },

});