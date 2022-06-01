import React from "react";
import CText from "../../../components/cText/cText";
import {FC} from "../../../style/theme/fontConfig";
import useTheme from "../../../style/theme/hooks/useTheme";
import {FlatList, Platform, StyleSheet, TouchableOpacity, View} from "react-native";
import {SPACE} from "../../../style/theme/misc";
import CIcon from "../../../components/cIcon/cIcon";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import useSetTheme from "../../../style/theme/hooks/useSetTheme";
import TopicFlip from "../../../components/topicFlip/topicFlip";
import SearchBar from "../../../components/searchBar/searchBar";

type Props = {
    selectedTopicIds: string[],
    onPressRemoveTopic: (id: string) => void;
    setSearchKey: (text: string) => void;
}
type RenderItemParams = {
    item: string;
    index: number;
}


const HeaderSection = ({selectedTopicIds = [], onPressRemoveTopic, setSearchKey}: Props) => {
    const theme = useTheme();
    const {toggleTheme} = useSetTheme();
    const {top} = useSafeAreaInsets();
    const paddingTop = top + SPACE.topPadding
    const renderTopics = ({item}:RenderItemParams) => {
        return (
            <TopicFlip name={item} id={item} style={styles.flip} onPressRemove={onPressRemoveTopic}/>
        )
    }

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
            <SearchBar style={styles.searchBar} setSearchKey={setSearchKey}/>
            <FlatList data={selectedTopicIds} renderItem={renderTopics} horizontal showsHorizontalScrollIndicator={Platform.OS === 'web'} contentContainerStyle={styles.flatListContent}/>
        </View>
    )
}

export default HeaderSection;

const styles = StyleSheet.create({
    container: {position: 'absolute', width: '100%'},
    topRow: {flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: SPACE.sidePadding, },
    header: {marginBottom: SPACE.m8},
    infoText: {marginBottom: SPACE.xl32, paddingHorizontal: SPACE.sidePadding, },
    flip: {marginRight: SPACE.m8},
    flatListContent: {
        paddingLeft: SPACE.sidePadding,
        paddingRight: SPACE.sidePadding - SPACE.m8,
        paddingBottom: SPACE.m8,
    },
    searchBar: {
        marginHorizontal: SPACE.sidePadding,
        marginBottom: SPACE.m8,
    }
})
