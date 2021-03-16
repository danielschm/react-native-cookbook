import * as React from 'react';
import {Text as DefaultText} from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import {ViewProps} from "./Layout";

function useThemeColor(
    props: { light?: string; dark?: string },
    colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
    const theme = useColorScheme();
    const colorFromProps = props[theme];

    if (colorFromProps) {
        return colorFromProps;
    } else {
        return Colors[theme][colorName];
    }
}

export function getThemeColor(
    props: ViewProps,
    colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
    const {lightColor, darkColor} = props;
    return useThemeColor({light: lightColor, dark: darkColor}, colorName);
}

export type ThemeProps = {
    lightColor?: string;
    darkColor?: string;
};