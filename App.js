import React  from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from '@react-navigation/drawer';
// import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Content from './src/componentes/Content';
import Header from './src/componentes/Header';
import Dicas from './src/componentes/Dicas';
// import Create from './src/componentes/Create';
import Formulario from './src/componentes/Formulario';
import Footer from './src/componentes/Footer';


const Drawer = createDrawerNavigator()


export default function App({navigation}) {
  return (


<NavigationContainer>
  <StatusBar style="auto" />
  <Header />
    <Drawer.Navigator initialRouteName='Content' drawerStyle={{backgroundColor: 'white'}} drawerContentOptions={{activeTintColor:'#020065', inactiveTintColor: '#020065',}}>

      <Drawer.Screen style={styles.h1} name="Home" component={Content}
        options={{
          title: 'Home',
          drawerIcon: ({focused,size}) =>(
            <Icon name='home' size={24} color={focused ? '#020065': '#020065'}/> 
          )
        }}
      />
      <Drawer.Screen style={styles.h1} name='Form' component={Formulario}
        options={{
          title: 'Formulário de depósito',
          drawerIcon: ({focused,size}) =>(
            <Icon name='attach-money' size={24} color={focused ? '#020065': '#020065'}/> 
          )
         }}
      />
      <Drawer.Screen style={styles.h1} name='Dicas' component={Dicas}
        options={{
          title: 'Dicas Financeiras',
          drawerIcon: ({focused,size}) =>(
            <Icon name='lightbulb' size={24} color={focused ? '#020065': '#020065'}/> 
          )
        }}
      />
      
    </Drawer.Navigator>
    <Footer />
</NavigationContainer>

);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },


  h1: {
    fontSize: 30,
    fontFamily: 'sans-serif-thin',
    
 },
});
