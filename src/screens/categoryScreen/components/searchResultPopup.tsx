import React from "react";
import {FlatList, StyleSheet, View} from "react-native";
import {BORDER_RADIUS, SPACE} from "../../../style/theme/misc";
import useTheme from "../../../style/theme/hooks/useTheme";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import Topic from "../../../data/types/topic";
import CText from "../../../components/cText/cText";
import {FC} from "../../../style/theme/fontConfig";
import TopicResult from "../../../components/topicResult/topicResult";

type Props = {
    searchKey: string;
    results: Topic[];
    onPressResult: (id: string) => void;
}

type RenderItemParams = {
    item: Topic;
    index: number;

}
const baseTop = SPACE.topPadding + SPACE.searchBarHeight + SPACE.m8 + SPACE.xxs1 + SPACE.xxl32 * 2 + 26;

const SearchResultPopup = ({results, searchKey, onPressResult}: Props) => {
    const theme = useTheme();
    const {top: topInset} = useSafeAreaInsets();
    const top = topInset + baseTop;

    const renderResult = ({item}: RenderItemParams) => {
        return (
            <TopicResult name={item.id} id={item.id} key={item.id} style={styles.result} onPress={onPressResult}/>
        )
    }

    return (<View style={[styles.container, {backgroundColor: theme.background, top}]}>
        {!results.length && (
            <CText text={`No results for ${searchKey} 😢`} fontConfig={FC.textL} style={styles.noResultsMessage}/>
        )}
        {(!!results.length && (
            <FlatList data={results} renderItem={renderResult}/>
        ))}
    </View>)
}

export default SearchResultPopup;

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        top: SPACE.searchBarHeight + SPACE.m8,
        borderRadius: BORDER_RADIUS.m,
        minHeight: 100,
        maxHeight: 200,
        left: SPACE.sidePadding, right: SPACE.sidePadding,
        elevation: 12,
        shadowColor: '#000',
        shadowOpacity: .5,
        shadowRadius: 20,
        shadowOffset: {
            width: 0,
            height: 0,
        },
        boxShadow: `${0}px ${0}px ${20}px #3341551F`,
        paddingVertical: SPACE.l16,
        paddingHorizontal: SPACE.m8
    },
    noResultsMessage: {
        alignSelf: 'center',
    },
    result: {
        flex: 1,
        marginBottom: SPACE.m8,
    }
})
