import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {PopularJobsType, ViewStyleProps} from './types';
import {
  Spacing,
  Sizes,
  Colors,
  FontSizes,
  FontFamilies,
  Shadows,
} from '../styles';

type jobType = {
  job: PopularJobsType;
  style?: ViewStyleProps;
  showEmpType?: boolean;
  handleNavigation: (id: string) => void;
};
export default function JobCard({
  job,
  handleNavigation,
  style = {},
  showEmpType = false,
}: jobType) {
  return (
    <TouchableOpacity
      style={[styles.jobCardContainer, style]}
      onPress={() => handleNavigation(job.job_id)}>
      <View style={styles.jobLogoContainer}>
        <Image
          source={{uri: job.employer_logo}}
          resizeMode="contain"
          style={styles.logo}
        />
      </View>
      <Text style={styles.companyName} numberOfLines={1}>
        {job.employer_name}
      </Text>
      <View style={styles.infoContainer}>
        <Text style={styles.jobName} numberOfLines={2}>
          {job.job_title}
        </Text>
        <View style={styles.infoWrapper}>
          <Text style={styles.publisher}>{job?.job_publisher} -</Text>
          <Text style={styles.location}> {job.job_country}</Text>
        </View>
        {showEmpType && (
          <Text style={styles.jobName} numberOfLines={2}>
            {job.job_employment_type}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  jobCardContainer: {
    width: 300,
    padding: Sizes.dp_20,
    backgroundColor: Colors.secondary,
    borderRadius: Sizes.dp_4,
    justifyContent: 'space-between',
    ...Shadows.medium,
    shadowColor: Colors.white,
  },
  jobLogoContainer: {
    width: 50,
    height: 50,
    backgroundColor: 'white',
    borderRadius: Sizes.dp_12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: '90%',
    height: '90%',
  },
  companyName: {
    fontSize: FontSizes.medium,
    fontFamily: FontFamilies.font_family_medium,
    color: Colors.tertiary,
    marginTop: Spacing.dp_12,
  },
  infoContainer: {
    marginTop: Sizes.dp_18,
  },
  jobName: {
    fontSize: FontSizes.x_large,
    fontFamily: FontFamilies.font_family_bold,
    color: Colors.black,
  },
  infoWrapper: {
    flexDirection: 'row',
    marginTop: 5,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  publisher: {
    fontSize: FontSizes.medium,
    fontFamily: FontFamilies.font_family_bold,
    color: Colors.tertiary,
  },
  location: {
    fontSize: FontSizes.medium,
    fontFamily: FontFamilies.font_family_medium,
    color: Colors.tertiary,
  },
});
