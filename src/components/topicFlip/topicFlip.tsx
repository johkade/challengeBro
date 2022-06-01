import React from "react";
import useTheme from "../../style/theme/hooks/useTheme";
import {StyleSheet, TouchableOpacity, ViewStyle} from "react-native";
import CText from "../cText/cText";
import {FC} from "../../style/theme/fontConfig";
import CIcon from "../cIcon/cIcon";
import {ACTIVE_OPACITY, BORDER_RADIUS, SPACE} from "../../style/theme/misc";

const noop = () => {
};
type Props = {
    name: string;
    active?: boolean;
    variant?: 'small' | 'large';
    style?: ViewStyle;
    id: string;
    onPress?: (id: string) => void;
    onPressRemove?: (id: string) => void;
}

const TopicFlip = ({name, active, variant = 'small', style, onPress = noop, id, onPressRemove = noop}: Props) => {
    const theme = useTheme();

    const small = variant === 'small';

    const dynamicContainerStyles = {
        backgroundColor: small ? theme.cardDark : active ? theme.cardActive : theme.card,
        paddingHorizontal: small ? 12 : 20,
        paddingVertical: small ? 6 : 10,
    }
    const fontConfig = small ? FC.textS : FC.textL;
    const fontColor = small || active ? theme.fontInverse : theme.fontStd

    const containerOnPress = small ? noop : onPress;
    const iconOnPress = small ? onPressRemove : noop;

    return (
        <TouchableOpacity style={[style, dynamicContainerStyles, styles.container]} onPress={() => containerOnPress(id)}
                          activeOpacity={small ? 1 : ACTIVE_OPACITY}>
            <CText text={name} fontConfig={fontConfig} color={fontColor}/>
            {small && (
                <TouchableOpacity onPress={() => iconOnPress(id)} activeOpacity={1}>
                    <CIcon icon={'close'} size={fontConfig.lineHeight} style={styles.icon} color={fontColor}/>
                </TouchableOpacity>
            )}
        </TouchableOpacity>
    )
}

export default TopicFlip;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: BORDER_RADIUS.full
    },
    icon: {
        marginLeft: SPACE.m8,
    }
})
