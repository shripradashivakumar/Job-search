import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationProp} from '@react-navigation/native';
import {StyleSheet} from 'react-native';
import Button from '../src/components/Button';
import Hamburger from '../src/assets/svg/hamburger.svg';
import {Colors, Spacing} from '../src/styles';
import JobDetails from '../src/jobDetails/JobDetails';
import Search from '../src/search/Search';
import {RootStackParamList, DrawerParamsList} from './navigate';
import DrawerScreen from '../src/drawer/drawerScreen';
import {DrawerActions} from '@react-navigation/native';

type HeaderProps = {
  navigation: NavigationProp<RootStackParamList & DrawerParamsList>;
};

const Stack = createStackNavigator<RootStackParamList>();

const Left = ({navigation}: HeaderProps) => {
  const handlePress = () => navigation.dispatch(DrawerActions.toggleDrawer());
  return (
    <Button
      buttonText={<Hamburger />}
      style={styles.leftHeader}
      onPress={handlePress}
    />
  );
};

export default function AppNavigator(): JSX.Element {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={DrawerScreen}
        options={({navigation}) => ({
          headerShadowVisible: false,
          // eslint-disable-next-line react/no-unstable-nested-components
          headerLeft: () => <Left navigation={navigation} />,
          headerTitle: '',
          headerStyle: {
            backgroundColor: Colors.primary,
          },
        })}
      />
      <Stack.Screen
        name="JobDetails"
        component={JobDetails}
        options={{
          headerShadowVisible: false,
          headerTitle: 'Job Details',
          headerStyle: {
            backgroundColor: Colors.primary,
          },
        }}
      />
      <Stack.Screen
        name="Search"
        component={Search}
        options={{
          headerShadowVisible: false,
          headerTitle: 'Search',
          headerStyle: {
            backgroundColor: Colors.primary,
          },
        }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  leftHeader: {
    borderWidth: 0,
    paddingHorizontal: Spacing.dp_2,
  },
});
