import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  GestureResponderEvent,
} from 'react-native';
import {Colors, FontSizes} from '../styles';
import {ViewStyleProps, TextStyleProps} from './types';

interface ButtonProps {
  buttonText: string | JSX.Element;
  disabled?: boolean;
  onPress?: (event: GestureResponderEvent) => void;
  style?: ViewStyleProps;

  textStyle?: TextStyleProps;
}
function Button({
  buttonText,
  disabled = false,
  onPress,
  style,
  textStyle,
}: ButtonProps): JSX.Element {
  return (
    <TouchableOpacity
      hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
      disabled={disabled}
      onPress={onPress}
      style={[styles.button, style]}
      accessibilityRole="button">
      <Text style={[styles.text, textStyle]}>{buttonText}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    //paddingHorizontal: Spacing.dp_8,
    //paddingVertical: Spacing.dp_8,
    justifyContent: 'center',
    alignItems: 'center',
    //borderRadius: Sizes.dp_2,
    //borderWidth: Sizes.dp_1,
    //backgroundColor: Colors.primary,
    //borderColor: Colors.secondary,
  },
  text: {
    textAlign: 'center',
    fontSize: FontSizes.large,
    fontWeight: 'bold',
    color: Colors.white,
  },
});

export default React.memo(Button);
