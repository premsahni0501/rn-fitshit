import React from 'react';
import {ScrollView, StyleSheet, Image, Dimensions} from 'react-native';
import {Button, Icon} from 'react-native-ui-kitten';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Container, Row, Col} from '../components/_grid';
import {TextEl} from '../components/Text';
import DatePicker from 'react-native-datepicker';
import moment from 'moment';

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    flex: 1,
    justifyContent: 'flex-start',
    top: 120,
  },
  container: {
    alignItems: 'center',
    flex: 2,
    justifyContent: 'center',
    backgroundColor: '#000',
    borderTopEndRadius: 30,
    borderTopStartRadius: 30,
    minHeight: Dimensions.get('window').height,
  },
  menuIcon: {
    width: 32,
    height: 32,
  },
  rightBtn: {
    width: 48,
    height: 48,
    marginHorizontal: 10,
  },
  rightBtnIcon: {
    width: 48,
    height: 48,
    resizeMode: 'contain',
  },
  card: {
    flex: 1,
    backgroundColor: '#000',
    borderColor: '#444',
    borderWidth: 1,
    borderRadius: 20,
    padding: 15,
  },
  statisticCol: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    height: 64,
  },
  marginVertical: {
    marginVertical: 10,
  },
  scaleColor: {
    color: '#666',
  },
  actName: {
    marginVertical: 10,
    fontWeight: 'bold',
  },
  header: {
    flex: 1,
    maxWidth: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    flexBasis: '100%',
    height: 120,
  },
});

export default class StatisticPage extends React.Component {
  state = {
    date: new moment(),
  };
  setDate(e) {
    console.log(e);
  }
  render() {
    const {navigation} = this.props;
    return (
      <ScrollView>
        <Container>
          <Row>
            <Col style={styles.header}>
              <TouchableOpacity
                activeOpacity={0.6}
                style={{...styles.rightBtn, marginRight: 0}}>
                <Button
                  appearance="ghost"
                  icon={() => (
                    <Icon
                      pack="entypo"
                      name="dots-two-horizontal"
                      width={32}
                      height={32}
                      fill="#000111"
                      style={styles.menuIcon}
                    />
                  )}
                />
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.6} style={styles.rightBtn}>
                <Button
                  onPress={() => navigation.goBack()}
                  appearance="ghost"
                  icon={() => (
                    <Icon
                      pack="material"
                      name="keyboard-arrow-down"
                      width={32}
                      height={32}
                      fill="#000111"
                      style={styles.menuIcon}
                    />
                  )}
                />
              </TouchableOpacity>
            </Col>
          </Row>
        </Container>
        <Container style={{...styles.container}}>
          <Row>
            <Col style={{...styles.header, padding: 30}}>
              <TextEl category="h2" style={{fontWeight: 'bold', color: '#eee'}}>
                Walk
              </TextEl>
              <DatePicker
                format="DD MMMM YYYY"
                style={{
                  width: '50%',
                }}
                customStyles={{
                  dateTouchBody: {
                    flexDirection: 'row-reverse',
                  },
                  dateInput: {
                    borderWidth: 0,
                  },
                  dateText: {
                    color: '#ddd',
                  },
                }}
                iconComponent={
                  <Icon
                    name="calendar"
                    pack="feather"
                    fill="#ddd"
                    height={24}
                  />
                }
                date={this.state.date}
                onDateChange={() => this.setDate()}
              />
            </Col>
          </Row>
        </Container>
      </ScrollView>
    );
  }
}
