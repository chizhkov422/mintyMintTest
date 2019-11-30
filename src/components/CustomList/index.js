import React from 'react';
import {Text, View, Switch} from 'react-native';

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
  centerElement,
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
              <TouchableWithoutFeedback
                key={id}
                style={tableItem}
                onPress={onPressHandler(item)}>
                <Text>{time}</Text>
                <Text style={centerElement}>{name}</Text>
                <Switch value={checked} />
              </TouchableWithoutFeedback>
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
