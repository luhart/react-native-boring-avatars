import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import Avatar from 'react-native-boring-avatars';

export default function App() {
  return (
    <View style={styles.container}>
      <Avatar
        size={40}
        name="Sacagawea"
        variant="beam"
        colors={['#92A1C6', '#146A7C', '#F0AB3D', '#C271B4', '#C20D90']}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
