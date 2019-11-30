import React from 'react';
import {View} from 'react-native';

import CustomList from '../../components/CustomList';

//Styles
import commonStyles from '../commonStyles';

const {screenWrapper} = commonStyles;

const medication = [
  {
    id: 'aaa',
    time: '12:03',
    name: 'analgin',
    checked: true,
  },
  {
    id: 'bbb',
    time: '09:00',
    name: 'aspirin',
    checked: true,
  },
];

export default class MedicationScreen extends React.Component {
  state = {
    medication,
  };

  goToDetails = item => () => {
    const {
      navigation: {navigate},
    } = this.props;

    navigate('Details', {item});
  };

  render() {
    const {medication} = this.state;

    return (
      <View style={screenWrapper}>
        <CustomList
          title="Medication"
          emptyListMessage="No medications today"
          data={medication}
          onPressHandler={this.goToDetails}
        />
      </View>
    );
  }
}
