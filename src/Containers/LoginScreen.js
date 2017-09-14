import React,{Component} from 'react'
import {View,Text,StyleSheet,Dimensions} from 'react-native'
import {Container,Header,Body,Footer,Left,Right,Button,Title,Content,FooterTab,Icon,Image,background,fi} from 'native-base'


class LoginScreen extends Component{

    render(){
        return(
            <Container>
            <View style={styles.container}>
              <Content>
              <Button style={styles.btn}
              /* onPress={() => this.props.navigation.navigate('Home')} */
              //onPress={() => this.props.navigation.navigate('drawerStack')}
              onPress={() => this.props.navigation.dispatch({
                type: 'Navigate',
                routeName: 'drawerStack',
                action: {
                  type: 'Navigate',
                  routeName: 'Home',
                },
              })}
                >
                      <Text>Login</Text>
                    </Button>
              </Content>
            </View>
          </Container>
    //     <Container>
    //     <View style={styles.container}>
    //       <Content>
    //         <Image source={background} style={styles.shadow}>
    //           <View style={styles.bg}>
    //             <Field name="email" component={this.renderInput} />
    //             <Field name="password" component={this.renderInput} />
    //             <Button
    //               style={styles.btn}
    //               onPress={() => this.props.navigation.navigate("Home")}
    //             >
    //               <Text>Login</Text>
    //             </Button>
    //           </View>
    //         </Image>
    //       </Content>
    //     </View>
    //   </Container>
        )
    }
}

const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#FBFAFA',
      },
      shadow: {
        flex: 1,
        width: null,
        height: null,
      },
      bg: {
        flex: 1,
        marginTop: deviceHeight / 1.75,
        paddingTop: 20,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 30,
        bottom: 0,
      },
      input: {
        marginBottom: 20,
      },
      btn: {
        marginTop: 20,
        alignSelf: 'center',
      },
  });
  

export default LoginScreen