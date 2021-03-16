import * as React from "react";
import {ScrollView} from "react-native";
import {TextInput} from "../../components/Basic";
import {FormElement} from "../../components/Layout";
import {getThemeColor} from "../../components/Themed";
import MealAPI from "./Api";

export default function Overview({route}: any) {
    const meal = MealAPI.getMeal(route.params.id);

    return (
        <ScrollView style={{backgroundColor: getThemeColor("background")}}>
            <FormElement label={"Name"}>
                <TextInput placeholder={"Name..."} value={meal.name}/>
            </FormElement>
            <FormElement label={"Dauer"}>
                <TextInput placeholder={"Dauer..."}/>
            </FormElement>
        </ScrollView>
    );
}