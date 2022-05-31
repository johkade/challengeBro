import {topics} from "../../data/data";
import Topic from "../../data/types/topic";

const getTopicsByCategoryId = (id: string): Topic[] => {
    return topics.filter(t => t.categoryId === id);
}
export default getTopicsByCategoryId;
