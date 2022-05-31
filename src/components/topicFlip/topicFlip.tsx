import React from "react";
import useTheme from "../../style/theme/hooks/useTheme";
import {GestureResponderEvent, StyleSheet, TouchableOpacity, ViewStyle} from "react-native";
import CText from "../cText/cText";
import {FC} from "../../style/theme/fontConfig";
import CIcon from "../cIcon/cIcon";
import {ACTIVE_OPACITY} from "../../style/theme/misc";


type Props = {
    name: string;
    active?: boolean;
    variant?: 'small' | 'large';
    style?: ViewStyle;
    onPress?: (event: GestureResponderEvent) => void;
}

const TopicFlip = ({name, active, variant = 'small', style, onPress}: Props) => {
    const theme = useTheme();

    const small = variant === 'small';

    const dynamicContainerStyles = {
        backgroundColor: small ? theme.cardDark : active ? theme.cardActive : theme.card,
        paddingHorizontal: small ? 12 : 20,
        paddingVertical: small ? 6 : 10,
    }
    const fontConfig = small ? FC.textS : FC.textL;
    const fontColor = small || active ? theme.fontInverse : theme.fontStd

    const containerOnPress = small ? undefined : onPress;
    const iconOnPress = small ? onPress : undefined;

    return (
        <TouchableOpacity style={[style, dynamicContainerStyles, styles.container]} onPress={containerOnPress}
                          activeOpacity={small ? 1 : ACTIVE_OPACITY}>
            <CText text={name} fontConfig={fontConfig} color={fontColor}/>
            {small && (<TouchableOpacity onPress={iconOnPress} activeOpacity={1}>
                <CIcon icon={'close'} size={fontConfig.lineHeight} style={styles.icon} color={fontColor}/>
            </TouchableOpacity>)}
        </TouchableOpacity>
    )
}

export default TopicFlip;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 1000
    },
    icon: {
        marginLeft: 10,
    }
})
