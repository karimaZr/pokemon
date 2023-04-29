import { View, Text ,StyleSheet,Image} from 'react-native';

export default function LittleLemonHeader() {
    return (
      <View style={headerStyles.container}>
    <Image style={headerStyles.image} source={require('../assets/BOJ.png')} />
  
      </View>
    );
  }
   
  const headerStyles = StyleSheet.create({
    image:{
      width: 400,
      height: 180,
      resizeMode: 'cover',
      
    },
    
  
  });
  
  
