import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import React, { useState, useEffect } from 'react';
import { TextInput, ScrollView } from 'react-native';
import axios from 'axios';

import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

type Props = {
  navigation: BottomTabNavigationProp<any>;
};
const Location_Search: React.FC<Props> = ({ navigation }) => {


  const handleSearch = (text: string) => {
    setSearchText(text);

    const result = cities.filter(city =>
      city.name.toLowerCase().includes(text.toLowerCase()),
    );

    if (result.length === 0 && text !== '') {
      setNotFound(true);
      setFilteredCities([]);
    } else {
      setNotFound(false);
      setFilteredCities(result);
    }
  };

  const [searchText, setSearchText] = useState('');
  const [cities, setCities] = useState<any[]>([]);
  const [filteredCities, setFilteredCities] = useState<any[]>([]);
  const [notFound, setNotFound] = useState(false);
  useEffect(() => {
  axios.get('http://10.0.2.2:3000/cities')
    .then(response => {
      setCities(response.data);
      setFilteredCities(response.data);
      console.log(response.data);
    })
    .catch(error => {
      console.log('API error:', error);
    });
}, []);


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

        <Text style={styles.headerText}>Location_Search</Text>
        <Image style={styles.search} source={require('./Search.png')} />
      </View>
      <View style={styles.searchBox}>
        <Image source={require('./Search.png')} style={styles.searchIcon} />
        <TextInput
          placeholder="Enter city name..."
          placeholderTextColor="#666"
          style={styles.input}
          value={searchText}
          onChangeText={handleSearch}
        />
      </View>

      <ScrollView style={{ marginTop: 10 }}>

  {notFound && (
    <Text style={{ color: 'white', textAlign: 'center', marginTop: 20 }}>
      City not found
    </Text>
  )}

  {filteredCities.map(city => (
    <TouchableOpacity key={city.id}>
      <Text style={styles.city}>
        {city.name} — {city.temp}° ({city.condition})
      </Text>
    </TouchableOpacity>
  ))}

</ScrollView>

    </View>
  );
};

export default Location_Search;

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
  searchBox: {
    flexDirection: 'row',
    backgroundColor: 'white',
    margin: 16,
    borderRadius: 10,
    alignItems: 'center',
    paddingHorizontal: 10,
  },

  searchIcon: {
    width: 20,
    height: 20,
    marginRight: 8,
  },

  input: {
    flex: 1,
    height: 45,
    fontSize: 16,
    color: '#000',
  },

  city: {
    color: 'white',
    fontSize: 18,
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.3)',
  },
});
