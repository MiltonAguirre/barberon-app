import React from 'react';
import {SafeAreaView, View, StatusBar} from 'react-native';
import MainNavigator from './src/navigators';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './src/reducers';
import {SafeAreaProvider} from 'react-native-safe-area-context';

let store = createStore(reducer);

export const MyStatusBar = ({backgroundColor, ...props}) => (
  <View style={{height: StatusBar.currentHeight, backgroundColor}}>
    <SafeAreaView>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </SafeAreaView>
  </View>
);

const App = () => {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
