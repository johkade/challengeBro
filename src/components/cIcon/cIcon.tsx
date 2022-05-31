import React from "react";
import Ionicons from '@expo/vector-icons/Ionicons';
import useTheme from "../../style/theme/hooks/useTheme";
import {ViewStyle} from "react-native";


type Icons = 'filter' | 'chevron-down' | 'chevron-up' | 'close' | 'add'  | 'search'

type Props = {
    icon: Icons;
    size?: number;
    color?: string;
    style?: ViewStyle;
}

const CIcon = ({icon, size=32, color, style}: Props) => {
    const theme = useTheme();

    // @ts-ignore --> TODO: fix this later (weird warning )
    return (<Ionicons name={icon} size={size} color={color ?? theme.fontStd} style={style}/>)
}

export default CIcon;
