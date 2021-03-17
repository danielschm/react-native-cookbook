import * as React from 'react';
import List from "./List";
import {ScrollView, View} from "react-native";
import MealAPI from "./Api";
import {Title} from "../../components/Basic";
import {Screen} from "../../components/Layout";

export default function Overview({navigation}: any) {
    const meals = MealAPI.getMeals();

    return (
        <Screen>
            <Title>Meine Rezepte</Title>
            <ScrollView>
                <List meals={meals} navigation={navigation}/>
            </ScrollView>
        </Screen>
    );
}
