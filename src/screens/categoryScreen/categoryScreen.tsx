import React, {useEffect, useState} from "react";
import {Dimensions, FlatList, StyleSheet, TouchableOpacity, useWindowDimensions, View} from "react-native";
import {NavigationProp} from "@react-navigation/native";
import {SafeAreaView, useSafeAreaInsets} from "react-native-safe-area-context";
import {SPACE} from "../../style/theme/misc";
import useTheme from "../../style/theme/hooks/useTheme";
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

const CategoryScreen = ({navigation}: ScreenProps) => {
    const {top} = useSafeAreaInsets();
    const {selectedTopicIds, removeTopicById, toggleTopicById} = useDataStore();
    const {searchResultsVisible, setSearchResultsVisible} = useSearchResultsVisible();
    const [searchKey, setSearchKey] = useState('');
    const [searchResults, setSearchResults] = useState<Topic[]>([]);

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
    const onClickOutSide = () => setSearchResultsVisible(false);


    useEffect(()=> {
        if(searchKey.length){
            setSearchResults(topics.splice(0,4))
        }
    },[searchKey])

    return (

        <SafeAreaView style={[styles.SAV, {marginHorizontal}]} edges={['bottom']} onTouchEnd={onClickOutSide}>

            <FlatList data={categories} renderItem={renderCategory} style={styles.container}
                      contentContainerStyle={[styles.contentContainer, {paddingTop}]}
            />

            <HeaderSection selectedTopicIds={selectedTopicIds} onPressRemoveTopic={removeTopicById} setSearchKey={setSearchKey}/>
            <FooterBar nextStepEnabled={!!selectedTopicIds.length}/>
            {searchResultsVisible && (<SearchResultPopup results={searchResults} searchKey={searchKey}/>)}


        </SafeAreaView>

    )
}
export default CategoryScreen;

const styles = StyleSheet.create({
    SAV: {flex: 1, minWidth: 250},
    container: {flex: 1},
    contentContainer: {paddingHorizontal: SPACE.sidePadding},
})
