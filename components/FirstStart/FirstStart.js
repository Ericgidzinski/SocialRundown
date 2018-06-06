// firstStart activates only on first ever opening of the app. It is used to get information about the user.
// Started on 5/27/2018

import React, { Component } from 'react';
import {
    AppRegistry,
    Platform,
    StyleSheet,
    Text,
    View
  } from 'react-native';

  export default class FirstStart extends Component {
    render() {
      return (
        <View style = {styles.container}>
          <Text style = {styles.title}>
            Welcome to Social Rundown!
          </Text>
          <Text>
            Please answer a few questions about your personailty. Your answers will help in determining which features will help the most.
          </Text>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#1e7a55'
    },
    title: {
      color: 'black'
    }
  });

  AppRegistry.registerComponent('FirstStart', () => FirstStart);
  