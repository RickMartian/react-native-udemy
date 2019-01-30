import PeoplePage from './src/pages/PeoplePage';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import PeopleDetailPage from './src/pages/PeopleDetailPage';
import { capitalizeFirstLetter } from './src/util';

const stackNavigator = createStackNavigator(
  {
    Main: {
      screen: PeoplePage
    },

    PeopleDetail: {
      screen: PeopleDetailPage,
      navigationOptions: ({ navigation }) => {
        const name = capitalizeFirstLetter(navigation.state.params.people.name.first);

        return {
          title: name,
          headerTitleStyle: {
            color: 'white',
            fontSize: 30
          }
        };
      }
    }
  },
  {
    initialRouteName: 'Main',

    defaultNavigationOptions: {
      title: 'People',
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: '#6ca2f7',
        borderBottomWidth: 1,
        borderBottomColor: '#C5C5C5'
      },

      headerTitleStyle: {
        color: 'white',
        fontSize: 30,
        flexGrow: 1,
        textAlign: 'center'
      }
    }
  }
);

const appContainer = createAppContainer(stackNavigator);

export default appContainer;
