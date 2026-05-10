import { StyleSheet, Text, TouchableOpacity, View,Image } from 'react-native'
import React from 'react'
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

type Props = {
  navigation: BottomTabNavigationProp<any>;
};
const Weekly_F : React.FC<Props> = ({ navigation }) => {
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
  
          <Text style={styles.headerText}>Weekly_ForCast</Text>
          <Image style={styles.search} source={require('./Search.png')} />
        </View>
        <View style={{ padding: 16 }}>
    
    <View style={styles.row}>
      <Text style={styles.day}>Monday</Text>
      <Image source={require('./Sunny.png')} style={styles.icon} />
      <Text style={styles.temp}>30° / 21°</Text>
    </View>
  
    <View style={styles.row}>
      <Text style={styles.day}>Tuesday</Text>
      <Image source={require('./Cloudy.png')} style={styles.icon} />
      <Text style={styles.temp}>28° / 20°</Text>
    </View>
    <View style={styles.row}>
      <Text style={styles.day}>Wednesday</Text>
      <Image source={require('./Rainy.png')} style={styles.icon} />
      <Text style={styles.temp}>26° / 19°</Text>
    </View>
  
    <View style={styles.row}>
      <Text style={styles.day}>Thursday</Text>
      <Image source={require('./Partially_Cloudy.png')} style={styles.icon} />
      <Text style={styles.temp}>24° / 18°</Text>
    </View>
  
    <View style={styles.row}>
      <Text style={styles.day}>Friday</Text>
      <Image source={require('./Sunny.png')} style={styles.icon} />
      <Text style={styles.temp}>29° / 20°</Text>
    </View>
  
    <View style={styles.row}>
      <Text style={styles.day}>Saturday</Text>
      <Image source={require('./Cloudy.png')} style={styles.icon} />
      <Text style={styles.temp}>31° / 22°</Text>
    </View>
  
    <View style={styles.row}>
      <Text style={styles.day}>Sunday</Text>
      <Image source={require('./Rainy.png')} style={styles.icon} />
      <Text style={styles.temp}>27° / 19°</Text>
    </View>
  
  </View>
      </View>
    );
  };
  
  export default Weekly_F;
  
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
    row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.15)',
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
  },
  
  day: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  
  icon: {
    width: 50,
    height: 60,
  },
  
  temp: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  
  });
  