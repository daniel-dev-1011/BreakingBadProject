import React from 'react';
import { StyleSheet, StatusBar, View ,SafeAreaView} from 'react-native';
import LoadingView from '../LoadingView';
import Header from '../Header';

const Screen = ({ children, barBackgroundColor, title, barStyle, loading, _onBack, headerProps }) => (
  <View style={styles.container}>
    <SafeAreaView style={styles.container} >
      <Header onBack={_onBack} title={title}/>
      {!headerProps && <StatusBar backgroundColor={barBackgroundColor} barStyle={barStyle} />}
      {children}
    </SafeAreaView>
    {loading && <LoadingView />}
  </View>

);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF'
  }
})
export default Screen;
