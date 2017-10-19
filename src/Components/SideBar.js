import React,{Component} from 'react'
import { AppRegistry, Image, StatusBar } from "react-native";
import {NavigationActions} from 'react-navigation'
import { Container, Content, Text, List, ListItem,Icon } from "native-base";
import {routes as temp} from '../Navigation/AppNavigator'
const routes = ["Home", "About", "Profile"];
export default class SideBar extends Component {
    constructor(props) {
        super(props);
        const t1=Object.values(temp);
        this.state = {
          routes:Object.values(temp)
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
  render() {
    return (
      <Container>
        <Content>
          {/* <Image
            source={{
              uri: "https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/react-navigation/img/drawer-cover.png"
            }}
            style={{
              height: 120,
              alignSelf: "stretch",
              justifyContent: "center",
              alignItems: "center"
            }}>
            <Image
              square
              style={{ height: 80, width: 70 }}
              source={{
                uri: "https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/react-navigation/img/logo.png"
              }}
            />
          </Image> */}
          <List
            dataArray={this.state.routes}
            renderRow={data => {
              return (
                <ListItem
                  button
                  onPress={() => this.navigate(data)}>
                  {/* onPress={() => this.props.navigation.navigate(data)}> */}
                  <Icon name={data.icon}/>
                  <Text>{data.title}</Text>
                </ListItem>
              );
            }}
          />
        </Content>
      </Container>
    );
  }
}