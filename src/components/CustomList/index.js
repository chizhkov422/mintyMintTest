import React from 'react';
import {Text, View, Switch} from 'react-native';

//Components
import Checkbox from '../Checkbox';

//Styles
import styles from './styles.js';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

const {
  contentWrapper,
  tableTitle,
  itemsWrapper,
  messageBlockText,
  boldText,
  tableItem,
  tableItemInfo,
  centerElement,
  touchableStyled,
  fullSizeBlock,
} = styles;

export default class CustomList extends React.Component {
  getTableContent = () => {
    const {emptyListMessage, data, onPressHandler} = this.props;

    if (data?.length) {
      return (
        <>
          {data.map(item => {
            const {id, time, name, checked} = item;

            return (
              <View key={id} style={[tableItem, fullSizeBlock]}>
                <View style={tableItemInfo}>
                  <TouchableWithoutFeedback
                    style={touchableStyled}
                    onPress={onPressHandler(item)}>
                    <View style={fullSizeBlock}>
                      <Text>{time}</Text>
                      <Text style={centerElement}>{name}</Text>
                    </View>
                  </TouchableWithoutFeedback>
                </View>
                <Checkbox checked={checked} onChange={() => {}} />
              </View>
            );
          })}
        </>
      );
    }

    return <Text style={messageBlockText}>{emptyListMessage}</Text>;
  };

  render() {
    const {title} = this.props;

    return (
      <View style={contentWrapper}>
        <View style={tableTitle}>
          <Text style={[messageBlockText, boldText]}>{title}</Text>
        </View>
        <View style={itemsWrapper}>{this.getTableContent()}</View>
      </View>
    );
  }
}
