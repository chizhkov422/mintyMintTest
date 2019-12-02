import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  contentWrapper: {
    borderWidth: 2,
    width: '100%',
  },
  tableTitle: {
    borderBottomWidth: 2,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  itemsWrapper: {
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  messageBlockText: {
    fontSize: 16,
  },
  boldText: {
    fontWeight: 'bold',
  },
  tableItem: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    marginBottom: 10,
    paddingRight: 10,
  },
  fullSizeBlock: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  tableItemInfo: {
    flex: 1,
  },
  touchableStyled: {
    padding: 10,
  },
  centerElement: {
    flex: 1,
    alignSelf: 'center',
    paddingHorizontal: 10,
  },
});

export default styles;
