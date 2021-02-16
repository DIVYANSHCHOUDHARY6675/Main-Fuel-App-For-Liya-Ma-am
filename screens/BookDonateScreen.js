import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Card from '../components/Card';
import CustomButton from '../components/CustomButton';

export default function HomeScreen(props) {
  return (
    <View
      style={styles.container}>
      <Card style={styles.homeCard}>
        <View><Text style={styles.text}>Start Saving Fuel Now!</Text></View>
        <CustomButton
          style={styles.button}
          title="START"
          onPress={() => {
         //   props.navigation.navigate('Addscreen');
          }}
        />
      
      </Card>

      <Card style={styles.homeCard}>
        <View><Text style={styles.text}>Calculate your journey fuel cost here.</Text></View>
        <CustomButton
          style={styles.button}
          title="Calculate"
          onPress={() => {
         //   props.navigation.navigate('scree');
          }}
        />
        
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor:'#01333C',
  },
  homeCard: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 130,
    marginHorizontal: 15
  },
  text: {
    fontFamily: 'nunito',
    fontSize: 22
  },
  button: {
    marginVertical:20,
  },
  heading:{
    fontSize: 55
  },
  
});



