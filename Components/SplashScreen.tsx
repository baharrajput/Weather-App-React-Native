import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'




const SplashScreen = ({ navigation }: any) => {
  useEffect(() => {
  const timer = setTimeout(() => {
    navigation.replace('BottomTabs');
  }, 3000);

  return () => clearTimeout(timer);
}, [navigation]);
  return (
    <>
     <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
         
           <ImageBackground
             source={require('./Components/splash.png')}
             style={styles.image}
            
           >
             <Image 
             source={require('./Components/splash_icon.png')}
             style={{width:150, height:150, marginTop:150,marginLeft:130,marginBottom:1}}
             />
             <Text style={{fontSize:30, color:'white', fontWeight:'bold', textAlign:'center',marginTop:1,marginLeft:5}}>WeatherNow</Text>
           </ImageBackground>
         </View>

         </>
  )
}

export default SplashScreen

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
  
  },
)