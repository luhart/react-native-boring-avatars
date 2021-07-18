import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import Avatar from 'react-native-boring-avatars';

export default function App() {
  return (
    <View style={styles.container}>
      <Avatar
        size={50}
        name="Sacagawea"
        variant="beam"
        colors={['#A3A948', '#EDB92E', '#F85931', '#CE1836', '#009989']}
      />
      <Avatar
        size={50}
        name="Sacagawea"
        variant="sunset"
        colors={['#A3A948', '#EDB92E', '#F85931', '#CE1836', '#009989']}
      />
      <Avatar
        size={50}
        name="Sacagawea"
        variant="bauhaus"
        colors={['#A3A948', '#EDB92E', '#F85931', '#CE1836', '#009989']}
      />
      <Avatar
        size={50}
        name="Sacagawea"
        variant="pixel"
        colors={['#A3A948', '#EDB92E', '#F85931', '#CE1836', '#009989']}
      />
      <Avatar
        size={50}
        name="Sacagawea"
        variant="ring"
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
