import { useDispatch, useSelector } from 'react-redux'
import { getCharacterDetail, getQuote } from './actions';
import { useEffect, useState, useCallback } from 'react';
import screens from '../../navigation/screens';

// Custom hooks
const useCharacterFacade = (props) => {
  const dispatch = useDispatch()
  const { navigation, route } = props;
  const [charId, setCharId] = useState(route.params && route.params.char_id ? route.params.char_id : null)
  const { isLoading, character, quote } = useSelector(state => state.character);

  const _onGetQuote = useCallback(() => {
    const data = {
      author: character.name.replaceAll(" ", "+")
    }
    dispatch(getQuote(data))
  }, [quote])

  const _onBack = () => {
    navigation.goBack();
  }

  const _onComment = useCallback(() => {
    navigation.navigate(screens.comments.name, {
      char_id: charId
    })
  })

  useEffect(() => {
    charId && dispatch(getCharacterDetail(charId))
  }, [])

  return {
    character,
    isLoading,
    quote,
    _onGetQuote,
    _onComment,
    _onBack
  }
}

export {
  useCharacterFacade,
}
