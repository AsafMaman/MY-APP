import React,{Component} from 'react'
import {View,Text} from 'react-native'
import {Container,Header,Body,Footer,Left,Right,Button,Title,Content,FooterTab,Icon} from 'native-base'

class AboutScreen extends Component{

    render(){
        return(
            <Container>
            <Header>
              <Left>
                <Button transparent>
                  <Icon name='menu' />
                </Button>
              </Left>
              <Body>
                <Title>About</Title>
              </Body>
              <Right />
            </Header>
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