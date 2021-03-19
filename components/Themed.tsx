import * as React from 'react';

import Colors from '../constants/Colors';
import Fonts from "../constants/Fonts";
import useColorScheme from '../hooks/useColorScheme';
import {Theme} from "../stores/RootStore";

function useThemeColor(
    colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
    const theme = useColorScheme();
    return Colors[theme][colorName];
}

export function getThemeColor(
    colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
    return useThemeColor(colorName);
}

export function getFontSize(fontName: keyof typeof Fonts) {
    return Fonts[fontName];
}

export function getTheme() : Theme {
    const theme = useColorScheme();
    return new Theme(Colors[theme]);
}

export type ThemeProps = {
    theme: Theme
};