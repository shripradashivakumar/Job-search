import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import {Colors, FontFamilies, FontSizes, Sizes, Spacing} from '../styles';
import location from '../assets/images/location.png';
import {PopularJobsType} from '../components/types';

type DataType = {
  data: PopularJobsType;
};
export default function Header({data}: DataType) {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={{
            uri: data?.employer_logo,
          }}
          style={styles.logoImage}
          resizeMode="contain"
        />
      </View>

      <View style={styles.jobTitleContainer}>
        <Text style={styles.jobTitle}>{data?.job_title}</Text>
      </View>

      <View style={styles.companyInfoContainer}>
        <Text style={styles.companyName}>{data?.employer_name}</Text>
        <View style={styles.locationContainer}>
          <Image
            source={location}
            resizeMode="contain"
            style={styles.locationImage}
          />
          <Text style={styles.locationName}>{data?.job_country}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: Spacing.dp_16,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: Spacing.dp_6,
    backgroundColor: Colors.secondary,
  },
  logoContainer: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: Sizes.dp_18,
  },
  logoImage: {
    width: '80%',
    height: '80%',
  },
  jobTitleContainer: {
    marginTop: Sizes.dp_12,
  },
  jobTitle: {
    fontSize: FontSizes.x_large,
    color: Colors.black,
    fontFamily: FontFamilies.font_family_bold,
    textAlign: 'center',
  },
  companyInfoContainer: {
    marginTop: Sizes.dp_12,
    //flexDirection: 'row',
    //justifyContent: 'center',
    //alignItems: 'center',
  },
  companyName: {
    fontSize: FontSizes.medium,
    color: Colors.dark_text,
    fontFamily: FontFamilies.font_family_medium,
    flexWrap: 'wrap',
    textAlign: 'center',
  },
  locationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  locationImage: {
    width: 14,
    height: 14,
  },
  locationName: {
    fontSize: FontSizes.medium,
    color: Colors.dark_text,
    fontFamily: FontFamilies.font_family_medium,
    marginLeft: 2,
  },
});
