import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../screens/Home";
import ReviewDetails from "../screens/ReviewDetails"

const screens = {
    Home: {
        screen: Home,
        navigationOptions: {
            title: "Home",
            headerStyle : {
                backgroundColor: "white"
            }
        }
    },
    ReviewDetails: {
        screen: ReviewDetails,
        navigationOptions: {
            title: "Review Details",
            // headerStyle : {
            //     backgroundColor: "grey"
            // }
        }
    }
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: "#444",
        headerStyle : {
            backgroundColor: "skyblue",
            height: 60
        }
    }
});
export default createAppContainer(HomeStack);

