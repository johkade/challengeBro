import React, {useEffect} from "react";
import {FlatList, ScrollView, StyleSheet, View} from "react-native";
import useSetTheme from "../../style/theme/hooks/useSetTheme";
import CText from "../../components/cText/cText";
import {FC} from "../../style/theme/fontConfig";
import CIcon from "../../components/cIcon/cIcon";
import {NavigationProp} from "@react-navigation/native";
import TopicFlip from "../../components/topicFlip/topicFlip";
import {SafeAreaView, useSafeAreaInsets} from "react-native-safe-area-context";
import {SPACE} from "../../style/theme/misc";
import useTheme from "../../style/theme/hooks/useTheme";
import FooterBar from "./components/footerBar";
import CategoryAccordion from "../../components/categoryAccordion/categoryAccordion";
import {categories} from "../../data/data";
import Category from "../../data/types/category";
import getTopicsByCategoryId from "../../util/api/getTopicsByCategoryId";
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
    const {selectedTopicIds, removeTopicById, toggleTopicById} = useDataStore()


    const renderCategory = ({item}: renderItemParams) => {
        const topics = getTopicsByCategoryId(item.id);
        return (
            <CategoryAccordion name={item.name} topics={topics} key={item.id} onPressTopic={toggleTopicById}
                               selectedTopicIds={selectedTopicIds}/>
        )
    }

    return (

        <SafeAreaView style={styles.SAV} edges={['bottom']}>


            <FlatList data={categories} renderItem={renderCategory} style={styles.container}
                      contentContainerStyle={[styles.contentContainer, {paddingTop: top + SPACE.topPadding}]}
            />

            <HeaderSection/>
            <FooterBar nextStepEnabled/>
        </SafeAreaView>

    )
}
export default CategoryScreen;

const styles = StyleSheet.create({
    SAV: {flex: 1},
    container: {flex: 1},
    contentContainer: {paddingHorizontal: SPACE.sidePadding},
})
