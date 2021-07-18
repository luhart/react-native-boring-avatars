# react-native-boring-avatars

React Native implementation of [boring avatars](https://boringavatars.com/)

## Installation

```sh
yarn add boring-avatars
```

## Usage

```js
// ...
import Avatar from 'react-native-boring-avatars';

<Avatar
  size={40}
  name="Sacagawea"
  variant="pixel"
  colors={['#92A1C6', '#146A7C', '#F0AB3D', '#C271B4', '#C20D90']}
/>;
```

## Caveat

The marble variant is not suppported. This is because `react-native-svg` does not support the SVG `filter` attribute which the marble variant depends on. 🙁 Check [here](https://github.com/react-native-svg/react-native-svg/issues/150) for more details on react-native-svg on this issue.

## License

MIT
