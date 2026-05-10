import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

type Props = {
  navigation: BottomTabNavigationProp<any>;
};

const Hourly_F: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: 'rgb(55, 152, 249)' }}>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: 'rgb(12, 50, 88)',
          padding: 10,
        }}
      >
       <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.backArrow}>‹</Text>
      </TouchableOpacity>

        <Text style={styles.headerText}>Hourly_ForCast</Text>
        <Image style={styles.search} source={require('./Search.png')} />
      </View>
      
      <ScrollView contentContainerStyle={styles.list}>

        <View style={styles.row}>
          <Text style={styles.time}>1 PM</Text>
          <Text style={styles.temp}>30°</Text>
          <Image source={require('./Sunny.png')} style={styles.icon} />
        </View>

        <View style={styles.row}>
          <Text style={styles.time}>2 PM</Text>
          <Text style={styles.temp}>31°</Text>
          <Image source={require('./Partially_Cloudy.png')} style={styles.icon} />
        </View>

        <View style={styles.row}>
          <Text style={styles.time}>3 PM</Text>
          <Text style={styles.temp}>29°</Text>
          <Image source={require('./Partially_Cloudy.png')} style={styles.icon} />
        </View>

        <View style={styles.row}>
          <Text style={styles.time}>4 PM</Text>
          <Text style={styles.temp}>27°</Text>
          <Image source={require('./Rainy.png')} style={styles.icon} />
        </View>

        <View style={styles.row}>
          <Text style={styles.time}>5 PM</Text>
          <Text style={styles.temp}>25°</Text>
          <Image source={require('./Rainy.png')} style={styles.icon} />
        </View>

        <View style={styles.row}>
          <Text style={styles.time}>6 PM</Text>
          <Text style={styles.temp}>24°</Text>
          <Image source={require('./Cloudy.png')} style={styles.icon} />
        </View>

         <View style={styles.row}>
          <Text style={styles.time}>7 PM</Text>
          <Text style={styles.temp}>22°</Text>
          <Image source={require('./Cloudy.png')} style={styles.icon} />
        </View>
       <View style={styles.row}>
          <Text style={styles.time}>8 PM</Text>
          <Text style={styles.temp}>20°</Text>
          <Image source={require('./Rainy.png')} style={styles.icon} />
        </View>
         <View style={styles.row}>
          <Text style={styles.time}>8 PM</Text>
          <Text style={styles.temp}>20°</Text>
          <Image source={require('./Rainy.png')} style={styles.icon} />
        </View>
         <View style={styles.row}>
          <Text style={styles.time}>8 PM</Text>
          <Text style={styles.temp}>20°</Text>
          <Image source={require('./Rainy.png')} style={styles.icon} />
        </View>
      </ScrollView>
    </View> 
  );
};

export default Hourly_F;

const styles = StyleSheet.create({
  headerText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    marginTop: 30,
    textAlign: 'center',
    marginLeft: 110,
  },
  search: {
    height: 60,
    width: 60,
    marginLeft: 70,
    marginTop: 20,
  },
  backArrow: {
    fontSize: 30,
    color: 'white',
    marginRight: 10,
    marginTop: 25,
  },
  
  list: {
    paddingHorizontal: 16,
    paddingTop: 10,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.2)',
  },

  time: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    width: 60,
  },

  temp: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },

  icon: {
    width: 32,
    height: 60,
  },

});
