import * as React from "react";
import {ScrollView} from "react-native";
import {TextInput, Title} from "../../components/Basic";
import {FormContainer, FormElement, Screen, Separator} from "../../components/Layout";
import {getThemeColor} from "../../components/Themed";
import MealAPI from "./Api";

export default function Overview({route, navigation}: any) {
    const meal = MealAPI.getMeal(route.params.id);

    return (
        <Screen>
            <Title>{meal.name}</Title>
            <ScrollView>
                <FormContainer>
                    <FormElement>
                        <TextInput placeholder={"Name"} value={meal.name}/>
                    </FormElement>
                    <Separator/>
                    <FormElement>
                        <TextInput placeholder={"Dauer"}/>
                    </FormElement>
                </FormContainer>
            </ScrollView>
        </Screen>
    );
}