import { createStackNavigator, createAppContainer, Easing } from 'react-navigation';
import Main from './Main';
import ChangeInfo from './ChangeInfo';
import OrderHistory from './OrderHistory';
import Authentication from './Authentication';

const MyTransition = (index, position) => {
    const inputRange = [index - 1, index, index + 1];
    const opacity = position.interpolate({
        inputRange,
        outputRange: [0.8, 1, 1],
    });

    const translateX = position.interpolate({
        inputRange: ([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]),
        outputRange: ([0, 0, 20, 40, 50, 60, 70, 80, 90, 100, 200, 300, 400, 1000]),
    });

    return {
        opacity,
        transform: [
            { translateX }
        ]
    };
};

const TransitionConfiguration = () => {
    return {
        // Define scene interpolation, eq. custom transition
        screenInterpolator: (sceneProps) => {
            console.log(sceneProps.position);

            const { position, scene } = sceneProps;
            const { index } = scene;

            return MyTransition(index, position);
        }
    }
};

const AppNavigator = createStackNavigator({
    MAIN: {
        screen: Main,
        navigationOptions: {
            title: "Main"
        }
    },
    AUTHENTICATION: {
        screen: Authentication,
        navigationOptions: {
            title: "Authentication"
        }
    },
    ORDER_HISTORY: {
        screen: OrderHistory,
        navigationOptions: {
            title: "Order History"
        }
    },
    CHANGE_INFO: {
        screen: ChangeInfo,
        navigationOptions: {
            title: "Change Info"
        }
    }
}, {
        initialRouteName: "MAIN",
    });

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
