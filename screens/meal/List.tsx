import {Text} from "../../components/Basic";
import * as React from "react";
import {FlatList, StyleSheet, TouchableHighlight} from "react-native";
import Meal from "./Meal";
import {View} from "../../components/Layout";
import {getThemeColor} from "../../components/Themed";
import { NativeStackNavigationProp } from "react-native-screens/native-stack";

export type MealListProps = {
    meals: Meal[];
    navigation: NativeStackNavigationProp<any>;
};

export default function MealList({meals, navigation}: MealListProps) {
    return (
        <FlatList
            data={meals}
            renderItem={({item}) =>
                <TouchableHighlight
                    underlayColor={getThemeColor('text')}
                    onPress={() => {
                        navigation.navigate("Detail", {
                            id: item.id
                        });
                    }}>
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
