import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Card(props) {
  return (
    <View style={styles.card}>
        <View style={styles.cardContent}>
            {props.children}
        </View>
    </View>
  ); 
}

const styles = StyleSheet.create({
    card: {
      borderRadius: 6,
      elevation: 3,
      backgroundColor: "white",
      shadowColor: "black",
      shadowOpacity: 0.3,
      shadowRadius: 2,
      marginHorizontal: 4,
      marginVertical: 6,
      shadowOffset: {
        width: 1,
        height: 1
      }
    },
    cardContent: {
        marginHorizontal: 18,
        marginVertical: 10
    }
});
