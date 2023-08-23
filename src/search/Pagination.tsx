import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Colors, FontFamilies, FontSizes, Spacing} from '../styles';
import Left from '../assets/svg/chevron-left.svg';
import Right from '../assets/svg/chevron-right.svg';

type PaginationType = {
  pageNum: number;
  handlePagination: (num: string) => void;
};
export default function Pagination({
  pageNum,
  handlePagination,
}: PaginationType) {
  return (
    <View>
      <View style={styles.footerContainer}>
        <TouchableOpacity
          style={styles.paginationButton}
          onPress={() => handlePagination('left')}>
          <Left color={Colors.dark_text} />
        </TouchableOpacity>
        <View style={styles.paginationTextBox}>
          <Text style={styles.paginationText}>{pageNum}</Text>
        </View>
        <TouchableOpacity
          style={styles.paginationButton}
          onPress={() => handlePagination('right')}>
          <Right color={Colors.dark_text} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  footerContainer: {
    marginTop: Spacing.dp_10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
  },
  paginationButton: {
    width: 30,
    height: 30,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary,
  },
  paginationImage: {
    width: '60%',
    height: '60%',
    tintColor: 'white',
  },
  paginationTextBox: {
    width: 30,
    height: 30,
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  paginationText: {
    fontFamily: FontFamilies.font_family_bold,
    fontSize: FontSizes.medium,
    color: Colors.black,
  },
});
