import React from "react";
import CText from "../../../components/cText/cText";
import {FC} from "../../../style/theme/fontConfig";
import useTheme from "../../../style/theme/hooks/useTheme";
import {StyleSheet, TouchableOpacity, View} from "react-native";
import {SPACE} from "../../../style/theme/misc";
import CIcon from "../../../components/cIcon/cIcon";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import useSetTheme from "../../../style/theme/hooks/useSetTheme";

const HeaderSection = () => {
    const theme = useTheme();
    const {toggleTheme} = useSetTheme();
    const {top} = useSafeAreaInsets();
    const paddingTop = top + SPACE.topPadding

    return (
        <View style={[styles.container, {backgroundColor: theme.background, paddingTop}]}>
            <View style={styles.topRow}>
                <CText text={'Category'} fontConfig={FC.h1} style={styles.header}/>
                <TouchableOpacity onPress={toggleTheme}>
                    <CIcon icon={'moon'} size={24}/>
                </TouchableOpacity>

            </View>

            <CText text={'Choose a topic best describes you'} fontConfig={FC.textS} color={theme.fontLight}
                   style={styles.infoText}/>
        </View>
    )
}

export default HeaderSection;

const styles = StyleSheet.create({
    container: {position: 'absolute', paddingHorizontal: SPACE.sidePadding, width: '100%'},
    topRow: {flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'},
    header: {marginBottom: SPACE.m8},
    infoText: {marginBottom: SPACE.xl32},
})
