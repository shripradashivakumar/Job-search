import {StyleSheet} from 'react-native';
import {Colors} from './theme';

const GlobalStyles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    height: '100%',
    backgroundColor: Colors.primary,
  },
  textInput: {
    flexGrow: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    borderColor: 'white',
    backgroundColor: 'white',
  },
});

export default GlobalStyles;
