import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ReduxNavigator from './src/Navigation/ReduxNavigator';
import createStore from './src/store';
import {Provider} from 'react-redux';

const store=createStore();


export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state={fontsAreLoaded:false}
  }
  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
    this.setState({fontsAreLoaded: true});
  }

  render() {
    if(this.state.fontsAreLoaded)
      return (
        <Provider store={store}>
          <View style={styles.container}>
            <ReduxNavigator/>
          </View>
        </Provider>
      )
    else
      return (<View><Text>Loading...</Text></View>)
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
