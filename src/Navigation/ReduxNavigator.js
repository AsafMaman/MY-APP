import React from 'react'
import * as ReactNavigation from 'react-navigation'
import {connect} from 'react-redux'
import AppNavigator from './AppNavigator'

function ReduxNavigator(props){
    const {dispatch,nav} =props
    const navigation=ReactNavigation.addNavigationHelpers({
        dispatch,
        state:nav
    })
    return <AppNavigator navigation={navigation}/>
}

const mapStateToProps=state=>({nav:state.nav})
export default connect(mapStateToProps)(ReduxNavigator)