import React  from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';


export default function Footer() {
    return (
  
  <View>
    <Text style={styles.footer}>Carolina Farnetani de Almeida</Text>
  </View>
  
  
  );
  }


  const styles = StyleSheet.create({
    footer: {
        fontSize: 15,
        textAlign: 'center',
        color: 'black',
        fontFamily: 'sans-serif-light',
        backgroundColor: '#C5D2D9',
        paddingTop: 5,
        paddingBottom:5,
     },

});