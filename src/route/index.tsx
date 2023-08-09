import React, {useContext} from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider, Context} from '../context';
import Screen1 from '../screens/screen1';
import type {RootStackParamList} from '../typings';
import Screen2 from '../screens/screen2';

const styles = StyleSheet.create({
  full: {flex: 1},
});

const Stack = createStackNavigator<RootStackParamList>();

// const Stack = createNativeStackNavigator<RootStackParamList>();

const Container = () => {
  const {state} = useContext(Context);
  const selectTheme = state.isDark ? DarkTheme : DefaultTheme;

  return (
    <NavigationContainer theme={selectTheme}>
      <StatusBar
        backgroundColor={selectTheme.colors.card}
        barStyle={state.isDark ? 'light-content' : 'dark-content'}
      />
      <Stack.Navigator initialRouteName="screen1">
        <Stack.Screen name="screen1" component={Screen1} />
        <Stack.Screen name="screen2" component={Screen2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Route = () => {
  return (
    <GestureHandlerRootView style={styles.full}>
      <SafeAreaProvider>
        <Provider>
          <Container />
        </Provider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

export default Route;
