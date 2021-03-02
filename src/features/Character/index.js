import React from 'react';
import { useCharacterFacade } from './hooks';
import { Image, View } from 'react-native';
import { Screen, Paragraph } from '../../components';
import { Button } from 'react-native-elements';
import styles from './styles';

const TripDetailScreen = (props) => {
  const { character, quote, isLoading,
    _onGetQuote, _onComment, _onBack } = useCharacterFacade(props);

  return (
    <Screen loading={isLoading} title="Character" _onBack={_onBack}>
      {character &&
        <View style={{ alignItems: 'center', paddingHorizontal: 16 }}>
          <Image source={{ uri: character.img }} resizeMode='contain' style={styles.avatar} />
          <Paragraph>Name: {character.name}</Paragraph>
          <Paragraph>Nickname: {character.nickname}</Paragraph>
          <Paragraph>Birthday: {character.birthday}</Paragraph>
          <Paragraph>Category: {character.category}</Paragraph>
          <Paragraph>Portrayed: {character.portrayed}</Paragraph>
          <Paragraph>Status: {character.status}</Paragraph>
          {character.occupation && <Paragraph>Occupation: {character.occupation.join(', ')}.</Paragraph>}
          <Paragraph>Quote: {quote ? quote.quote : ""}</Paragraph>
          <Button
            onPress={_onGetQuote}
            title='Get new quote'
            style={styles.button} />
          <Button
            onPress={_onComment}
            title='Comment'
            style={styles.button} />
        </View>
      }
    </Screen>
  )
}

export default TripDetailScreen;
