import * as React from "react";
import {ScrollView} from "react-native";
import {ButtonGroup, TextInput, Title} from "../../../components/Basic";
import {FormContainer, FormElement, Screen, Separator} from "../../../components/Layout";
import Meal from "../Meal";

export default function Steps(meal: Meal) {
    return (
        <Screen>
            <ScrollView>
                <Separator/>
            </ScrollView>
        </Screen>
    );
}