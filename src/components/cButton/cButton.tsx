import React from "react";
import useTheme from "../../style/theme/hooks/useTheme";
import {GestureResponderEvent, StyleSheet, TouchableOpacity} from "react-native";
import {ACTIVE_OPACITY, BORDER_RADIUS, SPACE} from "../../style/theme/misc";
import CText from "../cText/cText";
import {FC} from "../../style/theme/fontConfig";
import UnwrappedTheme from "../../style/theme/types/UnwrappedTheme";

type Props = {
    text: string,
    disabled?: boolean,
    isPrimary?: boolean,
    onPress: (event: GestureResponderEvent) => void
}

const CButton = ({text, disabled, isPrimary = true, onPress}: Props) => {
    const theme = useTheme();

    const bgColor = getButtonColorFromProps(disabled, isPrimary, theme);

    const dynamicStyle = [styles.container, {backgroundColor: bgColor}]
    const textColor = isPrimary ? theme.fontInverse : theme.fontStd;
    return (
        <TouchableOpacity activeOpacity={ACTIVE_OPACITY} style={dynamicStyle} disabled={disabled} onPress={onPress}>
            <CText text={text} fontConfig={FC.h4} color={textColor}/>
        </TouchableOpacity>
    )

}

export default CButton

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: SPACE.xl24,
        paddingVertical: SPACE.s12,
        borderRadius: BORDER_RADIUS.m,
    }
})

function getButtonColorFromProps(disabled = false, isPrimary = true, theme: UnwrappedTheme) {
    if (isPrimary) return disabled ? theme.cardInactive : theme.cardActive;
    return theme.card;
}
