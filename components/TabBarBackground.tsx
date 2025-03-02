import React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const TabBarBackground = ({ color }) => {
  return (
    <View style={{ position: 'absolute', bottom: 0, width: '100%', height: 76 }}>
      <Svg width="100%" height="100%" viewBox="0 0 412 76" preserveAspectRatio="none">
        <Path d="M0 19.3405L206 0L412 19.3405V76H0V19.3405Z" fill={color} />
      </Svg>
    </View>
  );
};

export default TabBarBackground;
