import React,{Component} from 'react'
import {View,Text} from 'react-native'
import {NavigationActions} from 'react-navigation'
import {Container,Body,Footer,Left,Right,Button,Title,Content,FooterTab,Icon} from 'native-base'
import Header from '../Components/Header'
//import Header from '../Components/Header'

class HomeScreen extends Component{
  openDrawer=()=>{  
    const navigationAction=NavigationActions.navigate({
      routeName:'DrawerOpen',
    });
    this.props.navigation.dispatch(navigationAction);
  }    
    render(){
        return(
            <Container>
              <Header title="Home" navigation={this.props.navigation}/>
            <Content>
              <Text>
                Home screen.
              </Text>
            </Content>
            <Footer>
              <FooterTab>
                <Button full>
                  <Text>Footer</Text>
                </Button>
              </FooterTab>
            </Footer>
          </Container>
        )
    }
}

export default HomeScreen