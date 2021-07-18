import * as React from 'react';
import { getNumber, getRandomColor } from '../utilities';
import Svg, {
  Mask,
  Rect,
  G,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from 'react-native-svg';

const ELEMENTS = 4;
const SIZE = 80;

function generateColors(name, colors) {
  const numFromName = getNumber(name);
  const range = colors && colors.length;

  const elementsProperties = Array.from({ length: ELEMENTS }, (_, i) => ({
    color: getRandomColor(numFromName + i, colors, range),
  }));

  return elementsProperties;
}

const AvatarSunset = (props) => {
  const properties = generateColors(props.name, props.colors);
  const name = props.name.replace(/\s/g, '');

  return (
    <Svg
      viewBox={'0 0 ' + SIZE + ' ' + SIZE}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={props.size}
      height={props.size}
    >
      <Mask
        id="mask__sunset"
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={SIZE}
        height={SIZE}
      >
        <Rect
          width={SIZE}
          height={SIZE}
          rx={props.square ? undefined : SIZE * 2}
          fill="white"
        />
      </Mask>
      <G mask="url(#mask__sunset)">
        <Path
          fill={'url(#gradient_paint0_linear_' + name + ')'}
          d="M0 0h80v40H0z"
        />
        <Path
          fill={'url(#gradient_paint1_linear_' + name + ')'}
          d="M0 40h80v40H0z"
        />
      </G>
      <Defs>
        <LinearGradient
          id={'gradient_paint0_linear_' + name}
          x1={SIZE / 2}
          y1={0}
          x2={SIZE / 2}
          y2={SIZE / 2}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor={properties[0].color} />
          <Stop offset={1} stopColor={properties[1].color} />
        </LinearGradient>
        <LinearGradient
          id={'gradient_paint1_linear_' + name}
          x1={SIZE / 2}
          y1={SIZE / 2}
          x2={SIZE / 2}
          y2={SIZE}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor={properties[2].color} />
          <Stop offset={1} stopColor={properties[3].color} />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};

export default AvatarSunset;
