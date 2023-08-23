import {ViewStyle, TextStyle} from 'react-native';

export type ViewStyleProps = ViewStyle[] | ViewStyle;
export type TextStyleProps = TextStyle[] | TextStyle;

export interface PopularJobsType {
  employer_logo: string | '' | null;
  employer_name: string;
  job_title: string;
  job_publisher?: string;
  job_country: string;
  job_id: string;
  job_employment_type: string;
  job_description: string | '';
  job_google_link: string | '';
}

export interface JobCardsHeaderType {
  heading: string;
  buttonText: string;
}

export interface ApiCallType {
  data: Array<PopularJobsType>;
  isLoading: boolean;
  error: string | null;
}
