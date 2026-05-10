import React from 'react';
import { View, Text, ImageBackground, Image, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const hourlyData = [
  { time: '1 PM', temp: 30, icon: require('./Icons/Partially_Cloudy.png') },
  { time: '2 PM', temp: 31, icon: require('./Icons/Cloudy.png') },
  { time: '3 PM', temp: 29, icon: require('./Icons/Sunny.png') },
  { time: '4 PM', temp: 27, icon: require('./Icons/Rainy.png') },
  { time: '1 PM', temp: 30, icon: require('./Icons/Partially_Cloudy.png') },
  { time: '2 PM', temp: 31, icon: require('./Icons/Cloudy.png') },
  { time: '3 PM', temp: 29, icon: require('./Icons/Sunny.png') },
  { time: '4 PM', temp: 27, icon: require('./Icons/Rainy.png') },

];

const Tab = createBottomTabNavigator();

const Home = () => {
  return (
    <>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ImageBackground
          source={require('./Components/splash.png')}
          style={styles.image}
        >
          <View style={{ flexDirection: 'row',backgroundColor: 'rgb(30, 144, 255)', padding:10}}>  
            <Text
              style={styles.headerText}
            >
              Lahore
            </Text>
             <Image style={styles.search}
              source={require('./Icons/Search.png')}
             />
          </View>
          <Image
            source={require('./Components/splash_icon.png')}
            style={{
              width: 130,
              height: 120,
              marginTop: 60,
              marginLeft: 130,
              marginBottom: 0,
            }}
          />
          <Text
            style={{
              fontSize: 40,
              color: 'white',
              fontWeight: 'bold',
              textAlign: 'center',
              marginTop: 0,
              marginLeft: 5,
            }}
          >
            28°
          </Text>
          <Text
            style={{
              fontSize: 20,
              color: 'white',
              fontWeight: 'bold',
              textAlign: 'center',
              marginTop: 1,
              marginLeft: 0,
            }}
          >
            Sunny
          </Text>

          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              marginTop: 270,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'rgb(30, 144, 255))',
            }}
          >
            {hourlyData.map((item, index) => (
              <View key={index} style={styles.hourCard}>
                <Text style={styles.time}>{item.time}</Text>

                <Image
                  source={item.icon}
                  style={{ width: 65, height: 45 }}
                  resizeMode="contain"
                />

                <Text style={styles.temp}>{item.temp}°</Text>
              </View>
            ))}
          </View>
        </ImageBackground>
      </View>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  hourCard: {
    alignItems: 'center',
    marginHorizontal: 12,
  },
  time: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
  temp: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },

headerText: {
                fontSize: 30,
                color: 'white',
                fontWeight: 'bold',
                marginTop: 20,
                textAlign: 'center',
                marginLeft: 140,
              }
,search: {
               height: 60,
                width: 80,
                marginLeft: 80,
                marginTop:15,
              },
});
