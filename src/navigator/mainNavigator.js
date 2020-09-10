import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import NotificationList100398Navigator from '../features/NotificationList100398/navigator';
import Settings100397Navigator from '../features/Settings100397/navigator';
import Settings100389Navigator from '../features/Settings100389/navigator';
import UserProfile100387Navigator from '../features/UserProfile100387/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
NotificationList100398: { screen: NotificationList100398Navigator },
Settings100397: { screen: Settings100397Navigator },
Settings100389: { screen: Settings100389Navigator },
UserProfile100387: { screen: UserProfile100387Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
