import { useDispatch, useSelector } from 'react-redux'
import { getCommentsSuccess, sendComment } from './actions';
import { useEffect, useState, useCallback } from 'react';
import persist from '../../services/persist';
import { PERSIST_PARAMS } from '../../constants/constants';

// Custom hooks
const useCommentsFacade = (props) => {
  const dispatch = useDispatch();
  const { route, navigation } = props;
  const [charId, ] = useState(route.params && route.params.char_id ? route.params.char_id : null)
  const { comments } = useSelector(state => state.comments)
  const [commentsList, setComments] = useState(comments || [])
  const [isLoading, setLoading] = useState(false)

  const _onSend = useCallback(async (comment) => {
    setLoading(true)
    const data = {
      comment,
      created_at: new Date(),
      char_id: charId
    }
    const comments = await persist.load(PERSIST_PARAMS.comments, [])
    const temp = [...comments]
    temp.push(data)
    dispatch(sendComment(temp))
  })

  const _onBack = () => {
    navigation && navigation.goBack();
  }

  const _onGetComments = async () => {
    const data = await persist.load(PERSIST_PARAMS.comments, [])
    const comments = _onFilterByCharacter(data)
    comments && dispatch(getCommentsSuccess(comments))
  }

  const _onFilterByCharacter = (comments = []) => {
    return comments.filter(item => item.char_id === charId)
  }

  useEffect(() => {
    setLoading(true)
    _onGetComments()
  }, [])

  useEffect(() => {
    setComments(_onFilterByCharacter(comments))
    setLoading(false)
  }, [comments])

  return {
    commentsList,
    isLoading,
    _onSend,
    _onBack
  }
}

export {
  useCommentsFacade,
}
