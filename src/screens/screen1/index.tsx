import React, {useContext} from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {Context} from '../../context';
import type {ScreenProps} from '../../typings';

const Screen1 = ({navigation}: ScreenProps<'screen1'>) => {
  const {dispatch} = useContext(Context);
  const {colors} = useTheme();
  const primary = {backgroundColor: colors.primary};
  const pushNext = () => navigation.push('screen1');
  const navigateNext = () => navigation.navigate('screen2');
  const onSwitch = () => dispatch({type: 'SWITCH_THEME'});

  return (
    <View style={styles.center}>
      <TouchableOpacity onPress={onSwitch} style={[primary, styles.button]}>
        <Text style={styles.whiteText}>Switch theme</Text>
      </TouchableOpacity>
      <View style={styles.space} />
      <TouchableOpacity onPress={pushNext} style={[primary, styles.button]}>
        <Text style={styles.whiteText}>Push to next screen</Text>
      </TouchableOpacity>
      <View style={styles.space} />
      <TouchableOpacity onPress={navigateNext} style={[primary, styles.button]}>
        <Text style={styles.whiteText}>Navigate to next screen</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
  },
  center: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  space: {
    height: 20,
  },
  whiteText: {
    color: 'white',
  },
});

export default Screen1;
