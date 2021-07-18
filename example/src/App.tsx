import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import Avatar from 'react-native-boring-avatars';

export default function App() {
  return (
    <View style={styles.container}>
      <Avatar
        size={40}
        name="Sacagawea"
        variant="bauhaus"
        colors={['#A3A948', '#EDB92E', '#F85931', '#CE1836', '#009989']}
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
