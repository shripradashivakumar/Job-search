import React from 'react';
import {View, ScrollView, SafeAreaView} from 'react-native';
import Header from './Header';
import PopularJobs from './PopularJobs';
import NearbyJobs from './NearbyJobs';
import {GlobalStyles} from '../styles';
import {HomeProps} from '../../navigation/navigate';

export default function Home({navigation}: HomeProps): JSX.Element {
  function handleNavigation(id: string) {
    navigation.navigate('JobDetails', {jobId: id});
  }
  return (
    <SafeAreaView style={GlobalStyles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={GlobalStyles.container}>
          <Header navigation={navigation} />
          <PopularJobs handleNavigation={handleNavigation} />
          <NearbyJobs handleNavigation={handleNavigation} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
