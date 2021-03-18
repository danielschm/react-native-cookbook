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

    MealAPI.getMeals().then(meals => {
        mealsStore.setMeals(meals);
    });

    const MealList = observer(function MealList() {
        return (
            <List meals={mealsStore.meals} navigation={navigation}/>
        );
    });

    const MealSearchBar = observer(function MealSearchBar() {
        return (
            <SearchBar
                value={mealsStore.filterText}
                onClear={() => mealsStore.clearFilter()}
                onChangeText={(text) => { mealsStore.filter(text)}}/>
        );
    });

    return (
        <Screen>
            <Title>Meine Rezepte</Title>
            <MealSearchBar/>
            <ActionButton
                onPress={() => {
                    navigation.navigate("Detail", { new: true });
                }}/>
            <ScrollView>
                <MealList/>
            </ScrollView>
        </Screen>
    );
}
