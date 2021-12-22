import * as React from "react";
import {FlatList, FlatListProps, RefreshControl, StyleSheet, TouchableHighlight} from "react-native";
import {Meal} from "./model/Meal";
import {Text} from "../../components/Basic";
import {Separator, View} from "../../components/Layout";
import {getThemeColor} from "../../components/Themed";
import {NativeStackNavigationProp} from "react-native-screens/native-stack";
import {Theme} from "../../stores/RootStore";

export type MealListProps = {
    meals?: Meal[];
    navigation: NativeStackNavigationProp<any>;
    theme: Theme;
    refreshing: boolean;
    onRefresh: () => void;
};

export function List(props: MealListProps) {
    const styles = StyleSheet.create({
        item: {
            color: props.theme.getColor("text"),
            paddingHorizontal: 15,
            paddingVertical: 15,
            fontSize: 17,
        },
    });


    return (
        <FlatList
            data={props.meals}
            refreshing={props.refreshing}
            onRefresh={props.onRefresh}
            renderItem={({item}) =>
                <TouchableHighlight
                    underlayColor={props.theme.getColor('soft')}
                    onPress={() => {
                        props.navigation.navigate("Detail", {
                            meal: item
                        });
                    }}>
                    <View theme={props.theme}>
                        <Text theme={props.theme} style={styles.item}>{item.name}</Text>
                        <Separator theme={props.theme}/>
                    </View>
                </TouchableHighlight>
            }
        />
    );
}

