import React from 'react';
import {NavigationContainerRef} from '@react-navigation/core';

interface NavigationParams {
  [key: string]: any;
}

class NavigationC {
  navigationRef = React.createRef<NavigationContainerRef>();

  initialRout = 'Gallery';

  navigate = (routeName: string, params?: NavigationParams) => {
    setTimeout(
      () => this.navigationRef.current?.navigate(routeName, params),
      0,
    );
  };

  pop = () => {
    this.navigationRef.current?.goBack();
  };
}

const navigation = new NavigationC();
export default navigation;
