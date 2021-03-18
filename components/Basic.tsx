import {
    StyleProp,
    Text as DefaultText,
    TextInput as DefaultTextInput,
    TextStyle, TouchableHighlight, View,
    ViewStyle
} from "react-native";

import * as React from "react";
import {ThemeProps, getThemeColor, getFontSize} from "./Themed";
import {
    SearchBar as DefaultSearchBar,
    ButtonGroup as DefaultButtonGroup,
    ButtonGroupProps,
    Icon
} from 'react-native-elements';
import {Ionicons} from "@expo/vector-icons";
import {IconProps} from "@expo/vector-icons/build/createIconSet";

export type TextProps = ThemeProps & DefaultText['props'];
export type TextInputProps = ThemeProps & DefaultTextInput['props'];

export function Text(props: TextProps) {
    return <DefaultText style={{
        color: getThemeColor('text'),
        fontSize: getFontSize("text"),
        fontFamily: "SFProText-Regular"
    }} {...props} />;
}

export function Title(props: TextProps) {
    return <DefaultText style={{
        marginHorizontal: 20,
        marginTop: 20,
        color: getThemeColor('text'),
        fontSize: getFontSize("title"),
        fontFamily: "SFProDisplay-Bold",
    }} {...props} />;
}

export function TextInput(props: TextInputProps) {
    return (
        <DefaultTextInput
            placeholderTextColor={getThemeColor("semisoft")}
            style={{
                flexGrow: 1,
                fontSize: getFontSize("text"),
                color: getThemeColor("text"),
                fontFamily: "SFProText-Regular",
                paddingVertical: 15,
            }} {...props}/>
    );
}

type SearchBarBaseProps = {
    containerStyle?: StyleProp<ViewStyle>;
    inputContainerStyle?: StyleProp<ViewStyle>;
    inputStyle?: StyleProp<TextStyle>;
    onClear?(): void;
    onFocus?(): void;
    onBlur?(): void;
    onChangeText?(text: string): void;
    onCancel?(): void;
};

type SearchBarProps = SearchBarBaseProps & TextInputProps;

export function SearchBar(props: SearchBarProps) {
    return <DefaultSearchBar
        platform={"ios"}
        placeholder={"Suche"}
        inputContainerStyle={{
            height: 40,
            backgroundColor: getThemeColor("softer")
        }}
        containerStyle={{
            backgroundColor: "transparent"
        }}
        inputStyle={{
            fontSize: getFontSize("text"),
            color: getThemeColor("text")
        }} {...props}/>
}


export function ButtonGroup(props: ButtonGroupProps) {
    return <DefaultButtonGroup
        textStyle={{
            color: getThemeColor("text"),
        }}
        selectedTextStyle={{
            color: getThemeColor("text"),
        }}
        buttonStyle={{
            width: 60,
            backgroundColor: getThemeColor("softest")
        }}
        innerBorderStyle={{
            color: getThemeColor("softer")
        }}
        selectedButtonStyle={{
            backgroundColor: getThemeColor("background")
        }}
        containerStyle={{
            borderRadius: 5,
            borderWidth: 1,
            borderColor: getThemeColor("buttonGroupBorder")
        }} {...props}/>
}

type ActionButtonProps = {
    icon?: "add" | "checkmark"
} & TouchableHighlight["props"];

export function ActionButton(props: ActionButtonProps) {
    return <TouchableHighlight style={{
        width: 50,
        height: 50,
        padding: 13,
        backgroundColor: getThemeColor("tint"),
        borderRadius: 50,
        bottom: 20,
        right: 20,
        zIndex: 10,
        position: "absolute",

    }} {...props}>
        <Ionicons name={props.icon || "add"} size={24} color="white" />
    </TouchableHighlight>
}