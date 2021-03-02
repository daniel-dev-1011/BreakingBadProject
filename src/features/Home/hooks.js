import { useDispatch, useSelector } from 'react-redux'
import { getAllCharacters } from '../Home/actions';
import { useEffect, useState, useCallback } from 'react';
import * as constants from '../../constants/constants';
import screens from '../../navigation/screens';

// Custom hooks
const useTripDetailFacade = (props) => {
  const dispatch = useDispatch()
  const { navigation } = props;
  const { characters, isLoading, error, offset } = useSelector(state => state.home)
  const [isRefreshing, setRefreshing] = useState(false)
  const [isLoadMore, setLoadMore] = useState(false)

  const _onLoadMore = () => {
    setLoadMore(true)
    let temp = offset + 20
    const params = {
      limit: constants.HOME_PARAMS.limit,
      offset: temp
    }
    dispatch(getAllCharacters(params))
  }

  const _onRefresh = useCallback(() => {
    setRefreshing(true);
    _onGetFirstPage();
  })

  const _onNavigateDetailChar = useCallback((char_id) => {
    navigation.navigate(screens.detail_character.name, {
      char_id
    })
  })

  const _onGetFirstPage = () => {
    const params = {
      limit: constants.HOME_PARAMS.limit,
      offset: constants.HOME_PARAMS.offset
    }
    dispatch(getAllCharacters(params));
  }

  useEffect(() => {
    _onGetFirstPage();
  }, [])

  useEffect(() => {
    if (characters) {
      setRefreshing(false)
      setLoadMore(false)
    }
  }, [characters])

  return {
    isLoading,
    error,
    characters,
    isRefreshing,
    isLoadMore,
    _onNavigateDetailChar,
    _onLoadMore,
    _onRefresh,
  }
}

export {
  useTripDetailFacade,
}
