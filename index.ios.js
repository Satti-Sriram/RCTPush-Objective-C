// SRIRAM SATTI

//Import library to create a compound

import React, { Component } from 'react';
import { AppRegistry, View, StyleSheet, AlertIOS,
  PushNotificationIOS } from 'react-native';
import Button from './src/components/Button';


export default class HpsLabsDemo extends Component {
  componentWillMount() {

    // Add listener for local notifications
    PushNotificationIOS.addEventListener('localNotification', this._onLocalNotification);
  }

  componentWillUnmount() {

    // Remove listener for local notifications
    PushNotificationIOS.removeEventListener('localNotification', this._onLocalNotification);
  }


  _sendLocalNotification() {
    const localNotification = {
      alertBody: 'Message from sriram'
    };

    PushNotificationIOS.requestPermissions();
    PushNotificationIOS.setApplicationIconBadgeNumber(2);
    PushNotificationIOS.presentLocalNotification(localNotification);
    require('RCTDeviceEventEmitter').emit('localNotificationReceived', {
      aps: {
        alert: 'Sample local notification',
        badge: '+1',
        sound: 'default',
        category: 'REACT_NATIVE'
      },
    });
  }


  _onLocalNotification(notification) {
    AlertIOS.alert(
      'Message from sriram',
      'Alert message: ' + notification.getMessage(),
      [{
        text: 'Dismiss',
        onPress: null,
      }]
    );
  }
  render() {
    return (
      <View style={styles.container}>
        
        <Button onPress={this._sendLocalNotification} />
       
      </View>
    );
    }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
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

AppRegistry.registerComponent('HpsLabsDemo', () => HpsLabsDemo);