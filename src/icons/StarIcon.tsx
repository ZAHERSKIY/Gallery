import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function StarIcon() {
  return (
    <Svg viewBox="0 0 200 200" fill="yellow" width={30} height={30}>
      <Path d="M105.6 15.3l23.2 47c.9 1.8 2.7 3.1 4.7 3.4l51.9 7.5c5.1.7 7.1 7 3.4 10.6l-37.5 36.6c-1.5 1.4-2.1 3.5-1.8 5.5l8.9 51.7c.9 5.1-4.5 8.9-9 6.5L103 159.7c-1.8-1-4-1-5.8 0l-46.4 24.4c-4.6 2.4-9.9-1.5-9-6.5l8.9-51.7c.3-2-.3-4.1-1.8-5.5L11.2 83.8c-3.7-3.6-1.7-9.9 3.4-10.6l51.9-7.5c2-.3 3.8-1.6 4.7-3.4l23.2-47c2.3-4.6 8.9-4.6 11.2 0z" />
    </Svg>
  );
}

export default StarIcon;
