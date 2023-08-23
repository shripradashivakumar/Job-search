import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Colors, FontFamilies, FontSizes, Spacing} from '../styles';
import Constants from '../constants';

type TabType = {
  tab: string;
  data: string;
};
export default function TabContent({tab, data}: TabType) {
  if (data === undefined) {
    return (
      <View>
        <Text>{Constants.noData}</Text>
      </View>
    );
  }
  switch (tab) {
    case Constants.tabs[0]:
      return (
        <View style={styles.aboutWrapper}>
          <Text style={styles.aboutText}>{data}</Text>
        </View>
      );

    case Constants.tabs[1]:
      return (
        <View style={styles.aboutWrapper}>
          <Text style={styles.aboutText}>{data}</Text>
        </View>
      );

    case Constants.tabs[2]:
      return (
        <View style={styles.aboutWrapper}>
          <Text style={styles.aboutText}>{data}</Text>
        </View>
      );

    default:
      return null;
  }
}

const styles = StyleSheet.create({
  aboutWrapper: {
    paddingHorizontal: Spacing.dp_6,
    paddingVertical: Spacing.dp_12,
  },
  aboutText: {
    fontFamily: FontFamilies.font_family_medium,
    fontSize: FontSizes.large,
    color: Colors.black,
  },
});
