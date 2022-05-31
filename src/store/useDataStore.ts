import create from 'zustand';
import {persist} from 'zustand/middleware';
import {ColorSchemeName, Platform} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface DataStoreState {
    selectedTopicIds: string[];
    toggleTopicById: (id: string) => void;
    removeTopicById: (id: string) => void;
}

const useDataStore = create<DataStoreState>()(
    persist(
        set => ({
            selectedTopicIds: [],
            toggleTopicById: (id: string) => set((prev) => {


                const index = prev.selectedTopicIds.indexOf(id);
                // remove or add
                if(index >=0){
                    const newArr = prev.selectedTopicIds.filter(t => t !== id);
                    return {selectedTopicIds: newArr}
                }else {
                    return {selectedTopicIds: [...prev.selectedTopicIds, id]}
                }
            }),
            removeTopicById: (id: string) => set((prev) => {
                const index = prev.selectedTopicIds.indexOf(id);

                // remove or return same
                if(index >=0){
                    return {selectedTopicIds: prev.selectedTopicIds.filter(t => t !== id)}
                }
                return prev;
            }),

        }),
        {name: 'data', getStorage: () => AsyncStorage},
    ),
);

export default useDataStore;
