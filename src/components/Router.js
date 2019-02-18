import { createStackNavigator, createAppContainer } from 'react-navigation';
import Main from './Main';
import ChangeInfo from './ChangeInfo';
import OrderHistory from './OrderHistory';
import Authentication from './Authentication';

const AppNavigator = createStackNavigator({
    MAIN: {
        screen: Main,
        navigationOptions: {
            header: null,
        }
    },
    AUTHENTICATION: {
        screen: Authentication,
        navigationOptions: {
            header: null,
        }
    },
    ORDER_HISTORY: {
        screen: OrderHistory,
        navigationOptions: {
            header: null,
        }
    },
    CHANGE_INFO: {
        screen: ChangeInfo,
        navigationOptions: {
            header: null,
        }
    }
}, {
        initialRouteName: "MAIN",
    });

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
