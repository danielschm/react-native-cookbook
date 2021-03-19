import * as React from "react";
import {FlatList, StyleSheet, TouchableHighlight} from "react-native";
import {Meal} from "./model/Meal";
import {Text} from "../../components/Basic";
import {Separator, View} from "../../components/Layout";
import {getThemeColor} from "../../components/Themed";
import {NativeStackNavigationProp} from "react-native-screens/native-stack";
import {Theme} from "../../stores/RootStore";

export type MealListProps = {
    meals?: Meal[];
    navigation: NativeStackNavigationProp<any>;
    theme: Theme
};

export function List({meals, navigation, theme}: MealListProps) {
    const styles = StyleSheet.create({
        item: {
            color: theme.getColor("text"),
            paddingHorizontal: 15,
            paddingVertical: 15,
            fontSize: 17,
        },
    });


    return (
        <FlatList
            data={meals}
            renderItem={({item}) =>
                <TouchableHighlight
                    underlayColor={theme.getColor('soft')}
                    onPress={() => {
                        navigation.navigate("Detail", {
                            meal: item
                        });
                    }}>
                    <View theme={theme}>
                        <Text theme={theme} style={styles.item}>{item.name}</Text>
                        <Separator theme={theme}/>
                    </View>
                </TouchableHighlight>
            }
        />
    );
}

