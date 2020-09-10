import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings100460Navigator from '../features/Settings100460/navigator';
import UserProfile100458Navigator from '../features/UserProfile100458/navigator';
import UserProfile100427Navigator from '../features/UserProfile100427/navigator';
import Tutorial100426Navigator from '../features/Tutorial100426/navigator';
import NotificationList100398Navigator from '../features/NotificationList100398/navigator';
import Settings100397Navigator from '../features/Settings100397/navigator';
import Settings100389Navigator from '../features/Settings100389/navigator';
import UserProfile100387Navigator from '../features/UserProfile100387/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings100460: { screen: Settings100460Navigator },
UserProfile100458: { screen: UserProfile100458Navigator },
UserProfile100427: { screen: UserProfile100427Navigator },
Tutorial100426: { screen: Tutorial100426Navigator },
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
