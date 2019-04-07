import React from 'react';
import {StyleSheet, Text, View,Image,ScrollView} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import {Input} from './components/input';
import {Button} from './components/button';

export default class App extends React.Component {

  state = {
    email: '',
    password: '',
    authenticating: false,
  }

  render() {
    return (
      <AppContainer/>
    );
  }
}

class register extends React.Component {

  static navigationOptions = {
    headerStyle: {
      backgroundColor: 'white'
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Register Your Account here </Text>
        <Input
          placeholder = 'Enter name'
          label = 'Name'
        />
        <Input
          placeholder = 'Enter email'
          label = 'Email'
        />

        <Input
          placeholder = 'Enter password'
          label = 'Password'
          secureTextEntry
        />

        <Button
          title = 'Register'
          onPress = { () => this.props.navigation.navigate('Home')}
        >Register</Button>

        <Button
          title = 'Login'
          onPress = { () => this.props.navigation.navigate('Home')}
        >Login</Button>
      </View>
    );
  }
}

class login extends React.Component {


  render() {

    return (
      <View style={styles.container}>
        
        <Input
          placeholder = 'Enter email'
          label = 'Email'
        />

        <Input
          placeholder = 'Enter password'
          label = 'Password'
          secureTextEntry
        />

        <Button
          title = 'Login'
          onPress = { () => this.props.navigation.navigate('Homepage')}
        >Login</Button>

        <Button
          title = 'Register'
          onPress = { () => this.props.navigation.navigate('Register')}
        >Register</Button>
      </View>
    );
  }
}

class homepage extends React.Component {


  render() {

    return (
      <View >
        
        <Text style={styles.text}>Homepage </Text>
       <Image style={styles.image} source={require('./image1.jpg')} />
       <Image style={styles.image} source={require('./image1.jpg')} />
       
       
      </View>
    );
  }
}

const AppStackNavigator = createStackNavigator({
  Home: login,
  Register: register,
  Homepage:homepage
}, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: 'white'
    }
  }
});

const AppContainer =  createAppContainer(AppStackNavigator);

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

    text:{
      alignItems: 'center',
      fontSize: 20,
      color: 'black',

    },

    image:{
      alignItems: 'center',
      width:'100%',
      resizeMode:'contain',


    }
});