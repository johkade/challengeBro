import React, {useState} from "react";
import {FlatList, StyleSheet, View} from "react-native";
import {NavigationProp} from "@react-navigation/native";
import {SafeAreaView, useSafeAreaInsets} from "react-native-safe-area-context";
import {SPACE} from "../../style/theme/misc";
import useTheme from "../../style/theme/hooks/useTheme";
import FooterBar from "./components/footerBar";
import CategoryAccordion from "../../components/categoryAccordion/categoryAccordion";
import {categories} from "../../data/data";
import Category from "../../data/types/category";
import getTopicsByCategoryId from "../../util/getters/getTopicsByCategoryId";
import useDataStore from "../../store/useDataStore";
import HeaderSection from "./components/headerSection";


type ScreenProps = {
    navigation: NavigationProp<any, any>
}

type renderItemParams = {
    item: Category;
    index: number;
}

const CategoryScreen = ({navigation}: ScreenProps) => {
    const theme = useTheme();
    const {top} = useSafeAreaInsets();
    const {selectedTopicIds, removeTopicById, toggleTopicById} = useDataStore();

    const renderCategory = ({item}: renderItemParams) => {
        const topics = getTopicsByCategoryId(item.id);
        return (
            <CategoryAccordion name={item.name} topics={topics} key={item.id} onPressTopic={toggleTopicById}
                               selectedTopicIds={selectedTopicIds}/>
        )
    }

    const paddingTop = top + SPACE.topPadding + SPACE.searchBarHeight + SPACE.m8 + SPACE.xl32* 4 + 26;

    return (

        <SafeAreaView style={styles.SAV} edges={['bottom']}>

                <FlatList data={categories} renderItem={renderCategory} style={styles.container}
                          contentContainerStyle={[styles.contentContainer, {paddingTop}]}
                />

                <HeaderSection selectedTopicIds={selectedTopicIds} onPressRemoveTopic={removeTopicById}/>
                <FooterBar nextStepEnabled={!!selectedTopicIds.length}/>




        </SafeAreaView>

    )
}
export default CategoryScreen;

const styles = StyleSheet.create({
    SAV: {flex: 1},
    container: {flex: 1},
    contentContainer: {paddingHorizontal: SPACE.sidePadding},
})
