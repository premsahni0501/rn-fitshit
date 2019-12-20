import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomePage from './pages/HomePage';
import StatisticPage from './pages/StatisticPage';

const AppStack = createStackNavigator({
  Home: HomePage,
});
const RootAppStack = createStackNavigator(
  {
    Main: {
      screen: AppStack,
    },
    StatModal: {
      screen: StatisticPage,
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
  },
);
export default createAppContainer(RootAppStack);
