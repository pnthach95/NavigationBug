import React, {useContext} from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider, Context} from '../context';
import Screen from '../screens';
import type {RootStackParamList} from '../typings';

const styles = StyleSheet.create({
  full: {flex: 1},
});

const Stack = createStackNavigator<RootStackParamList>();

const Container = () => {
  const {state} = useContext(Context);
  const selectTheme = state.isDark ? DarkTheme : DefaultTheme;

  return (
    <NavigationContainer theme={selectTheme}>
      <StatusBar
        backgroundColor={selectTheme.colors.card}
        barStyle={state.isDark ? 'light-content' : 'dark-content'}
      />
      <Stack.Navigator>
        <Stack.Screen name="screen" component={Screen} />
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
