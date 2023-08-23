import React from 'react';
import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './navigation/AppNavigator';
import {Colors} from './src/styles';

export default function Main(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="default" backgroundColor={Colors.primary} />
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    backgroundColor: Colors.primary,
  },
});
