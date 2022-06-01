import create from 'zustand';
import {persist} from 'zustand/middleware';
import {ColorSchemeName, Platform} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface NavStoreData {
    searchResultsVisible: boolean;
    setSearchResultsVisible: (visible: boolean) => void;
}

const useDataStore = create<NavStoreData>()(
    set => ({
        searchResultsVisible: false,
        setSearchResultsVisible: (visible: boolean) => set(() => ({searchResultsVisible: visible})),
    }),
);

export default useDataStore;
