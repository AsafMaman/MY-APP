import React from 'react'
import {StackNavigator,DrawerNavigator} from 'react-navigation';
import LoginScreen from '../Containers/LoginScreen';
import HomeScreen from '../Containers/HomeScreen';
import AboutScreen from '../Containers/AboutScreen';
import SideBar from '../Components/SideBar'

export const routes={
  Home: { screen: HomeScreen,title:"Home",icon:"home"},
  About: { screen: AboutScreen,title:"About",icon:"information-circle"},
};

// drawer stack
const DrawerStack = DrawerNavigator(
  routes,
  {
    contentComponent:props => <SideBar {...props}/>
  }
)
  
const DrawerNavigation = StackNavigator(
  {
    DrawerStack: { screen: DrawerStack }
  },
  {
    headerMode: 'none',//'float',
    navigationOptions: ({navigation}) => ({
      headerStyle: {backgroundColor: 'green'},
      title: 'Logged In to your app!',
    //   headerLeft: <Text onPress={() => navigation.navigate('DrawerOpen')}>Menu</Text>
    })
  }
)
  
  // login stack
const LoginStack = StackNavigator(
  {
    loginScreen: { screen: LoginScreen },
  },
  {
    headerMode: 'none',
    // navigationOptions: {
    //   headerStyle: {backgroundColor: 'red'},
    //   title: 'You are not logged in'
    // }
  }
)
  
  // Manifest of possible screens
const RootNav = StackNavigator(
  {
    loginStack: { screen: LoginStack },
    drawerStack: { screen: DrawerNavigation }
  },
  {
    // Default config for all screens
    headerMode: 'none',
    title: 'Main',
    initialRouteName: 'loginStack'
  }
)
  
export default RootNav