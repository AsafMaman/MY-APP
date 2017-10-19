import React,{Component} from 'react'
import { AppRegistry, Image, StatusBar } from "react-native";
import {NavigationActions} from 'react-navigation'
import { Container,Header,Body,Right,Left ,Content, Text, List, ListItem,Icon,Title } from "native-base";
import {routes} from '../Navigation/AppNavigator'
// const routes = ["Home", "About", "Profile"];
export default class SideBar extends Component {
    constructor(props) {
        super(props);
        let routesObjects=Object.keys(routes).map(x=>{return {route:x,title:routes[x].title,icon:routes[x].icon}})
        this.state = {
          routes:routesObjects
        };
    }
    
    navigate=(routeName)=>{  
        const navigationAction=NavigationActions.navigate({
          routeName:routeName,
          //to navigate to sub routere.
          // params:{},
          // action:NavigationActions.navigate({routeName:'Home'})
        });
        this.props.navigation.dispatch(navigationAction);
    }

    closeDrawer=()=>{  
        const navigationAction=NavigationActions.navigate({
          routeName:'DrawerClose',
        });
        this.props.navigation.dispatch(navigationAction);
    }
    render() {
        return (
            <Container>
                <Header>
                    <Body>
                        <Title>Menu</Title>
                    </Body>
                    <Right>
                        <Icon name="close" onPress={this.closeDrawer}/>
                    </Right>
                </Header>
                <Content>
                    <List
                        dataArray={this.state.routes}
                        renderRow={data => {
                            return (
                                <ListItem icon onPress={() => this.navigate(data.route)}>
                                <Left>
                                  <Icon name={data.icon} />
                                </Left>
                                <Body>
                                  <Text>{data.title}</Text>
                                </Body>
                                <Right>
                                  <Icon name="arrow-forward" />
                                </Right>
                              </ListItem>
                            );
                        }}
                    />
                </Content>
            </Container>
        );
    }
}