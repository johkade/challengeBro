import React from "react";
import {StyleSheet, View} from "react-native";
import useSetTheme from "../../style/theme/hooks/useSetTheme";
import CText from "../../components/cText/cText";
import {FC} from "../../style/theme/fontConfig";
import CIcon from "../../components/cIcon/cIcon";
import {NavigationProp} from "@react-navigation/native";
import TopicFlip from "../../components/topicFlip/topicFlip";


type ScreenProps = {
    navigation: NavigationProp<any, any>
}

const CategoryScreen = ({navigation}: ScreenProps) => {
    const {setThemeId} = useSetTheme()

    return (
        <View style={styles.container}>

            <CText text={'Test'} fontConfig={FC.h1}/>
            <CText text={'Test'} fontConfig={FC.h3}/>
            <CText text={'Test'} fontConfig={FC.h4}/>
            <CText text={'Test'} fontConfig={FC.textL}/>
            <CText text={'Test'} fontConfig={FC.textS}/>

            <CIcon icon={'chevron-up'}/>
            <CIcon icon={'chevron-down'}/>
            <CIcon icon={'filter'}/>
            <CIcon icon={'search'}/>
            <CIcon icon={'close'}/>
            <CIcon icon={'add'}/>
            <TopicFlip name={'Test'} variant={'small'}/>
            <TopicFlip name={'Test'} variant={'large'}/>
            <TopicFlip name={'Test'} variant={'large'} active/>

        </View>
    )
}
export default CategoryScreen;

const styles = StyleSheet.create({
    container: {flex: 1, alignItems: 'center', justifyContent: 'center'}
})
