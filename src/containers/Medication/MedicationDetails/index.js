import React from 'react';
import {Text, View} from 'react-native';

//Styles
import commonStyles from '../../commonStyles';
import styles from './styles';

const {screenWrapper} = commonStyles;
const {infoWrapper, nameMedicine, customText} = styles;

export default class MedicationDetailsScreen extends React.Component {
  state = {
    infoData: this.props.navigation.getParam('item'),
  };

  render() {
    const {
      infoData: {name, time},
    } = this.state;

    return (
      <View style={screenWrapper}>
        <View style={infoWrapper}>
          <Text style={[customText, nameMedicine]}>{name}</Text>
          <Text style={customText}>{time}</Text>
        </View>
      </View>
    );
  }
}
