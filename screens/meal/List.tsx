import * as React from "react";
import {FlatList, StyleSheet, TouchableHighlight} from "react-native";
import Meal from "./Meal";
import {Text} from "../../components/Basic";
import {Separator, View} from "../../components/Layout";
import {getThemeColor} from "../../components/Themed";
import {NativeStackNavigationProp} from "react-native-screens/native-stack";
import { SearchBar } from 'react-native-elements';


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
                    <View>
                        <Text style={styles.item}>{item.name}</Text>
                        <Separator/>
                    </View>
                </TouchableHighlight>
            }
        />
    );
}

const styles = StyleSheet.create({
    item: {
        fontFamily: "SFProText-Regular",
        padding: 10,
        fontSize: 17,
        height: 44,
    },
});
