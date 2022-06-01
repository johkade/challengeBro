import React from "react";
import {StyleSheet, View} from "react-native";
import useTheme from "../../../style/theme/hooks/useTheme";
import CButton from "../../../components/cButton/cButton";
import {SPACE} from "../../../style/theme/misc";

type Props = {
    nextStepEnabled: boolean
}

const FooterBar = ({nextStepEnabled = true}: Props) => {
    const theme = useTheme();

    const dynStyle = {
        borderColor: theme.border,
        backgroundColor: theme.background,
    }

    return (<View style={[styles.container, dynStyle]}>
        <CButton text={'Back'} onPress={() => console.log('there is no way back 🤷')} isPrimary={false}/>
        <CButton text={'Continue'} onPress={() => console.log('something cool happens 🔥')}
                 disabled={!nextStepEnabled}/>
    </View>)
}

export default FooterBar;

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 10,
        left: 0,
        right: 0,
        height: 76,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: SPACE.sidePadding,
        borderTopWidth: 1,
    }
})
