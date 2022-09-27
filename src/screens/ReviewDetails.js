import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { globalStyles } from '../styles/global';

export default function ReviewDetails({navigation}) {

  const navigateToHomePage= ()=>{
    navigation.pop();
    // navigation.goBack();
  }

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>
        {navigation.getParam('title')}
      </Text>
      <Text style={globalStyles.titleText}>
        {navigation.getParam('body')}
      </Text>
      <Text style={globalStyles.titleText}>
        {navigation.getParam('rating')}
      </Text>
      <Button title='Home Page' onPress={navigateToHomePage}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding : 10
  }
});