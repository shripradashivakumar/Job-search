import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  ListRenderItemInfo,
} from 'react-native';
import {Colors, Spacing} from '../styles';
import useFetch from '../hooks/useFetch';
import {ApiCallType, PopularJobsType} from '../components/types';
import Constants from '../constants';
import JobCard from '../components/JobCard';
import JobCardsHeader from '../components/JobCardsHeader';

type PopularJobsProp = {
  handleNavigation: (id: string) => void;
};
export default function PopularJobs({handleNavigation}: PopularJobsProp) {
  const {data, isLoading, error}: ApiCallType = useFetch(
    Constants.GET,
    Constants.search,
    {
      query: Constants.popularJobsQuery,
      num_pages: '1',
    },
  );
  /*const data = [
    {
      employer_name: 'CGI',
      employer_logo:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/CGI_logo.svg/1280px-CGI_logo.svg.png',
      employer_website: 'http://www.cgi.com',
      employer_company_type: 'Computer Services',
      job_publisher: 'Careers',
      job_id: 'oluh63GJEUUAAAAAAAAAAA==',
      job_employment_type: 'FULLTIME',
      job_title: 'React JS and Node JS LA Developer:',
      job_apply_link:
        'https://cgi.njoyn.com/corp/xweb/XWeb.asp?NTKN=c&clid=21001&Page=JobDetails&Jobid=J0123-1595&BRID=1072512&lang=1',
      job_apply_is_direct: false,
      job_apply_quality_score: 0.666,
      job_description:
        'Position / Job Description React JS and Node JS Developer:\nBecome part of an ERP solution development team catering for Retail\nCandidate should have strong experience in React JS and Node JS.\n\nIn addition to this, we want the applicant to be:\n• A team player with the high degree of taking strong ownership over tasks and assignments;\n• Able to prove very good communication skills;\n• Highly proficiency in English, both spoken and written\n• A high degree of business acumen.\nJob Role /\nYour future duties & responsibilities Duties and Responsibilities:\n- Develop record and maintain web-based React JS and Node JS applications. Responsible to evaluate; design; develop and assist application systems.\n- Provide technical related consultation plus expertise to all product managers as well as various staff members.\n- Write technical as well as non-technical specifications along with record all procedures.\n- Convey effectively with all task progress; evaluations; suggestions; schedules along with technical and process issues.\n- Ensure to resolve identified issues related with React JS and Node JS development to different stakeholders.\n- Prepare solutions with applicable tools to execute client-specific interfaces; workflows and data analysis libraries.\n- Guide business decisions from technical perspective like performance; reliability; scalability and security.\n- Write all clean object-oriented React JS and Node JS as well as efficient SQL and maintain as well as edit current web sites.\n- Good written and verbal communication. Effectively articulate design requirements and specifications.\n- Take full ownership of assigned work items. Ensure timely delivery of development tasks.\n- Adhere to standard development work practices, follow code review checklist.\n-\nRequired qualifications for this role:\nPrimary skills (must have skills)\n• React JS\n• Node JS\n• Rest API using NodeJS\n• MYSQL\n• HTML/CSS/JavaScript',
      job_is_remote: false,
      job_posted_at_timestamp: 1690848000,
      job_posted_at_datetime_utc: '2023-08-01T00:00:00.000Z',
      job_city: 'Bengaluru',
      job_state: 'KA',
      job_country: 'IN',
      job_latitude: 12.971599,
      job_longitude: 77.59457,
      job_benefits: null,
      job_google_link:
        'https://www.google.com/search?gl=us&hl=en&rciv=jb&q=react+developer+in+bangalore&start=0&lrad=20&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=react+developer+in+bangalore&htidocid=oluh63GJEUUAAAAAAAAAAA%3D%3D',
      job_offer_expiration_datetime_utc: '2023-08-07T00:00:00.000Z',
      job_offer_expiration_timestamp: 1691366400,
      job_required_experience: {
        no_experience_required: false,
        required_experience_in_months: null,
        experience_mentioned: true,
        experience_preferred: false,
      },
      job_required_skills: null,
      job_required_education: {
        postgraduate_degree: false,
        professional_certification: false,
        high_school: false,
        associates_degree: false,
        bachelors_degree: false,
        degree_mentioned: false,
        degree_preferred: false,
        professional_certification_mentioned: false,
      },
      job_experience_in_place_of_education: false,
      job_min_salary: null,
      job_max_salary: null,
      job_salary_currency: null,
      job_salary_period: null,
      job_highlights: {},
      job_job_title: null,
      job_posting_language: 'en',
      job_onet_soc: '15113400',
      job_onet_job_zone: '3',
      job_naics_code: '541512',
      job_naics_name: 'Computer Systems Design Services',
    },
  ];
  const isLoading = false;
  const error = null;*/

  /*const renderItem = ({item}: itemType) => {
    return (
      <TouchableOpacity style={styles.jobCardContainer} onPress={() => {}}>
        <View style={styles.jobLogoContainer}>
          <Image
            source={{uri: item.employer_logo}}
            resizeMode="contain"
            style={styles.logo}
          />
        </View>
        <Text style={styles.companyName} numberOfLines={1}>
          {item.employer_name}
        </Text>
        <View style={styles.infoContainer}>
          <Text style={styles.jobName} numberOfLines={2}>
            {item.job_title}
          </Text>
          <View style={styles.infoWrapper}>
            <Text style={styles.publisher}>{item?.job_publisher} -</Text>
            <Text style={styles.location}> {item.job_country}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };*/
  const renderItem = ({item}: ListRenderItemInfo<PopularJobsType>) => {
    return <JobCard job={item} handleNavigation={handleNavigation} />;
  };

  return (
    <View style={styles.container}>
      <JobCardsHeader
        heading={Constants.popularJobs}
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
          <FlatList
            horizontal
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.job_id}
            contentContainerStyle={{
              columnGap: Spacing.dp_6,
            }}
            showsHorizontalScrollIndicator={false}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Spacing.dp_16,
    paddingHorizontal: Spacing.dp_2,
  },
  jobs: {
    marginTop: Spacing.dp_8,
  },
});
