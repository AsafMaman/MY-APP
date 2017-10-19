import React,{Component} from 'react'
import {View,Text} from 'react-native'
import {Container,Body,Footer,Left,Right,Button,Title,Content,FooterTab,Icon} from 'native-base'
import Header from '../Components/Header'

class AboutScreen extends Component{

    render(){
        return(
            <Container>
            <Header title="About" navigation={this.props.navigation}/>
            <Content>
              <Text>
                About screen.
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

export default AboutScreen