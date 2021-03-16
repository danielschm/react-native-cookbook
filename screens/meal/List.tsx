import {Text} from "../../components/Basic";
import * as React from "react";
import {FlatList, StyleSheet, TouchableHighlight} from "react-native";
import Meal from "./Meal";
import {View} from "../../components/Layout";
import {getThemeColor} from "../../components/Themed";

export type MealListProps = {
    meals: Meal[];
};

function onPress() {

}

export default function MealList(props: MealListProps) {
    return (
        <FlatList
            data={props.meals}
            renderItem={({item}) =>
                <TouchableHighlight underlayColor={getThemeColor('text')} onPress={onPress}>
                    <View style={styles.item}>
                        <Text>{item.name}</Text>
                    </View>
                </TouchableHighlight>
            }
        />
    );
}

const styles = StyleSheet.create({
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
});
