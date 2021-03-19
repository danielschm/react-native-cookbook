import * as React from "react";
import {ScrollView} from "react-native";
import {ButtonGroup, TextInput} from "../../../components/Basic";
import {FormContainer, FormElement, Screen, Separator} from "../../../components/Layout";
import {observer} from "mobx-react";
import {useCurrentMealStore, useRootStore} from "../../../providers/RootStoreProvider";
import {IconTextInputContainer} from "../../../components/IconTextInputContainer";
import {useEffect, useRef} from "react";

export const Info = observer(function Info() {
    const mealStore = useCurrentMealStore();
    const theme = useRootStore().theme;
    const meal = mealStore.meal;

    useEffect(() => {
        // @ts-ignore
        inputRef.current.focus();
    }, []);

    const inputRef = useRef();

    return (
        <Screen theme={theme}>
            <ScrollView>
                <FormContainer theme={theme}>
                    <FormElement theme={theme}>
                        <TextInput
                            theme={theme}
                            placeholder={"Name"}
                            onChangeText={text => mealStore.setName(text)}
                            defaultValue={meal.name}/>
                    </FormElement>
                    <Separator theme={theme}/>
                    <FormElement theme={theme} label={"Dauer"}>
                        <ButtonGroup
                            customTheme={theme}
                            selectedIndex={mealStore.lengthIndex}
                            onPress={(index) => {mealStore.setLengthByIndex(index)}}
                            buttons={["Kurz", "Mittel", "Lang"]}/>
                    </FormElement>
                    <Separator theme={theme}/>
                    <FormElement theme={theme}>
                        <IconTextInputContainer
                            theme={theme}
                            icon={"add"}
                            onIconPress={() => {}}>
                            <TextInput
                                theme={theme}
                                innerRef={inputRef}
                                placeholder={"Tags"}/>
                        </IconTextInputContainer>
                    </FormElement>
                </FormContainer>
            </ScrollView>
        </Screen>
    );
});