import React, {useEffect, useState} from "react";
import Topic from "../../data/types/topic";
import {GestureResponderEvent, StyleSheet, TouchableOpacity, View} from "react-native";
import CText from "../cText/cText";
import {FC} from "../../style/theme/fontConfig";
import CIcon from "../cIcon/cIcon";
import useTheme from "../../style/theme/hooks/useTheme";
import {SPACE} from "../../style/theme/misc";
import TopicFlip from "../topicFlip/topicFlip";

type Props = {
    name: string;
    topics: Topic[],
    selectedTopicIds: string[],
    onPressTopic: (event: GestureResponderEvent) => void
}

const CategoryAccordion = ({name, topics, onPressTopic, selectedTopicIds}: Props) => {
    const theme = useTheme();
    const [open, setOpen] = useState(false);

    const toggle = () => setOpen(prev => !prev);
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.headerRow} onPress={toggle}>
                <CText text={name} fontConfig={FC.h3}/>
                <CIcon icon={'chevron-down'} color={theme.fontInverse} size={16} withBgColor={theme.iconBackground}/>
            </TouchableOpacity>

            {open && (<View style={styles.flipContainer}>
                {topics.map(t => (
                    <TopicFlip name={t.name} variant={'large'} style={styles.topicFlip} onPress={onPressTopic} id={t.id}
                               key={t.id} active={selectedTopicIds.includes(t.id)}/>
                ))}
            </View>)}
        </View>
    )
}
export default CategoryAccordion;

const styles = StyleSheet.create({
    container: {
        marginBottom: SPACE.m8,
    },
    headerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: SPACE.m8,
    },
    flipContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 18,
    },
    topicFlip: {marginRight: SPACE.m8, marginBottom: SPACE.m8},
})
