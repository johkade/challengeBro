import React from "react";
import Ionicons from '@expo/vector-icons/Ionicons';
import useTheme from "../../style/theme/hooks/useTheme";


type Icons = 'filter' | 'chevron-down' | 'chevron-up' | 'close' | 'add'  | 'search'

type Props = {
    icon: Icons;
    size?: number;
    color?: string;
}

const CIcon = ({icon, size=32, color}: Props) => {
    const theme = useTheme();

    // @ts-ignore --> TODO: fix this later (weird warning )
    return (<Ionicons name={icon} size={size} color={color ?? theme.fontStd} />)
}

export default CIcon;
