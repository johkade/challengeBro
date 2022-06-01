import React, {useEffect, useState} from "react";
import {FlatList, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, useWindowDimensions} from "react-native";
import {NavigationProp} from "@react-navigation/native";
import {SafeAreaView, useSafeAreaInsets} from "react-native-safe-area-context";
import {SPACE} from "../../style/theme/misc";
import FooterBar from "./components/footerBar";
import CategoryAccordion from "../../components/categoryAccordion/categoryAccordion";
import {categories, topics} from "../../data/data";
import Category from "../../data/types/category";
import getTopicsByCategoryId from "../../util/getters/getTopicsByCategoryId";
import useDataStore from "../../store/useDataStore";
import HeaderSection from "./components/headerSection";
import SearchResultPopup from "./components/searchResultPopup";
import useSearchResultsVisible from "../../nav/util/useSearchResultsVisible";
import Topic from "../../data/types/topic";

type ScreenProps = {
    navigation: NavigationProp<any, any>
}

type renderItemParams = {
    item: Category;
    index: number;
}

const baseTopPadding = SPACE.topPadding + SPACE.searchBarHeight + SPACE.m8 + SPACE.xl32 * 4 + 26;

const CategoryScreen = ({}: ScreenProps) => {
    const {top} = useSafeAreaInsets();
    const {selectedTopicIds, removeTopicById, toggleTopicById} = useDataStore();
    const {searchResultsVisible, setSearchResultsVisible} = useSearchResultsVisible();
    const [searchKey, setSearchKey] = useState('');
    const [searchResults, setSearchResults] = useState<Topic[]>([]);
    const onClickOutSide = () => setSearchResultsVisible(false);

    const {width} = useWindowDimensions();
    const marginHorizontal = width > 800 ? width * .2 : 0;

    const renderCategory = ({item}: renderItemParams) => {
        const topics = getTopicsByCategoryId(item.id);
        return (
            <CategoryAccordion name={item.name} topics={topics} key={item.id} onPressTopic={toggleTopicById}
                               selectedTopicIds={selectedTopicIds}/>
        )
    }

    const paddingTop = baseTopPadding + top;



    useEffect(() => {
        const filterByKey = (t: Topic) => t.name.toLowerCase().includes(searchKey.toLowerCase());
        const filterByAlreadySelected = (t: Topic) => !selectedTopicIds.includes(t.id);
        if (searchKey.length) {
            setSearchResults(topics.filter(filterByKey).filter(filterByAlreadySelected))
        }
    }, [searchKey, selectedTopicIds])

    return (
        <TouchableOpacity activeOpacity={1} onPress={onClickOutSide} style={styles.clickOutsideWrapper}>
            <SafeAreaView style={[styles.SAV, {marginHorizontal}]} edges={['bottom']}>
                <FlatList data={categories} renderItem={renderCategory} style={styles.container}
                          contentContainerStyle={[styles.contentContainer, {paddingTop}]}
                />

                <HeaderSection selectedTopicIds={selectedTopicIds} onPressRemoveTopic={removeTopicById}
                               setSearchKey={setSearchKey}/>
                <FooterBar nextStepEnabled={!!selectedTopicIds.length}/>
                {searchResultsVisible && (
                    <SearchResultPopup results={searchResults} searchKey={searchKey} onPressResult={toggleTopicById}/>)}
            </SafeAreaView>
        </TouchableOpacity>
    )
}
export default CategoryScreen;

const styles = StyleSheet.create({
    clickOutsideWrapper: {flex: 1,},
    SAV: {flex: 1, minWidth: 250},
    container: {flex: 1},
    contentContainer: {paddingHorizontal: SPACE.sidePadding},
})
