import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

function SvgComponent(props: SvgProps) {
  return (
    <Svg viewBox="0 0 200 200" width={30} height={30} fill="#ed1515" {...props}>
      <Path d="M200 76.9c0 15.5-5.3 31.3-15.7 47-8.1 12.1-19.3 24.2-33.3 35.9-23.6 19.7-46.9 31.4-47.9 31.9s-2 .7-3.1.7-2.1-.3-3.1-.7c-1-.5-24.3-12.2-47.9-31.9-14-11.7-25.2-23.8-33.3-35.9C5.3 108.3 0 92.5 0 76.9c0-29.5 24-53.5 53.5-53.5 19.9 0 37.3 11 46.5 27.2 9.2-16.2 26.6-27.2 46.5-27.2 29.5.1 53.5 24.1 53.5 53.5z" />
    </Svg>
  );
}

export default SvgComponent;
