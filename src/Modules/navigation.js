import {NavigationActions} from 'react-navigation'
import AppNavigator from '../Navigation/AppNavigator'

// const initialNavState = AppNavigator.router.getStateForAction(
//     secondAction,
//     tempNavState
//   );

const navReducer=(state,action)=>{
    //console.log('actio: '+action)
    //console.log('state: ' + state)
    //const newState = AppNavigation.router.getStateForAction(action, state);
    let nextState
    switch(action.type){
        case 'Login':
            let temp=1
        break
        case 'Home':
        nextState=AppNavigator.router.getStateForAction(
            NavigationActions.navigate({routeName:'Home'}),
            state
        )
        break
        default:
            nextState = AppNavigator.router.getStateForAction(action, state)
        break
    }

    
    return nextState || state;
    // console.log('newState: '+newState)
    // return newState || state;

    // let nextState
    // switch(action.type){
    //     case 'Home':
    //         nextState=AppNavigation.router.getStateForAction(
    //             NavigationActions.navigate({routeName:'Home'}),
    //             state
    //         )
    //     break
    // }
    // const newState=AppNavigation.router.getStateForAction(action,state)
    // return newState|| state
    //return nextState||state
}

export default navReducer