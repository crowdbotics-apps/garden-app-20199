import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Tutorial100568Navigator from '../features/Tutorial100568/navigator';
import NotificationList100540Navigator from '../features/NotificationList100540/navigator';
import Settings100539Navigator from '../features/Settings100539/navigator';
import Settings100531Navigator from '../features/Settings100531/navigator';
import UserProfile100529Navigator from '../features/UserProfile100529/navigator';
import UserProfile100498Navigator from '../features/UserProfile100498/navigator';
import Tutorial100497Navigator from '../features/Tutorial100497/navigator';
import NotificationList100469Navigator from '../features/NotificationList100469/navigator';
import Settings100468Navigator from '../features/Settings100468/navigator';
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
Tutorial100568: { screen: Tutorial100568Navigator },
NotificationList100540: { screen: NotificationList100540Navigator },
Settings100539: { screen: Settings100539Navigator },
Settings100531: { screen: Settings100531Navigator },
UserProfile100529: { screen: UserProfile100529Navigator },
UserProfile100498: { screen: UserProfile100498Navigator },
Tutorial100497: { screen: Tutorial100497Navigator },
NotificationList100469: { screen: NotificationList100469Navigator },
Settings100468: { screen: Settings100468Navigator },
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
