import type {StackScreenProps} from '@react-navigation/stack';

type AppStateProps = {
  isDark: boolean;
};

type ActionTypes = {type: 'SWITCH_THEME'};

type RootStackParamList = {
  screen1: undefined;
  screen2: undefined;
};

type ScreenProps<T extends keyof RootStackParamList> = StackScreenProps<
  RootStackParamList,
  T
>;
