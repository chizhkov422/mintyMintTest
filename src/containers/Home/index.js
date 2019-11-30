import React from 'react';
import {Text, View} from 'react-native';

//Components
import CustomList from '../../components/CustomList';

//Styles
import styles from '../commonStyles';

const {screenWrapper} = styles;

export default HomeScreen = () => (
  <>
    <View style={screenWrapper}>
      <CustomList title="Messages" emptyListMessage="No symptoms today" />
    </View>
  </>
);
