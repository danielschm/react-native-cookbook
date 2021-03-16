import * as React from 'react';
import {Container, Separator} from "../../components/Layout";
import List from "./List";
import Meal from "./Meal";
import {ScrollView} from "react-native";

const meals = [
    new Meal(Math.random().toString(), "Test"),
    new Meal(Math.random().toString(), "Test"),
    new Meal(Math.random().toString(), "Test"),
    new Meal(Math.random().toString(), "Test"),
    new Meal(Math.random().toString(), "Test"),
    new Meal(Math.random().toString(), "Test"),
    new Meal(Math.random().toString(), "Test"),
    new Meal(Math.random().toString(), "Test"),
    new Meal(Math.random().toString(), "Test"),
    new Meal(Math.random().toString(), "Test"),
    new Meal(Math.random().toString(), "Test"),
    new Meal(Math.random().toString(), "Test"),
    new Meal(Math.random().toString(), "Test"),
    new Meal(Math.random().toString(), "Test"),
    new Meal(Math.random().toString(), "Test"),
    new Meal(Math.random().toString(), "Test"),
    new Meal(Math.random().toString(), "Test"),
    new Meal(Math.random().toString(), "Test"),
    new Meal(Math.random().toString(), "Test"),
    new Meal(Math.random().toString(), "Test"),
    new Meal(Math.random().toString(), "Test"),
    new Meal(Math.random().toString(), "Test"),
    new Meal(Math.random().toString(), "Test"),
    new Meal(Math.random().toString(), "Test"),
    new Meal(Math.random().toString(), "Test"),
];

export default function MealScreen() {
    return (
        <ScrollView>
            <List meals={meals}/>
        </ScrollView>
    );
}
