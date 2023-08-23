import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {
  Colors,
  FontFamilies,
  FontSizes,
  GlobalStyles,
  Sizes,
  Spacing,
} from '../styles';
import Button from '../components/Button';
import Search from '../assets/svg/search.svg';
import Constants from '../constants';
import {HomeProps} from '../../navigation/navigate';

export default function Header({navigation}: Partial<HomeProps>): JSX.Element {
  const [activeJobType, setActiveJobType] = useState(Constants.jobTypes[0]);
  const [searchTerm, setSearchTerm] = useState('');
  const handleClick = () => {
    if (searchTerm !== '') {
      navigation.navigate('Search', {searchTerm});
    }
  };
  const handleJobTypeClick = (item: string) => {
    setActiveJobType(item);
    console.log(item);
    navigation.navigate('Search', {searchTerm: item});
  };
  return (
    <View style={{paddingHorizontal: Spacing.dp_2}}>
      <Text style={styles.line1}>{Constants.userGreeting}</Text>
      <Text style={styles.line2}>{Constants.headerLine}</Text>
      <View style={styles.searchContainer}>
        <View style={styles.searchBox}>
          <TextInput
            style={[GlobalStyles.textInput, styles.searchInput]}
            value={searchTerm}
            onChangeText={term => {
              setSearchTerm(term);
            }}
            placeholder={Constants.headerSearchPlaceholder}
          />
        </View>
        <Button
          buttonText={<Search />}
          style={styles.searchButton}
          onPress={handleClick}
        />
      </View>
      <View style={styles.jobsTypeContainer}>
        <FlatList
          horizontal
          data={Constants.jobTypes}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => handleJobTypeClick(item)}
              style={
                activeJobType === item
                  ? styles.jobType
                  : [styles.jobType, {borderColor: Colors.gray2}]
              }>
              <Text
                style={
                  item === activeJobType
                    ? styles.jobTypeText
                    : [styles.jobTypeText, {color: Colors.gray}]
                }>
                {item}
              </Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item}
          contentContainerStyle={{columnGap: Spacing.dp_6}}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  line1: {
    fontFamily: FontFamilies.font_family_medium,
    fontSize: FontSizes['2xl'],
    color: Colors.black,
  },
  line2: {
    fontFamily: FontFamilies.font_family_bold,
    fontSize: FontSizes['3xl'],
    color: Colors.black,
  },
  searchContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: Spacing.dp_4,
    height: 50,
  },
  searchBox: {
    flex: 0.88,
    backgroundColor: 'white',
    marginRight: Spacing.dp_12,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: Sizes.dp_16,
    height: '100%',
  },
  searchInput: {
    fontFamily: FontFamilies.font_family_regular,
    width: '100%',
    height: '100%',
    paddingHorizontal: Spacing.dp_4,
    backgroundColor: Colors.secondary,
    borderRadius: Sizes.dp_12,
    color: Colors.black,
  },
  searchButton: {
    flex: 0.12,
    height: '100%',
    backgroundColor: Colors.dark_tertiary,
    borderRadius: Sizes.dp_16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  jobsTypeContainer: {
    marginTop: Spacing.dp_16,
  },
  jobType: {
    paddingVertical: Sizes.dp_8,
    paddingHorizontal: Sizes.dp_16,
    borderRadius: Sizes.dp_16,
    borderWidth: 1,
    borderColor: Colors.dark_tertiary,
  },
  jobTypeText: {
    fontFamily: FontFamilies.font_family_medium,
    color: Colors.black,
  },
});
