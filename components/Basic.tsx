import {Text as DefaultText, TextInput as DefaultTextInput} from "react-native";
import * as React from "react";
import {ThemeProps, getThemeColor} from "./Themed";

export type TextProps = ThemeProps & DefaultText['props'];
export type TextInputProps = ThemeProps & DefaultTextInput['props'];

export function Text(props: TextProps) {
    const {style, ...otherProps} = props;
    const color = getThemeColor('text');
    return <DefaultText style={[{color}, style]} {...otherProps} />;
}

export function Title(props: TextProps) {
    const color = getThemeColor('text');
    return <DefaultText style={[{color}, {
        fontSize: 20,
        fontWeight: 'bold',
    }]} {...props} />;
}

export function TextInput(props: TextInputProps) {
    return (
        <DefaultTextInput style={{
            flexGrow: 1,
            paddingHorizontal: 20,
            paddingVertical: 10,
            borderRadius: 3,
            backgroundColor: getThemeColor("soft")
        }} {...props}/>
    );
}