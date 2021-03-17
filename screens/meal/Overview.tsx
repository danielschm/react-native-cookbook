import * as React from 'react';
import List from "./List";
import {ScrollView} from "react-native";
import MealAPI from "./Api";
import {ActionButton, SearchBar, Title} from "../../components/Basic";
import {Screen} from "../../components/Layout";
import {observer} from "mobx-react-lite";
import {useMealsStore} from "../../providers/RootStoreProvider";

export default function Overview({navigation}: any) {
    const mealsStore = useMealsStore();

    const MealList = observer(function MealList() {
        const mealsStore = useMealsStore();

        return (
            <List meals={mealsStore.meals} navigation={navigation}/>
        );
    });

    MealAPI.getMeals().then(meals => {
        mealsStore.setMeals(meals);
    });

    return (
        <Screen>
            <Title>Meine Rezepte</Title>
            <SearchBar/>
            <ActionButton
                onPress={() => {
                    navigation.navigate("Detail")
                }}
            />
            <ScrollView>
                <MealList/>
            </ScrollView>
        </Screen>
    );
}
