import React from "react";
import useTheme from "../../style/theme/hooks/useTheme";
import {StyleSheet, TouchableOpacity, ViewStyle} from "react-native";
import CText from "../cText/cText";
import {FC} from "../../style/theme/fontConfig";
import CIcon from "../cIcon/cIcon";
import {ACTIVE_OPACITY, BORDER_RADIUS, ICON_SIZE, SPACE} from "../../style/theme/misc";

const noop = () => {
};

type Props = {
    name: string;
    style?: ViewStyle;
    id: string;
    onPress?: (id: string) => void;
}

const fontConfig = FC.textL;

const TopicResult = ({name, style, onPress = noop, id}: Props) => {
    const theme = useTheme();

    const onPressWithId = () => onPress(id)

    return (
        <TouchableOpacity style={[style, styles.container]} onPress={onPressWithId}
                          activeOpacity={ACTIVE_OPACITY}>
            <CText text={name} fontConfig={fontConfig}/>
            <TouchableOpacity onPress={onPressWithId} activeOpacity={ACTIVE_OPACITY}>
                <CIcon icon={'add'} size={ICON_SIZE.m16} style={styles.icon} color={theme.fontInverse}
                       withBgColor={theme.cardActive}/>
            </TouchableOpacity>
        </TouchableOpacity>
    )
}

export default TopicResult;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    icon: {
        marginLeft: SPACE.m8,
        alignItems: 'center',
        justifyContent: 'center',
    }
})
