import AsyncStorage from '@react-native-community/async-storage';
import { AppState, Platform } from 'react-native';
import RNRestart from 'react-native-restart';
import * as constants from "../../constants/constants";
import { darkColors } from "./dark";
import { lightColors } from "./light";

let _appTheme = lightColors
let _mode = null
let _isModeChange = false

export const setAppTheme = (theme) => {
  if (Platform.OS == 'android') {
    AsyncStorage.getItem(constants.storeKey.modeTheme, (err, result) => {
      if (result) {
        _appTheme = result == "dark" ? darkColors : lightColors
        _mode = result
      } else {
        _appTheme = theme == "dark" ? darkColors : lightColors
        checkIfModeIsChange(theme)
        _mode = theme
      }
    })
  } else {
    _appTheme = theme == "dark" ? darkColors : lightColors
    checkIfModeIsChange(theme)
    _mode = theme
  }
}

export const setIsModeChange = (bool) => {
  _isModeChange = bool
}

const checkIfModeIsChange = (mode) => {
  if (_mode && _mode != mode) {
    if (AppState.currentState && AppState.currentState == 'active') {
      RNRestart.Restart()
    } else {
      _isModeChange = true
    }
  }
}

export const getMode = () => {
  return _mode
}

export const getisModeChange = () => {
  return _isModeChange
}

export const appTheme = () => {
  return _appTheme
}

