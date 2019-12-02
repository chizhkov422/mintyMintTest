import React, {useState} from 'react';
import {Image} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

import icon from './icon.png';

//Styles
import styles from './styles.js';

const {container, checkBoxImage} = styles;

export default Checkbox = ({checked, onChange}) => (
  <TouchableWithoutFeedback onPress={onChange} style={container}>
    {checked && (
      <Image source={icon} style={checkBoxImage} resizeMode="contain" />
    )}
  </TouchableWithoutFeedback>
);
