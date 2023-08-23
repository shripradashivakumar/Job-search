import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Colors, FontSizes, FontFamilies} from '../styles';
import {JobCardsHeaderType} from './types';

export default function JobCardsHeader({heading}: JobCardsHeaderType) {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{heading}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: FontSizes.x_large,
    fontFamily: FontFamilies.font_family_medium,
    color: Colors.black,
  },
});
