import React from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import {Colors, Spacing, Sizes} from '../styles';
import useFetch from '../hooks/useFetch';
import Constants from '../constants';
import JobCardsHeader from '../components/JobCardsHeader';
import JobCard from '../components/JobCard';
import {ApiCallType} from '../components/types';

type NearbyJobsProp = {
  handleNavigation: (id: string) => void;
};
export default function NearbyJobs({handleNavigation}: NearbyJobsProp) {
  const {data, isLoading, error}: ApiCallType = useFetch(
    Constants.GET,
    Constants.search,
    {
      query: Constants.nearbyJobsQuery,
      num_pages: '1',
      radius: '20',
    },
  );

  return (
    <View style={styles.container}>
      <JobCardsHeader
        heading={Constants.nearbyJobs}
        buttonText={Constants.showAll}
      />
      <View style={styles.jobs}>
        {isLoading ? (
          <ActivityIndicator size="large" color={Colors.black} />
        ) : error ? (
          <Text>{Constants.error}</Text>
        ) : data.length === 0 ? (
          <Text>{Constants.noJobsFound}</Text>
        ) : (
          data.map(job => (
            <JobCard
              job={job}
              style={styles.card}
              showEmpType
              key={job.job_id}
              handleNavigation={handleNavigation}
            />
          ))
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Spacing.dp_24,
    paddingHorizontal: Spacing.dp_2,
  },
  jobs: {
    marginTop: Spacing.dp_8,
    height: '100%',
  },
  card: {
    width: '100%',
    marginBottom: Spacing.dp_6,
    borderRadius: Sizes.dp_4,
  },
});
