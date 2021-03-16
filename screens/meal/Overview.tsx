import * as React from 'react';
import List from "./List";
import {ScrollView} from "react-native";
import MealAPI from "./Api";

export default function Overview({navigation}: any) {
    const meals = MealAPI.getMeals();

    return (
        <ScrollView>
            <List meals={meals} navigation={navigation}/>
        </ScrollView>
    );
}
