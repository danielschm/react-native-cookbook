import * as React from "react";
import MealAPI from "./../Api";

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Info} from "./Info";
import Steps from "./Steps";
import {Title} from "../../../components/Basic";
import {Screen} from "../../../components/Layout";
import {useCurrentMealStore} from "../../../providers/RootStoreProvider";

const Tab = createMaterialTopTabNavigator();

export default function Overview({route}: any) {
    const id = route.params?.id;
    const mealsStore = useCurrentMealStore();

    MealAPI.getMeal(id).then(meal => {
        mealsStore.setMeal(meal);
    });

    return (
        <Screen>
            <Title>{mealsStore.meal.name || " "}</Title>
            <Tab.Navigator>
                <Tab.Screen
                    name="mealInfo"
                    component={Info}
                    options={{tabBarLabel: 'Info'}}
                />
                <Tab.Screen
                    name="mealSteps"
                    component={Steps}
                    options={{tabBarLabel: 'Arbeitsschritte'}}
                />
            </Tab.Navigator>
        </Screen>
    );
}