import React, {useState} from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { globalStyles } from '../styles/global';

export default function Home({navigation}) {

  const [reviews, setReviews] = useState([
    { title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'lorem ipsum', key: '1' },
    { title: 'Gotta Catch Them All (again)', rating: 4, body: 'lorem ipsum', key: '2' },
    { title: 'Not So "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: '3' },
  ]);

  const navigateToReviewPage= (item)=>{
    navigation.push("ReviewDetails", item);
    console.log(item.key);
    // navigation.navigate("ReviewDetails");
  }

  return (
    <View style={globalStyles.container}>
      <FlatList 
        keyExtractor={(item)=> (item.key)}
        data={reviews}
        renderItem={({item})=> (
          <TouchableOpacity onPress={()=>{navigateToReviewPage(item)}}>
            <Text style={globalStyles.titleText}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding : 10
  }
});