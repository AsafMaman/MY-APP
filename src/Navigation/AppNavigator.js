import {StackNavigator,DrawerNavigator} from 'react-navigation';
import LoginScreen from '../Containers/LoginScreen';
import HomeScreen from '../Containers/HomeScreen';
import AboutScreen from '../Containers/AboutScreen';


// const DrawerStackNavigatior=DrawerNavigator({
//     Home:{screen:HomeScreen}
// })

// const LoginStack = StackNavigator({
//     Login:{screen:LoginScreen},
//   }, {
//     headerMode: 'float',
//     navigationOptions: {
//       headerStyle: {backgroundColor: 'red'},
//       title: 'You are not logged in'
//     }
// })

// const DrawerStack = StackNavigator({
//     DrawerStackNav: { screen: DrawerStackNavigatior }
//     }, {
//     headerMode: 'float',
//     navigationOptions: ({navigation}) => ({
//       headerStyle: {backgroundColor: 'green'},
//       title: 'Logged In to your app!',
//       headerLeft: <Text onPress={() => navigation.navigate('DrawerOpen')}>Menu</Text>
//     })
// })

// const RootNav=StackNavigator({
//     Login:{screen:LoginStack},
//     drawerStack:{screen:DrawerStack}
// },
// {
//     headerMode:'none'
// })

// export default RootNav


// drawer stack
const DrawerStack = DrawerNavigator({
    Home: { screen: HomeScreen },
    About: { screen: AboutScreen},
  })
  
  const DrawerNavigation = StackNavigator({
    DrawerStack: { screen: DrawerStack }
  }, {
    headerMode: 'float',
    navigationOptions: ({navigation}) => ({
      headerStyle: {backgroundColor: 'green'},
      title: 'Logged In to your app!',
    //   headerLeft: <Text onPress={() => navigation.navigate('DrawerOpen')}>Menu</Text>
    })
  })
  
  // login stack
  const LoginStack = StackNavigator({
    loginScreen: { screen: LoginScreen },
  }, {
    headerMode: 'none',
    // navigationOptions: {
    //   headerStyle: {backgroundColor: 'red'},
    //   title: 'You are not logged in'
    // }
  })
  
  // Manifest of possible screens
  const RootNav = StackNavigator({
    loginStack: { screen: LoginStack },
    drawerStack: { screen: DrawerNavigation }
  }, {
    // Default config for all screens
    headerMode: 'none',
    title: 'Main',
    initialRouteName: 'loginStack'
  })
  
  export default RootNav