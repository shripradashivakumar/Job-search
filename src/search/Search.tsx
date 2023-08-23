import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import {ApiCallType} from '../components/types';
import useFetch from '../hooks/useFetch';
import Constants from '../constants';
import {
  Colors,
  FontFamilies,
  FontSizes,
  GlobalStyles,
  Spacing,
} from '../styles';
import JobCard from '../components/JobCard';
import {SearchProps} from '../../navigation/navigate';

export default function Search({route, navigation}: SearchProps) {
  const {searchTerm} = route.params;
  console.log(searchTerm);
  const {data, isLoading, error}: ApiCallType = useFetch(
    Constants.GET,
    Constants.search,
    {
      query: searchTerm,
      num_pages: '1',
    },
  );

  /*const handlePagination = (direction: string) => {
    if (direction === 'left' && pageNum > 1) {
      setPageNum(pageNum - 1);
      handleSearch();
    } else if (direction === 'right') {
      setPageNum(pageNum + 1);
      handleSearch();
    }
  };
  const data = [
    {
      employer_name: 'HUMAC INC.',
      employer_logo: null,
      employer_website: null,
      employer_company_type: null,
      job_publisher: 'Dice',
      job_id: 'Rk8OxTF-6GsAAAAAAAAAAA==',
      job_employment_type: 'CONTRACTOR',
      job_title: 'React JS Developer',
      job_apply_link:
        'https://www.dice.com/job-detail/ca825188-9f25-4270-9d5a-2a1f186f0573',
      job_apply_is_direct: true,
      job_apply_quality_score: 0.5615,
      job_description:
        'Proficient in React.js and its core principles.\n\nStrong proficiency in JavaScript, HTML, and CSS.\n\nExperience with state management libraries such as Redux or MobX.\n\nFamiliarity with RESTful APIs and asynchronous request handling.\n\nSolid understanding of web fundamentals and cross-browser compatibility.\n\nKnowledge of modern front-end build pipelines and tools.\n\nExperience with version control systems such as Git.\n\nStrong problem-solving skills and attention to detail.\n\nExcellent communication and teamwork skills.\n\nA proven track record of delivering high-quality software on time.',
      job_is_remote: false,
      job_posted_at_timestamp: 1692639686,
      job_posted_at_datetime_utc: '2023-08-21T17:41:26.000Z',
      job_city: 'Phoenix',
      job_state: 'AZ',
      job_country: 'US',
      job_latitude: 33.448376,
      job_longitude: -112.074036,
      job_benefits: null,
      job_google_link:
        'https://www.google.com/search?gl=us&hl=en&rciv=jb&q=react&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=react&htidocid=Rk8OxTF-6GsAAAAAAAAAAA%3D%3D',
      job_offer_expiration_datetime_utc: '2023-09-22T14:15:35.000Z',
      job_offer_expiration_timestamp: 1695392135,
      job_required_experience: {
        no_experience_required: false,
        required_experience_in_months: null,
        experience_mentioned: true,
        experience_preferred: false,
      },
      job_required_skills: [
        'React.js',
        'Redux',
        'JavaScript',
        'HTML',
        'CSS',
        'RESTful API',
      ],
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
      job_highlights: {
        Qualifications: [
          'Proficient in React.js and its core principles',
          'Strong proficiency in JavaScript, HTML, and CSS',
          'Experience with state management libraries such as Redux or MobX',
          'Familiarity with RESTful APIs and asynchronous request handling',
          'Solid understanding of web fundamentals and cross-browser compatibility',
          'Knowledge of modern front-end build pipelines and tools',
          'Experience with version control systems such as Git',
          'Strong problem-solving skills and attention to detail',
          'Excellent communication and teamwork skills',
          'A proven track record of delivering high-quality software on time',
        ],
      },
      job_job_title: null,
      job_posting_language: 'en',
      job_onet_soc: '15113400',
      job_onet_job_zone: '3',
    },
    {
      employer_name: 'RemoteWorker US',
      employer_logo:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPmX_kOxfDz-v8rWg03-lIv68NbkYv-jMGKeOY&s=0',
      employer_website: null,
      employer_company_type: null,
      job_publisher: 'LinkedIn',
      job_id: 'GB5ocL4cT1UAAAAAAAAAAA==',
      job_employment_type: 'FULLTIME',
      job_title: 'Ruby/React developer - Remote',
      job_apply_link:
        'https://www.linkedin.com/jobs/view/ruby-react-developer-remote-at-remoteworker-us-3701338913',
      job_apply_is_direct: false,
      job_apply_quality_score: 0.5462,
      job_description:
        'Great opportunity with an innovative SaaS company!\n\nThis Jobot Job is hosted by: Shokie Banerjee\n\nAre you a fit? Easy Apply now by clicking the "Apply Now" button and sending us your resume.\n\nSalary: $100,000 - $145,000 per year\n\nA bit about us:\n\nWe are seeking a highly talented and motivated Ruby/React Developer to join our team. This is a permanent, full-time position with the flexibility to work remotely. The successful candidate will play a crucial role in the development and maintenance of our SaaS platform, which is designed to revolutionize operations in the manufacturing industry. You will be part of a team that believes in active participation and encourages diversity of thought and innovative solutions. If you are passionate about creating high-quality software and want to be part of a dynamic, fast-paced environment, this is the perfect opportunity for you.\n\nWhy join us?\n\nGreat benefits!\n\nGrowing company!\n\nChallenging Technology!\n\nJob Details\n\nJob Details:\n\nResponsibilities:\n• Develop, test, and maintain robust, scalable, high-quality software solutions using Ruby, React, and GraphQL.\n• Collaborate with cross-functional teams to define, design, and ship new features.\n• Work closely with product management to conceptualize, build, test and realize products.\n• Participate in agile development processes in SDLC, including sprint planning, iterative development, estimations, and design sessions.\n• Ensure the best possible performance, quality, and responsiveness of applications.\n• Identify and correct bottlenecks and fix bugs.\n• Actively contribute to team and company standards.\n• Continually research and evaluate emerging technologies to stay ahead of the curve.\n\nQualifications:\n• A Bachelor\'s degree in Computer Science, Information Technology, or a related field is required.\n• A minimum of 3 years of experience in software development with a strong command of Ruby and React.\n• Proven experience with SaaS platforms, GraphQL, and other related technologies.\n• Solid understanding of object-oriented programming, data structures, and algorithms.\n• Strong understanding of software development principles, capabilities, and limitations.\n• Experience with Agile/Scrum development methodologies.\n• Excellent problem-solving skills with a creative and analytical mind.\n• Strong written and verbal communication skills.\n• Ability to work independently and as part of a team in a remote setting.\n• Strong attention to detail and a commitment to producing high-quality software solutions.\n\nThis is a fantastic opportunity to contribute to a forward-thinking company and help shape its future. We value our employees and offer a competitive salary, comprehensive benefits, and opportunities for professional growth. If you meet the above qualifications and are ready to be a part of our team, we would love to hear from you.\n\nInterested in hearing more? Easy Apply now by clicking the "Apply Now" button.',
      job_is_remote: true,
      job_posted_at_timestamp: 1692738928,
      job_posted_at_datetime_utc: '2023-08-22T21:15:28.000Z',
      job_city: 'Indianapolis',
      job_state: 'IN',
      job_country: 'US',
      job_latitude: 39.768402,
      job_longitude: -86.158066,
      job_benefits: null,
      job_google_link:
        'https://www.google.com/search?gl=us&hl=en&rciv=jb&q=react&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=react&htidocid=GB5ocL4cT1UAAAAAAAAAAA%3D%3D',
      job_offer_expiration_datetime_utc: '2023-09-21T21:15:28.000Z',
      job_offer_expiration_timestamp: 1695330928,
      job_required_experience: {
        no_experience_required: false,
        required_experience_in_months: 36,
        experience_mentioned: true,
        experience_preferred: false,
      },
      job_required_skills: null,
      job_required_education: {
        postgraduate_degree: false,
        professional_certification: false,
        high_school: false,
        associates_degree: false,
        bachelors_degree: true,
        degree_mentioned: true,
        degree_preferred: true,
        professional_certification_mentioned: false,
      },
      job_experience_in_place_of_education: false,
      job_min_salary: null,
      job_max_salary: null,
      job_salary_currency: null,
      job_salary_period: null,
      job_highlights: {
        Qualifications: [
          "A Bachelor's degree in Computer Science, Information Technology, or a related field is required",
          'A minimum of 3 years of experience in software development with a strong command of Ruby and React',
          'Proven experience with SaaS platforms, GraphQL, and other related technologies',
          'Solid understanding of object-oriented programming, data structures, and algorithms',
          'Strong understanding of software development principles, capabilities, and limitations',
          'Experience with Agile/Scrum development methodologies',
          'Excellent problem-solving skills with a creative and analytical mind',
          'Strong written and verbal communication skills',
          'Ability to work independently and as part of a team in a remote setting',
          'Strong attention to detail and a commitment to producing high-quality software solutions',
        ],
        Responsibilities: [
          'The successful candidate will play a crucial role in the development and maintenance of our SaaS platform, which is designed to revolutionize operations in the manufacturing industry',
          'You will be part of a team that believes in active participation and encourages diversity of thought and innovative solutions',
          'Develop, test, and maintain robust, scalable, high-quality software solutions using Ruby, React, and GraphQL',
          'Collaborate with cross-functional teams to define, design, and ship new features',
          'Work closely with product management to conceptualize, build, test and realize products',
          'Participate in agile development processes in SDLC, including sprint planning, iterative development, estimations, and design sessions',
          'Ensure the best possible performance, quality, and responsiveness of applications',
          'Identify and correct bottlenecks and fix bugs',
          'Actively contribute to team and company standards',
          'Continually research and evaluate emerging technologies to stay ahead of the curve',
        ],
        Benefits: [
          'Salary: $100,000 - $145,000 per year',
          'We value our employees and offer a competitive salary, comprehensive benefits, and opportunities for professional growth',
        ],
      },
      job_job_title: null,
      job_posting_language: 'en',
      job_onet_soc: '15113400',
      job_onet_job_zone: '3',
    },
  ];
  const isLoading = false;
  const error = null;*/
  function handleNavigation(id: string) {
    navigation.navigate('JobDetails', {jobId: id});
  }
  return (
    <SafeAreaView style={GlobalStyles.container}>
      <View style={styles.jobs}>
        {isLoading ? (
          <ActivityIndicator size="large" color={Colors.black} />
        ) : error ? (
          <Text>{Constants.error}</Text>
        ) : data.length === 0 ? (
          <Text>{Constants.noJobsFound}</Text>
        ) : (
          <FlatList
            data={data}
            renderItem={({item}) => (
              <JobCard
                job={item}
                style={styles.card}
                handleNavigation={handleNavigation}
              />
            )}
            keyExtractor={item => item.job_id}
            contentContainerStyle={{
              rowGap: Spacing.dp_6,
            }}
            showsVerticalScrollIndicator={false}
            /*ListFooterComponent={
              <Pagination
                pageNum={pageNum}
                handlePagination={handlePagination}
              />
            }*/
            ListHeaderComponent={
              <View style={styles.headerContainer}>
                <Text style={styles.searchTitle}>{searchTerm}</Text>
                <Text style={styles.noOfSearchedJobs}>
                  {Constants.jobOppurtunity}
                </Text>
              </View>
            }
          />
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  jobs: {
    marginTop: Spacing.dp_8,
  },
  card: {
    width: '100%',
  },
  headerContainer: {
    width: '100%',
    marginLeft: Spacing.dp_4,
  },
  searchTitle: {
    fontFamily: FontFamilies.font_family_bold,
    fontSize: FontSizes.x_large,
    color: Colors.dark_text,
  },
  noOfSearchedJobs: {
    marginTop: 2,
    fontFamily: FontFamilies.font_family_medium,
    fontSize: FontSizes.medium,
    color: Colors.dark_text,
  },
});
