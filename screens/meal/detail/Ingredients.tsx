import * as React from "react";
import {ScrollView, View} from "react-native";
import {FormContainer, FormElement, Screen, Separator} from "../../../components/Layout";
import {observer} from "mobx-react-lite";
import {useCurrentMealStore, useRootStore} from "../../../providers/RootStoreProvider";
import {IconTextInputContainer} from "../../../components/IconTextInputContainer";
import {TextInput} from "../../../components/Basic";

export const Ingredients = observer(function Ingredients() {
    const mealStore = useCurrentMealStore();
    const theme = useRootStore().theme;

    const ExistingIngredients = observer(function ExistingIngredients() {
        if (!mealStore.ingredients) {
            return <View/>;
        }

        return <>
            {
                mealStore.ingredients
                    .slice()
                    .sort((a, b) => a.position - b.position)
                    .map(ingredient => {
                        return <View key={ingredient.position}>
                            <FormElement theme={theme}>
                                <IconTextInputContainer
                                    theme={theme}
                                    icon={"remove"}
                                    onIconPress={() => {
                                        mealStore.removeIngredient(ingredient.position);
                                    }}>
                                    <TextInput
                                        theme={theme}
                                        value={ingredient.text}
                                        onChangeText={(text: string) => {
                                            ingredient.text = text;
                                            mealStore.updateIngredients();
                                        }}
                                        onSubmitEditing={() => {
                                            mealStore.updateIngredients();
                                        }}/>
                                </IconTextInputContainer>
                            </FormElement>
                            <Separator theme={theme}/>
                        </View>
                    })
            }
        </>
    });

    const IngredientListTextInput = observer(function IngredientListTextInput() {
        return <IconTextInputContainer
            theme={theme}
            icon={"add"}
            onIconPress={() => {
                mealStore.addCurrentIngredientToMeal();
                mealStore.setCurrentIngredient("");
            }}>
            <TextInput
                blurOnSubmit={false}
                placeholder={"Zutat hinzufügen"}
                theme={theme}
                value={mealStore.currentIngredient}
                onChangeText={(text: string) => mealStore.setCurrentIngredient(text)}
                onSubmitEditing={function () {
                    mealStore.addCurrentIngredientToMeal();
                    mealStore.setCurrentIngredient("");
                }}/>
        </IconTextInputContainer>;
    });

    return (
        <Screen theme={theme}>
            <ScrollView>
                <FormContainer theme={theme}>
                    <FormElement theme={theme}>
                        <IngredientListTextInput/>
                    </FormElement>
                    <Separator theme={theme}/>
                    <ExistingIngredients/>
                </FormContainer>
            </ScrollView>
        </Screen>
    );
})