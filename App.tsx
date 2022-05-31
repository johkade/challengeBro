import {View} from 'react-native';
import RootStack from "./src/nav/rootStack";
import useInitFonts from "./src/style/theme/hooks/useInitFonts";


export default function App() {
  const {fontsLoaded} = useInitFonts()

  if (!fontsLoaded) {
    return <View/>;
  }

  return (
    <RootStack/>
  );
}
