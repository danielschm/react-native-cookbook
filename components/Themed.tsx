import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';

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

export type ThemeProps = {
    lightColor?: string;
    darkColor?: string;
};