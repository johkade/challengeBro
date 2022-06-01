import React, {useState} from "react";
import {StyleSheet, TextInput, TouchableOpacity, View, ViewStyle} from "react-native";
import {ACTIVE_OPACITY, BORDER_RADIUS, SPACE} from "../../style/theme/misc";
import CIcon from "../cIcon/cIcon";
import useTheme from "../../style/theme/hooks/useTheme";
import {FC} from "../../style/theme/fontConfig";
import useSearchResultsVisible from "../../nav/util/useSearchResultsVisible";

type Props = {
    style?: ViewStyle;
    setSearchKey: (text: string) => void;
}

const SearchBar = ({style, setSearchKey}: Props) => {
    const theme = useTheme();
    const [isActive, setIsActive] = useState(false);
    const {setSearchResultsVisible} = useSearchResultsVisible();

    const onChange = (text: string) => {
        setSearchKey(text)
        setSearchResultsVisible(!!text.length)
    }

    return (
        <View>
        <View style={[styles.container, {backgroundColor: theme.card}, style]}>
            <CIcon icon={'search'} size={24} color={isActive ? theme.cardActive : theme.fontStd}/>
            <TextInput style={[styles.textInput, {color: theme.fontStd}]} placeholder={'Type to search'} onChangeText={onChange} onFocus={() => setIsActive(true)}
                       onBlur={() => setIsActive(false)}/>
            <TouchableOpacity activeOpacity={ACTIVE_OPACITY} onPress={() => console.log("hi, this doesn't do anything...")}>
                <CIcon icon={'filter'} size={24} withBgColor={theme.cardDark} color={theme.fontInverse}
                       style={styles.filterIcon}/>
            </TouchableOpacity>
        </View>

        </View>
    )
}

export default SearchBar

const styles = StyleSheet.create({
    container: {
        borderRadius: BORDER_RADIUS.full,
        height: SPACE.searchBarHeight,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 17.25,
    },
    textInput: {
        flex: 1, alignSelf: 'stretch', marginHorizontal: SPACE.m8, ...FC.textL
    },
    filterIcon: {height: 56, justifyContent: 'center', alignItems: 'center'},
})
