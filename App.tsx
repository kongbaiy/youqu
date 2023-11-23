import React from "react";
import { SafeAreaView, useColorScheme } from "react-native";

import { Colors } from "react-native/Libraries/NewAppScreen";
import Login from "./views/login";

function App(): JSX.Element {
    const isDarkMode = useColorScheme() === "dark";

    const backgroundStyle = {
        // backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    return (
        <SafeAreaView style={backgroundStyle}>
            <Login />
        </SafeAreaView>
    );
}

export default App;
