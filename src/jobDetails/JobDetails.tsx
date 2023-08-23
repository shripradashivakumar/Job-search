import React, {useCallback, useState} from 'react';
import {
  Text,
  SafeAreaView,
  ScrollView,
  View,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  Linking,
  Alert,
} from 'react-native';
import {JobDetailsProps} from '../../navigation/navigate';
import {
  Colors,
  FontFamilies,
  FontSizes,
  GlobalStyles,
  Shadows,
  Sizes,
  Spacing,
} from '../styles';
import useFetch from '../hooks/useFetch';
import Constants from '../constants';
import Header from './Header';
import TabContent from './TabContent';
export default function JobDetails({route}: JobDetailsProps) {
  const {jobId} = route.params;
  const {data, isLoading, error} = useFetch(
    Constants.GET,
    Constants.jobDetailsQuery,
    {job_id: jobId},
  );

  const [activeTab, setActiveTab] = useState(Constants.tabs[0]);

  const handlePress = useCallback(async () => {
    const supported = await Linking.canOpenURL(data[0].job_google_link);

    if (supported) {
      await Linking.openURL(data[0].job_google_link);
    } else {
      Alert.alert(
        `Don't know how to open this URL: ${data[0].job_google_link}`,
      );
    }
  }, [data]);

  return (
    <SafeAreaView style={GlobalStyles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {isLoading ? (
          <ActivityIndicator size="large" color={Colors.black} />
        ) : error ? (
          <Text>{Constants.error}</Text>
        ) : (
          <>
            <Header data={data[0]} />
            <View style={styles.tabContainer}>
              {Constants.tabs.map(tab => (
                <TouchableOpacity
                  key={tab}
                  onPress={() => setActiveTab(tab)}
                  style={styles.tab}>
                  <Text style={styles.tabText}>{tab}</Text>
                </TouchableOpacity>
              ))}
            </View>
            {activeTab === Constants.tabs[0] ? (
              <TabContent tab={activeTab} data={data[0]?.job_description} />
            ) : activeTab === Constants.tabs[1] ? (
              <TabContent
                tab={activeTab}
                data={Constants.sampleQualificationsTab}
              />
            ) : (
              <TabContent
                tab={activeTab}
                data={Constants.sampleResponsibilitiesTab}
              />
            )}
          </>
        )}
      </ScrollView>
      {/* footer */}
      {!isLoading && (
        <View style={styles.footer}>
          <TouchableOpacity
            onPress={handlePress}
            hitSlop={{top: 20, bottom: 20, left: 20, right: 20}}>
            <Text style={styles.applyText}>Apply for job</Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tab: {
    flex: 1,
    backgroundColor: Colors.dark_tertiary,
    paddingVertical: Spacing.dp_10,
    marginHorizontal: Spacing.dp_4,
    borderRadius: Sizes.dp_12,
  },
  tabText: {
    textAlign: 'center',
    fontFamily: FontFamilies.font_family_medium,
    color: Colors.black,
    fontSize: FontSizes.large,
  },
  footer: {
    ...Shadows.medium,
    backgroundColor: Colors.dark_tertiary,
    paddingVertical: Spacing.dp_16,
  },
  applyText: {
    textAlign: 'center',
    color: Colors.black,
    fontFamily: FontFamilies.font_family_bold,
    fontSize: FontSizes.large,
  },
});
