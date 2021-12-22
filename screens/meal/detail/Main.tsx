import * as React from "react";
import {MealAPI} from "./../Api";
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {useFocusEffect} from '@react-navigation/native';
import {Info} from "./Info";
import {Steps} from "./Steps";
import {Text, Title} from "../../../components/Basic";
import {Screen, View} from "../../../components/Layout";
import {useCurrentMealStore, useMealsStore, useRootStore} from "../../../providers/RootStoreProvider";
import {observer} from "mobx-react-lite";
import {Meal, FullMeal} from "../model/Meal";
import {Ingredients} from "./Ingredients";
import {TouchableHighlight} from "react-native";

const Tab = createMaterialTopTabNavigator();

type OverviewProps = {
    route: {
        params: {
            new?: boolean,
            meal?: Meal
        }
    }
}

export const Main = function Main({route}: OverviewProps) {
    const mealsStore = useMealsStore();
    const currentMealStore = useCurrentMealStore();
    const theme = useRootStore().theme;

    useFocusEffect(
        React.useCallback(() => {
            return () => {
                if (currentMealStore.changed) {
                    if (currentMealStore.meal.id === "") {
                        MealAPI.createMeal(currentMealStore.meal);
                    } else {
                        MealAPI.updateMeal(currentMealStore.meal);
                    }
                }
                currentMealStore.reset();
                MealAPI.getMeals().then(meals => {
                    mealsStore.setMeals(meals);
                });
            }
        }, [])
    );

    if (route.params.new) {
        currentMealStore.setNewMeal();
    } else if (!currentMealStore.loaded) {
        const meal = route.params.meal as FullMeal;
        currentMealStore.setMeal(meal);

        MealAPI.getMeal(meal.id)
            .then(meal => {
                currentMealStore.setMeal(meal);
                currentMealStore.setLoaded(true);
            })
            .catch(err => {
                currentMealStore.setLoaded(true);
                console.log(err);
            });
    }

    const MealTitle = observer(function MealTitle() {
        return <Title theme={theme}>{currentMealStore.meal.name || " "}</Title>;
    });

    const BottomButtons = observer(function BottomButtons() {
        return <View theme={theme} style={{
            // flexDirection: "row",
            position: currentMealStore.changed ? "absolute" : "relative",
            zIndex: 10,
            bottom: 0,
            width: "100%",
            display: currentMealStore.changed ? "flex" : "none",
            alignItems: "flex-end"
        }}>
            {/*<TouchableHighlight*/}
            {/*    style={{flexGrow: 5}}*/}
            {/*    underlayColor={"transparent"}*/}
            {/*    onPress={() => mealsStore.saveChanges()}>*/}
            {/*    <View theme={theme} style={{*/}
            {/*        paddingVertical: 16,*/}
            {/*        paddingHorizontal: "15%",*/}
            {/*        margin: 16,*/}
            {/*        borderRadius: 16,*/}
            {/*        borderWidth: 1,*/}
            {/*        borderColor: theme.getColor("softest"),*/}
            {/*        backgroundColor: theme.getColor("accept")*/}
            {/*    }}>*/}
            {/*        <Text theme={theme} style={{*/}
            {/*            textAlign: "center",*/}
            {/*            color: theme.getColor("text"),*/}
            {/*            fontWeight: "bold"*/}
            {/*        }}>Speichern</Text>*/}
            {/*    </View>*/}
            {/*</TouchableHighlight>*/}
            {/*<TouchableHighlight*/}
            {/*    style={{flexGrow: 1}}*/}
            {/*    onPress={() => mealsStore.resetChanges()}>*/}
            {/*    <View theme={theme} style={{*/}
            {/*        paddingVertical: 12,*/}
            {/*        backgroundColor: theme.getColor("softer")*/}
            {/*    }}>*/}
            {/*        <Text theme={theme} style={{*/}
            {/*            textAlign: "center"*/}
            {/*        }}>Abbrechen</Text>*/}

            {/*    </View>*/}
            {/*</TouchableHighlight>*/}
        </View>;
    });

    return (
        <Screen theme={theme}>
            <View theme={theme} style={{
                paddingBottom: 4
            }}>
                <MealTitle/>
            </View>
            <Tab.Navigator>
                <Tab.Screen
                    name="Info"
                    component={Info}
                    options={{tabBarLabel: 'Info'}}
                />
                <Tab.Screen
                    name="Ingredients"
                    component={Ingredients}
                    options={{tabBarLabel: 'Zutaten'}}
                />
                <Tab.Screen
                    name="Steps"
                    component={Steps}
                    options={{tabBarLabel: 'Schritte'}}
                />
            </Tab.Navigator>
            <BottomButtons/>
        </Screen>
    );
};