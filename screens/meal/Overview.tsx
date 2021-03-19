import * as React from 'react';
import {List} from "./List";
import {ScrollView, View, VirtualizedList} from "react-native";
import {MealAPI} from "./Api";
import {ActionButton, SearchBar, Title} from "../../components/Basic";
import {Screen} from "../../components/Layout";
import {observer} from "mobx-react-lite";
import {useMealsStore, useRootStore} from "../../providers/RootStoreProvider";

export const Overview = observer(function Overview({navigation}: any) {
    const mealsStore = useMealsStore();
    const theme = useRootStore().theme;

    MealAPI.getMeals().then(meals => {
        mealsStore.setMeals(meals);
    });

    const MealList = observer(function MealList() {
        return (
            <List
                theme={theme} meals={mealsStore.meals}
                navigation={navigation}/>
        );
    });

    const MealSearchBar = observer(function MealSearchBar() {
        return (
            <SearchBar
                customTheme={theme}
                value={mealsStore.filterText}
                onClear={() => mealsStore.clearFilter()}
                onChangeText={(text) => {
                    mealsStore.filter(text)
                }}/>
        );
    });

    return (
        <Screen theme={theme}>
            <View style={{marginTop: 40}}>
                <Title theme={theme}>Meine Rezepte</Title>
            </View>
            <MealSearchBar/>

            <ActionButton
                theme={theme}
                onPress={() => {
                    navigation.navigate("Detail", {new: true});
                }}/>
            <MealList/>
        </Screen>
    );
})
