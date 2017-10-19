import React,{Component} from 'react'
import {NavigationActions} from 'react-navigation'
import {Header as NativeBaseHeader,Left,Right,Button,Title,Icon,Body} from 'native-base'

class Header extends Component{
    openDrawer=()=>{  
      const navigationAction=NavigationActions.navigate({
        routeName:'DrawerOpen',
      });
      this.props.navigation.dispatch(navigationAction);
    }
    
    render(){
        return(
            <NativeBaseHeader>
            <Left>
              <Button transparent>
                <Icon name='menu' onPress={this.openDrawer} />
              </Button>
            </Left>
            <Body>
              <Title>{this.props.title}</Title>
            </Body>
            <Right />
          </NativeBaseHeader>
        )
    }
}

export default Header