import {StackNavigator,DrawerNavigator} from 'react-navigation'
import LoginScreen from '../Containers/LoginScreen'
import HomeScreen from '../Containers/HomeScreen'


const DrawerStack=DrawerNavigator({
    home:{screen:HomeScreen}
})

const RootNav=StackNavigator({
    login:{screen:LoginScreen},
    drawerStack:{screen:DrawerStack}
},
{
    headerMode:'none'
})

export default RootNav