import React, { useEffect } from "react";
import { useDarkModeContext } from 'react-native-dark-mode';
import FlashMessage from "react-native-flash-message";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import appStore from "./src/store";
import Navigation from "./src/navigation";
import { setAppTheme } from './src/utils/Themes/appTheme';

export default function App() {
  const { store, persistor } = appStore
  const theme = useDarkModeContext()
  setAppTheme(theme)

  return (
    <Provider store={store} >
      <PersistGate loading={null} persistor={persistor}>
        <Navigation enableURLHandling={false} />
        <FlashMessage position="top" icon="auto" />
      </PersistGate>
    </Provider>
  )
}