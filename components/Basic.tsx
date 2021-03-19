import {
    StyleProp,
    Text as DefaultText,
    TextInput as DefaultTextInput,
    TextStyle, TouchableHighlight,
    ViewStyle
} from "react-native";

import * as React from "react";
import {ThemeProps} from "./Themed";
import {
    SearchBar as DefaultSearchBar,
    ButtonGroup as DefaultButtonGroup,
    ButtonGroupProps as DefaultButtonGroupProps
} from 'react-native-elements';
import {Ionicons} from "@expo/vector-icons";
import {MutableRefObject} from "react";
import {Theme} from "../stores/RootStore";

export type TextProps = ThemeProps & DefaultText['props'];

export function Text(props: TextProps) {
    return <DefaultText style={{
        color: props.theme.getColor('text'),
        fontSize: props.theme.getFontSize("text"),
        fontFamily: "SFProText-Regular"
    }} {...props} />;
}

export function Title(props: TextProps) {
    return <DefaultText style={{
        marginHorizontal: 20,
        marginTop: 10,
        color: props.theme.getColor('text'),
        fontSize: props.theme.getFontSize("title"),
        fontFamily: "SFProDisplay-Bold",
    }} {...props} />;
}

export type TextInputProps = ThemeProps & DefaultTextInput['props'] & {
    innerRef?:  MutableRefObject<any>
};

export function TextInput(props: TextInputProps) {
    return (
        <DefaultTextInput
            placeholderTextColor={props.theme.getColor("semisoft")}
            style={{
                flexGrow: 1,
                fontSize: props.theme.getFontSize("text"),
                color: props.theme.getColor("text"),
                fontFamily: "SFProText-Regular",
                paddingVertical: 15,
            }}
            ref={props.innerRef}
            {...props}
        />
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
    customTheme: Theme;
};

type SearchBarProps = SearchBarBaseProps & DefaultTextInput["props"];

export function SearchBar(props: SearchBarProps) {
    return <DefaultSearchBar
        platform={"ios"}
        placeholder={"Suche"}
        inputContainerStyle={{
            height: 40,
            backgroundColor: props.customTheme.getColor("softer")
        }}
        containerStyle={{
            backgroundColor: "transparent"
        }}
        inputStyle={{
            fontSize: props.customTheme.getFontSize("text"),
            color: props.customTheme.getColor("text")
        }} {...props}/>
}

type ButtonGroupProps = DefaultButtonGroupProps & {
    customTheme: Theme
};

export function ButtonGroup(props: ButtonGroupProps) {
    return <DefaultButtonGroup
        textStyle={{
            color: props.customTheme.getColor("text"),
        }}
        selectedTextStyle={{
            color: props.customTheme.getColor("text"),
        }}
        buttonStyle={{
            width: 60,
            backgroundColor: props.customTheme.getColor("softest")
        }}
        innerBorderStyle={{
            color: props.customTheme.getColor("softer")
        }}
        selectedButtonStyle={{
            backgroundColor: props.customTheme.getColor("background")
        }}
        containerStyle={{
            width: 180,
            borderRadius: 5,
            borderWidth: 1,
            borderColor: props.customTheme.getColor("buttonGroupBorder")
        }}
        {...props}/>
}

type ActionButtonProps = {
    icon?: "add" | "checkmark"
    theme: Theme
} & TouchableHighlight["props"];

export function ActionButton(props: ActionButtonProps) {
    return <TouchableHighlight underlayColor={props.theme.getColor("semisoft")} style={{
        width: 60,
        height: 60,
        padding: 18,
        backgroundColor: props.theme.getColor("tint"),
        borderRadius: 50,
        bottom: 20,
        right: 20,
        zIndex: 10,
        position: "absolute",

    }} {...props}>
        <Ionicons name={props.icon || "add"} size={24} color="white"/>
    </TouchableHighlight>
}