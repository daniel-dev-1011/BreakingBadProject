import React from 'react';
import { useCommentsFacade } from './hooks';
import { FlatList, StyleSheet, View } from 'react-native';
import { Screen, Paragraph, BaseInput } from '../../components';
import moment from 'moment';

const TripDetailScreen = (props) => {
  const { isLoading, commentsList, _onSend, _onBack } = useCommentsFacade(props);

  return (
    <Screen loading={isLoading} _onBack={_onBack}>
      <FlatList
        contentContainerStyle={{ paddingHorizontal: 16 }}
        data={commentsList}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={() => (
          <View style={{ height: 16 }} />
        )}
        renderItem={({ item }) => (
          <View style={styles.container}>
            <Paragraph>{item.comment}</Paragraph>
            <Paragraph customStyle={styles.textDate}>{moment(item.created_at).fromNow()}</Paragraph>
          </View>
        )} />
        <BaseInput placeholder="Type comment here ..." onSend={_onSend}/>
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: { 
    backgroundColor: '#DDD', 
    padding: 8 
  },
  textDate: { 
    color: "#888", 
    marginTop: 8, 
    fontSize: 14 
  }
})

export default TripDetailScreen;
