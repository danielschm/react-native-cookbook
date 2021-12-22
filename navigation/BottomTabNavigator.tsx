import {Ionicons} from '@expo/vector-icons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import {HomeScreen} from '../screens/home/HomeScreen';
import {Overview} from '../screens/meal/Overview';
import {Main} from '../screens/meal/detail/Main';
import {BottomTabParamList, HomeParamList, MealParamList} from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
    const colorScheme = useColorScheme();

    return (
        <BottomTab.Navigator
            initialRouteName="Home"
            tabBarOptions={{activeTintColor: Colors[colorScheme].tint}}>
            {/*<BottomTab.Screen*/}
            {/*    name="Home"*/}
            {/*    component={HomeNavigator}*/}
            {/*    options={{*/}
            {/*        tabBarLabel: "Home",*/}
            {/*        tabBarIcon: ({color}) => <TabBarIcon name="home" color={color}/>,*/}
            {/*    }}*/}
            {/*/>*/}
            <BottomTab.Screen
                name="Meal"
                component={MealNavigator}
                options={{
                    tabBarLabel: "Rezepte",
                    tabBarIcon: ({color}) => <TabBarIcon name="document-text" color={color}/>,
                }}
            />
        </BottomTab.Navigator>
    );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
    return <Ionicons size={30} style={{marginBottom: -3}} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const HomeStack = createStackNavigator<HomeParamList>();

function HomeNavigator() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    headerTransparent: true,
                    headerTitle: ""
                }}
            />
        </HomeStack.Navigator>
    );
}

const MealStack = createStackNavigator<MealParamList>();

function MealNavigator() {
    return (
        <MealStack.Navigator>
            <MealStack.Screen
                name="Overview"
                component={Overview}
                options={{
                    headerTransparent: true,
                    headerTitle: ""
                }}
            />
            <MealStack.Screen
                name="Detail"
                component={Main}
                options={{
                    headerTransparent: false,
                    headerTitle: "",
                    headerBackTitleVisible: true,
                    headerTruncatedBackTitle: "Meine Rezepte"
                }}
            />
        </MealStack.Navigator>
    );
}
