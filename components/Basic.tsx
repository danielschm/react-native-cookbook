import {Text as DefaultText, TextInput as DefaultTextInput} from "react-native";
import * as React from "react";
import {ThemeProps, getThemeColor} from "./Themed";

export type TextProps = ThemeProps & DefaultText['props'];
export type TextInputProps = ThemeProps & DefaultTextInput['props'];

export function Text(props: TextProps) {
    return <DefaultText style={{
        color: getThemeColor('text'),
        fontSize: 14,
        fontFamily: "SFProText-Regular"
    }} {...props} />;
}

export function Title(props: TextProps) {
    return <DefaultText style={{
        fontSize: 34,
        margin: 10,
        color: getThemeColor('text'),
        fontFamily: "SFProDisplay-Bold",
    }} {...props} />;
}

export function TextInput(props: TextInputProps) {
    return (
        <DefaultTextInput
            placeholderTextColor={getThemeColor("secondaryText")}
            style={{
                flexGrow: 1,
                fontSize: 14,
                fontFamily: "SFProText-Regular",
                paddingVertical: 15,
            }} {...props}/>
    );
}