import * as React from "react";
import {getFontSize, getThemeColor} from "./Themed";
import {TouchableHighlight, View} from "react-native";
import {Ionicons, MaterialIcons} from "@expo/vector-icons";
import {ViewProps} from "./Layout";
import {Text} from "./Basic";

type IconTextInputProps = {
    icon: "add" | "remove"
    onIconPress: Function
} & ViewProps;


export function IconTextInputContainer(props: IconTextInputProps) {
    let size = getFontSize("text") + 4;

    if (props.icon === "remove") {
        size += 2;
    }

    return (
        <View style={{
            flexDirection: "row",
            width: "100%"
        }}>
            {props.children}
            <View style={{
                height: "100%",
                justifyContent: "center"
            }}>
                <TouchableHighlight
                    onPress={() => {
                        props.onIconPress();
                    }}
                    underlayColor={getThemeColor("softest")}
                    style={{
                        width: size * 2,
                        height: size * 2,
                        padding: size / 2,
                    }}>
                    {
                        props.icon === "remove" ?
                            <MaterialIcons
                                name="cancel"
                                size={size}
                                color={getThemeColor("soft")}/> :
                            <Ionicons
                                name={"add"}
                                size={size}
                                color={getThemeColor("tint")}/>
                    }
                </TouchableHighlight>
            </View>
        </View>
    )
}