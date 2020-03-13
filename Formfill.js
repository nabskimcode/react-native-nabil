import React, {Component} from 'react';
import AppNavigator from './AppNavigator';
import {StyleSheet, Text, View} from 'react-native';
export default class Someht extends Component {
  render() {
    return <View style={styles.container}>We have no friends!</View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
// In App.js in a new project

// import * as React from 'react';
import React, {useState} from 'react';
import moment from 'moment';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  Dimensions,
  Platform,
  ImageBackground,
  TextInput,
  Button,
  CheckBox,
  Header,
} from 'react-native';

import DateTimePicker from '@react-native-community/datetimepicker';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Dropdown} from 'react-native-material-dropdown';
import {Colors} from 'react-native/Libraries/NewAppScreen';
// import Someht from './Formfill';
// import {CheckBox} from 'react-native-elements';
const {width, height} = Dimensions.get('window');

function HomeScreen({navigation}) {
  const {
    boxCont,
    imageCont,
    mainContainer,
    titleCont,
    titleText,
    loginEmail,
    loginPass,
    loginConfirm,
    loginText,
  } = styles;

  return (
    // <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    //   <Text>Home Screen</Text>
    //   <Button
    //     title="Go to Details"
    //     onPress={() => {
    //       navigation.navigate('Details', {
    //         itemId: 86,
    //         otherParam: 'anything you want here',
    //       });
    //     }}
    //   />
    // </View>

    <View style={mainContainer}>
      <ImageBackground source={require('./images/ocean.jpg')} style={imageCont}>
        <View style={titleCont}>
          <Text style={titleText}>Lendela</Text>
        </View>
        <View style={boxCont}>
          <TextInput style={loginEmail} placeholder={'Username'} />

          <TextInput
            placeholder={'Password'}
            secureTextEntry={true}
            style={loginPass}
          />

          <TouchableOpacity
            style={loginConfirm}
            // onPress={() => {
            //   navigation.navigate('Details', {
            //     itemId: 86,
            //     otherParam: 'anything you want here',
            //   });
            // }}
            onPress={() => navigation.navigate('User Details 1')}>
            <Text style={loginText}>LOGIN</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

function DetailsScreen({route, navigation}) {
  const {itemId} = route.params;
  const {otherParam} = route.params;
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>
      <Button
        title="Go to Details... again"
        onPress={() =>
          navigation.push('Details', {
            itemId: Math.floor(Math.random() * 100),
          })
        }
      />
      {/* <Button
        title="Go to Details... again"
        onPress={() => navigation.push('Details')}
      /> */}
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      {/* <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      /> */}
    </View>
  );
}

function UserName({route, navigation}) {
  // const [date, setDate] = useState(new Date());
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [display, setDisplay] = useState('default');

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;

    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
    setDisplay('default');
  };

  const showDatepickerSpinner = () => {
    showMode('date');
    setDisplay('spinner');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  const {
    nameCont,
    namefillCont,
    loginEmail,
    userDetailfill,
    userContH,
    loginConfirm,
    dateTimeText,
  } = styles;
  let data = [
    {
      value: 'Mr',
    },
    {
      value: 'Ms',
    },
    {
      value: 'Mrs',
    },
  ];

  let genderData = [
    {
      value: 'Male',
    },
    {
      value: 'Female',
    },
    {
      value: 'Other',
    },
  ];
  return (
    // <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    //   <Text>User Name Screen</Text>

    //   <Button title="Go back" onPress={() => navigation.navigate('Home')} />
    // </View>
    <ScrollView>
      <View style={nameCont}>
        <View style={namefillCont}>
          <Dropdown label="Title" data={data} />
          <TextInput style={userDetailfill} placeholder={'First name'} />
          <TextInput style={userDetailfill} placeholder={'Last name'} />
          <Dropdown label="Gender" data={genderData} />
          <View style={userContH}>
            {/* <TouchableOpacity
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 20,
                borderWidth: 1,
              }}
              onPress={showDatepicker}>
              <Text>Date Picker</Text>
            </TouchableOpacity> */}
          </View>
          <Button
            testID="datePickerButton"
            onPress={showDatepicker}
            title="Show date picker default!"
          />
          <Button
            testID="datePickerButton"
            onPress={showDatepickerSpinner}
            title="Show date picker spinner!"
          />
          <Text testID="dateTimeText" style={dateTimeText}>
            {mode === 'time' && moment.utc(date).format('HH:mm')}
            {mode === 'date' && moment.utc(date).format('MM/DD/YYYY')}
          </Text>
          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              timeZoneOffsetInMinutes={0}
              value={date}
              mode={mode}
              is24Hour
              display={display}
              onChange={onChange}
              style={styles.iOsPicker}
            />
          )}
          <TextInput style={userDetailfill} placeholder={'Email'} />
          <TextInput style={userDetailfill} placeholder={'Phone No'} />
          <TextInput style={userDetailfill} placeholder={'Loan amount'} />
          <Dropdown label="Loan tenure" data={genderData} />
          <Dropdown label="Loan purpose" data={genderData} />
          <TextInput style={userDetailfill} placeholder={'Wedding Date'} />
          <View style={{flexDirection: 'row'}}>
            <CheckBox
            // value={this.state.checked}
            // onValueChange={() =>
            //   this.setState({checked: !this.state.checked})
            // }
            />
            <Text style={{marginTop: 5}}>
              {' '}
              I agree to the terms & conditions{' '}
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

function Datepick() {
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [display, setDisplay] = useState('default');

  const {
    iOsPicker,
    dateTimeText,
    text,
    button,
    header,
    container,
    footer,
    body,
    engine,
    scrollView,
  } = styles;

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;

    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
    setDisplay('default');
  };

  const showDatepickerSpinner = () => {
    showMode('date');
    setDisplay('spinner');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={engine}>
              <Text style={footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={body}>
            <View testID="appRootView" style={container}>
              <View style={header}>
                <Text style={text}>Example DateTime Picker</Text>
              </View>
              <View style={button}>
                <Button
                  testID="datePickerButton"
                  onPress={showDatepicker}
                  title="Show date picker default!"
                />
              </View>
              <View style={button}>
                <Button
                  testID="datePickerButton"
                  onPress={showDatepickerSpinner}
                  title="Show date picker spinner!"
                />
              </View>
              <View style={button}>
                <Button
                  testID="timePickerButton"
                  onPress={showTimepicker}
                  title="Show time picker!"
                />
              </View>
              <View style={header}>
                <Text testID="dateTimeText" style={dateTimeText}>
                  {mode === 'time' && moment.utc(date).format('HH:mm')}
                  {mode === 'date' && moment.utc(date).format('MM/DD/YYYY')}
                </Text>
              </View>
              {show && (
                <DateTimePicker
                  testID="dateTimePicker"
                  timeZoneOffsetInMinutes={0}
                  value={date}
                  mode={mode}
                  is24Hour
                  display={display}
                  onChange={onChange}
                  style={iOsPicker}
                />
              )}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Datepicker">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="User Details 1" component={UserName} />
        <Stack.Screen name="Datepicker" component={Datepick} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
  },
  boxCont: {
    flexDirection: 'column',
    justifyContent: 'center', //backgroundColor: 'white',
    alignItems: 'center',
    height: '50%',
    width: '90%', //opacity: 0.5,
  },
  secondCont: {
    width,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
    paddingTop: 40,
    backgroundColor: 'blue',
  },
  notchView: {
    flex: 1,
    backgroundColor: 'red',
    paddingTop: Platform.OS === 'android' ? StatusBar.Height : 0,
    width,
    height,
  },
  imageCont: {
    flex: 1,
    width,
    height,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleCont: {
    top: -60,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row', //backgroundColor: 'red',
  },
  titleText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
  },
  loginEmail: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 20,
    backgroundColor: 'white',
    borderRadius: 20,
  },
  loginPass: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 20,
    backgroundColor: 'white',
    borderRadius: 20,
  },
  loginConfirm: {
    width: 80,
    height: 44,
    padding: 10,
    borderColor: 'black',
    marginBottom: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.5,
  },

  loginText: {
    fontWeight: 'bold',
    textAlign: 'center',
    justifyContent: 'center',
  },

  nameCont: {
    flex: 1,
    justifyContent: 'flex-start',
    flexDirection: 'column',
    backgroundColor: 'blue',
    width,
    height,
  },
  namefillCont: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: 'white',
    // alignItems: 'center',
    width,
    height,
    paddingLeft: '3%',
  },
  userDetailfill: {
    width: '70%',
    height: 44,
    padding: 10,
    //borderWidth: 1,
    marginBottom: 10,
    borderBottomWidth: 1,
  },
  userContH: {
    width: '90%',
    height: 60,
    padding: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    //backgroundColor: 'red',
    // paddingRight: '4%',
  },
  dateTimeText: {
    fontSize: 16,
    fontWeight: 'normal',
  },
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  container: {
    marginTop: 32,
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  button: {
    alignItems: 'center',
    marginBottom: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  iOsPicker: {
    flex: 1,
  },
});

export default App;
