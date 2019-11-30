import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import HomeScreen from '../containers/Home';
import MedicationScreen from '../containers/Medication';
import MedicationDetailsScreen from '../containers/Medication/MedicationDetails';
import CalendarScreen from '../containers/Calendar';

//Icons
import HomeIcon from '../components/icons/Navigation/Home';
import MedicationIcon from '../components/icons/Navigation/Medication';
import CalendarIcon from '../components/icons/Navigation/Calendar';

const defaultNavigationOptions = ({
  navigation: {
    state: {routeName},
  },
}) => ({
  title: routeName,
  headerTintColor: 'black',
  headerStyle: {
    borderWidth: 1,
    borderColor: 'black',
  },
});

const HomeStack = createStackNavigator(
  {
    Home: {screen: HomeScreen},
  },
  {
    defaultNavigationOptions,
  },
);

const MedicationStack = createStackNavigator(
  {
    Medication: {screen: MedicationScreen},
    Details: {screen: MedicationDetailsScreen},
  },
  {
    defaultNavigationOptions,
  },
);

const CalendarStack = createStackNavigator(
  {
    Calendar: {screen: CalendarScreen},
  },
  {
    defaultNavigationOptions,
  },
);

export default createAppContainer(
  createBottomTabNavigator(
    {
      Home: {screen: HomeStack},
      Medication: {screen: MedicationStack},
      Calendar: {screen: CalendarStack},
    },
    {
      defaultNavigationOptions: ({navigation}) => ({
        tabBarIcon: ({focused, tintColor}) => {
          const {routeName} = navigation.state;

          switch (routeName) {
            case 'Home': {
              return <HomeIcon color={tintColor} />;
            }
            case 'Medication': {
              return <MedicationIcon color={tintColor} />;
            }
            case 'Calendar': {
              return <CalendarIcon color={tintColor} />;
            }
            default: {
              break;
            }
          }
        },
      }),
      tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      },
    },
  ),
);
