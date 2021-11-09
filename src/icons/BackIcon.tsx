import React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

function BackIcon(props: SvgProps) {
  return (
    <Svg width={30} height={30} viewBox="0 0 306 306" {...props}>
      <Path
        fill={'#fff'}
        d="M247.35 35.7L211.65 0l-153 153 153 153 35.7-35.7L130.05 153z"
      />
    </Svg>
  );
}

export default BackIcon;
