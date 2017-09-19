import React,{Component} from 'react';
import {NavigationActions} from 'react-navigation';
import {View,StyleSheet,Dimensions} from 'react-native';
import {Container,Header,Content,Form,Item,Input,Button,Text,Icon} from 'native-base';
import { Field, reduxForm } from 'redux-form';



class LoginScreen extends Component{

    login=()=>{  
      const navigationAction=NavigationActions.navigate({
        routeName:'drawerStack',
        //to navigate to sub routere.
        // params:{},
        // action:NavigationActions.navigate({routeName:'Home'})
      });
      this.props.navigation.dispatch(navigationAction);
    }

    loginField=(props) =>{
      const {input}=props;
      return(
        <Item>
          <Input {...props}/>
        </Item>
      )
    }
    
    render(){
          return(
            <View style={styles.container}>
              <View style={styles.logoContainer}>
                <Icon name='lock' style={styles.icon} />
              </View>
              <View style={styles.contentContainer}>
                  <Form>
                    <Item>
                      <Field name="userName" placeholder="Username" component={this.loginField} type="text"/>
                    </Item>
                      <Item>
                        <Input placeholder="Password"/>
                      </Item>
                    <View style={styles.buttonContainer}>
                    <Button block onPress={this.login}>
                      <Text>Login</Text>
                    </Button>
                  </View>
                </Form>
              </View>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
      flexDirection:'column',
      flex:1,
    },
    logoContainer:{
      flexDirection:'column',
      justifyContent: 'center',
      alignItems: 'center',
      flex:1,
      backgroundColor:'red'
    },
    icon:{
      fontSize:140,
      color:'#fff'
    },
    contentContainer:{
      flexDirection:'column',
      flex:2,
      marginTop:20
    },
    buttonContainer:{
      margin:20
    }
})

LoginForm=reduxForm({
  form:'login'
})(LoginScreen)
  
export default LoginForm
//export default LoginScreen