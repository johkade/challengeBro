import Category from "./types/category";
import Topic from "./types/topic";

const categoryNames = [
    'Security', 'Branding', 'Interactions', 'Brand', 'Division', 'Markets', 'Response', 'Mobility', 'TicketBro'
]

const topicNames = [
    'Web', 'Response', 'Marketing','Accountability','Identity','Optimization','Factors','Markets','Research'
]


export const categories: Category[] = categoryNames.map((name, index) => ({id: index + '', name}))

export let topics: Topic[] = [];

categories.forEach(c => {
    const topicsForCategory: Topic[] = topicNames.map(name => ({
        categoryId: c.id,
        name,
    }))
    topics = [...topics, ...topicsForCategory]
})
