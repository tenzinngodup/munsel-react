/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View
} from 'react-native';

import { Navigator, NativeModules } from 'react-native';
import ReactDOM from 'react-dom';

import { COLOR, ThemeProvider } from 'react-native-material-ui';
// import Button from 'material-ui/Button';
import { WebView,ListView,Input,Form, TextInput ,FlatList} from 'react-native';
import { Container, Header, Content, Card, CardItem, Text,Icon ,Right } from 'native-base';
import { Footer, FooterTab, Button } from 'native-base';

// using ES6 modules
// import { NativeRouter, Route, Link } from 'react-router-native'
 
// // using CommonJS modules
// var NativeRouter = require('react-router-native').NativeRouter
// var Route = require('react-router-native').Route
// var Link = require('react-router-native').Link


// import Button from 'material-ui/Button';

import Auth0 from 'react-native-auth0';

const auth0 = new Auth0({ domain: 'https://munsel.auth0.com/api/v2/', clientId: '59bc92821af04b6c7037d4bd' });
auth0
    .webAuth
    .authorize({scope: 'openid email', audience: 'https://munsel.auth0.com/api/v2/userinfo'})
    .then(credentials => console.log(credentials))
    .catch(error => console.log(error));

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

  onPressLearnMore() {
    console.log('Click happened');
  }

  render() {
    return (
      <Container>
      <Header />
      <Content>
        <Card>

          <CardItem>
            inside card
            {/* <Icon active name="logo-googleplus" /> */}
            <Text>Google Plus</Text>
            <Right>
              {/* <Icon name="arrow-forward" /> */}
            </Right>
           </CardItem>
         </Card>
      </Content>
      <Footer>
          <FooterTab>
            <Button>
              <Text>Home</Text>
            </Button>
            <Button active>
              <Text>Connect</Text>
            </Button>
            <Button>
              <Text>Account</Text>
            </Button>
          </FooterTab>
        </Footer>
    </Container>
//       <View style={styles.container}>
//         <Text style={styles.welcome}>
//           Welcome to React Native!
//           Musel site
//           Second time! 
//           more edits
//           thinrd change
//         </Text>
//         <Text style={styles.instructions}>
//           To get started, edit App.js
//         </Text>
//         <Text style={styles.instructions}>
//           {instructions}
//         </Text>
//         <Button
//             onPress={this.onPressLearnMore}
//             title="Learn More"
//             color="#841584"
//             accessibilityLabel="Learn more about this purple button"
//           />
//              <TextInput
//         style={{height: 40, borderColor: 'gray', borderWidth: 1}}
//         onChangeText={(text) => this.setState({text})}
//         value={this.state.text}
//       />

//       <FlatList
//   data={[{key: 'a'}, {key: 'b'}]}
//   renderItem={({item}) => <Text>{item.key}</Text>}
// />
//       </View>

    );
  }
}


const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
