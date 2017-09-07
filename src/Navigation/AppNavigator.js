import {StackNavigator,DrawerNavigator} from 'react-navigation'
import LoginScreen from '../Containers/LoginScreen'
import HomeScreen from '../Containers/HomeScreen'


const DrawerStack=DrawerNavigator({
    Home:{screen:HomeScreen}
})

const RootNav=StackNavigator({
    Login:{screen:LoginScreen},
    drawerStack:{screen:DrawerStack}
},
{
    headerMode:'none'
})

export default RootNav