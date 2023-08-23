import {StackScreenProps} from '@react-navigation/stack';

export type RootStackParamList = {
  Home: undefined;
  JobDetails: {jobId: string};
  Search: {searchTerm: string};
};

export type DrawerParamsList = {
  HomeDrawer: HomeProps;
};

export type HomeProps = StackScreenProps<RootStackParamList, 'Home'>;
export type JobDetailsProps = StackScreenProps<
  RootStackParamList,
  'JobDetails'
>;
export type SearchProps = StackScreenProps<RootStackParamList, 'Search'>;
