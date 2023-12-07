import { SafeAreaView, useColorScheme } from 'react-native';
import React from 'react';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import Login from './views/login';
import Reg from './views/reg';


function App(): JSX.Element {
    const isDarkMode = useColorScheme() === 'dark';
    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    return (
        <SafeAreaView>
            <Login />
        </SafeAreaView>
    );
}

export default App;
