import * as React from "react";
import MealAPI from "./../Api";

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Info} from "./Info";
import Steps from "./Steps";
import {ActionButton, Title} from "../../../components/Basic";
import {Screen} from "../../../components/Layout";
import {useCurrentMealStore} from "../../../providers/RootStoreProvider";
import {observer} from "mobx-react";

const Tab = createMaterialTopTabNavigator();

type OverviewProps = {
    route: {
        params: {
            new: boolean,
            id: string
        }
    }
}

export default observer(function Overview({route}: OverviewProps) {
    const mealsStore = useCurrentMealStore();

    if (route.params?.new) {
        mealsStore.setNewMeal();
    } else {
        const id = route.params?.id;
        MealAPI.getMeal(id)
            .then(meal => {
                mealsStore.setMeal(meal);
            })
            .catch(err => {
                console.log(err);
            });
    }

    return (
        <Screen>
            <Title>{mealsStore.meal.name || " "}</Title>
            <ActionButton
                icon={"checkmark"}
                onPress={() => {
                }}/>
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
});