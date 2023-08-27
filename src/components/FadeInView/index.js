import React, {useRef, useEffect} from 'react';
import {Animated} from 'react-native';

const FadeInView = ({children, duration, style}) => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: duration,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View // Special animatable View
      style={{
        ...style,
        opacity: fadeAnim, // Bind opacity to animated value
      }}>
      {children}
    </Animated.View>
  );
};
FadeInView.defaultProps = {
  duration: 1000,
};

// You can then use your `FadeInView` in place of a `View` in your components:

export default ({children, duration}) => {
  return (
    <FadeInView duration={duration} style={{alignItems: 'center'}}>
      {children}
    </FadeInView>
  );
};
