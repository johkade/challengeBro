import React, {useEffect, useMemo, useState} from "react";
import {StyleSheet, TextInput, TouchableOpacity, View, ViewStyle} from "react-native";
import {ACTIVE_OPACITY, BORDER_RADIUS, SPACE} from "../../style/theme/misc";
import CIcon from "../cIcon/cIcon";
import useTheme from "../../style/theme/hooks/useTheme";
import {FC} from "../../style/theme/fontConfig";
import {topics} from "../../data/data";
import Topic from "../../data/types/topic";

type Props = {
    style?: ViewStyle
}

const SearchBar = ({style}: Props) => {
    const theme = useTheme();
    const [searchKey, setSearchKey] = useState('');
    const [isActive, setIsActive] = useState(false);
const [results, setResults] = useState<Topic[]>([]);


    useEffect(()=> {
        if(searchKey.length){
            const res = topics.filter(t => !t.name.includes(searchKey))
            setResults(res);
        }
    }, [searchKey])


    return (
        <View>
        <View style={[styles.container, {backgroundColor: theme.card}, style]}>
            <CIcon icon={'search'} size={24} color={isActive ? theme.cardActive : theme.fontStd}/>
            <TextInput style={[styles.textInput, {color: theme.fontStd}]} placeholder={'Type to search'} onChangeText={t => setSearchKey(t)} onFocus={() => setIsActive(true)}
                       onBlur={() => setIsActive(false)}/>
            <TouchableOpacity activeOpacity={ACTIVE_OPACITY} onPress={() => console.log("hi, this doesn't do anything...")}>
                <CIcon icon={'filter'} size={24} withBgColor={theme.cardDark} color={theme.fontInverse}
                       style={styles.filterIcon}/>
            </TouchableOpacity>
        </View>
            {searchKey.length > 0 && results.length > 0 && (<View style={[styles.searchResultsContainer, {backgroundColor: theme.background}]}>

            </View>)}
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
    searchResultsContainer: {
        position: "absolute",
        top: SPACE.searchBarHeight + SPACE.m8,
        borderRadius: BORDER_RADIUS.m,
        minHeight: 200,
        left: SPACE.sidePadding, right: SPACE.sidePadding,
        elevation: 12,
        shadowColor: '#000',
            shadowOpacity: .5,
            shadowRadius: 20,
            shadowOffset: {
                width: 0,
                height: 0,
            },



            boxShadow: `${12}px ${12}px ${12}px`

    }
})
