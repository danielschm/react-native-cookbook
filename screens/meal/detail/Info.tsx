import * as React from "react";
import {ScrollView} from "react-native";
import {ButtonGroup, TextInput, Title} from "../../../components/Basic";
import {FormContainer, FormElement, Screen, Separator} from "../../../components/Layout";
import {observer} from "mobx-react";
import {useCurrentMealStore} from "../../../providers/RootStoreProvider";

export const Info = observer(function Info() {
    const meal = useCurrentMealStore().meal;

    return (
        <Screen>
            <ScrollView>
                <FormContainer>
                    <FormElement>
                        <TextInput placeholder={"Name"} value={meal?.name}/>
                    </FormElement>
                    <Separator/>
                    <FormElement label={"Dauer"}>
                        <ButtonGroup selectedIndex={0} buttons={["Kurz", "Mittel", "Lang"]}/>
                    </FormElement>
                    <Separator/>
                    <FormElement>
                        <TextInput placeholder={"Tags"}/>
                    </FormElement>
                    <Separator/>
                </FormContainer>
            </ScrollView>
        </Screen>
    );
});