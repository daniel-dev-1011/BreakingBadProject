import AsyncStorage from "@react-native-community/async-storage";

const KEY_PREFIX = "BreakingBadApp";
const get_key = (key) => `${KEY_PREFIX}::${key}`;

class PersistService {

  async save(key, value) {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem(get_key(key), jsonValue);
  }

  async load(key, default_value) {
    let value = await AsyncStorage.getItem(get_key(key));
    if (value === null) return default_value;
    return JSON.parse(value);
  }

  async remove(key) {
    await AsyncStorage.removeItem(get_key(key));
  }
}

export default new PersistService();