import useNavStore from "../../store/useNavStore";

const useSearchResultsVisible = () => {
    const {searchResultsVisible, setSearchResultsVisible} = useNavStore();
    return {searchResultsVisible, setSearchResultsVisible}
}

export default useSearchResultsVisible;
