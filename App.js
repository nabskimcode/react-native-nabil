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
  Picker,
} from 'react-native';

import DateTimePickerModal from 'react-native-modal-datetime-picker';
// import DateTimePicker from '@react-native-community/datetimepicker';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Dropdown} from 'react-native-material-dropdown';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {red} from 'color-name';
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
    forgetPass,
    loginAndforget,
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
          <Text style={titleText}>Insurance - Ez</Text>
        </View>
        <View style={boxCont}>
          <TextInput style={loginEmail} placeholder={'Email'} />

          <TextInput
            placeholder={'Password'}
            secureTextEntry={true}
            style={loginPass}
          />
          <View style={loginAndforget}>
            <TouchableOpacity
              style={loginConfirm}
              // onPress={() => {
              //   navigation.navigate('Details', {
              //     itemId: 86,
              //     otherParam: 'anything you want here',
              //   });
              // }}
              onPress={() => navigation.navigate('Register')}>
              <Text style={loginText}>LOGIN</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={forgetPass}
              onPress={() => navigation.navigate('Register')}>
              <Text style={loginText}>Forget Password</Text>
            </TouchableOpacity>
          </View>
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
  const [isWeddingVisible, setWeddingVisibility] = useState(false);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isLoanPurpose, setLoanPurpose] = useState('');
  const [isdate, setDate] = useState(new Date());

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  // const handleConfirm = date => {
  //   console.warn('A date has been picked: ', date);
  //   hideDatePicker();
  // };

  const showWeddingField = itemValue => {
    if (itemValue === 'wedding') {
      setWeddingVisibility(true);
      setLoanPurpose(itemValue);
    } else {
      setWeddingVisibility(false);
      setLoanPurpose(itemValue);
    }
  };
  const onChange = selectedDate => {
    const currentDate = selectedDate || isdate;
    // setDatePickerVisibility(Platform.OS === 'ios');
    setDatePickerVisibility(false);
    setDate(currentDate);
    console.warn('A date has been picked: ', currentDate);
    // hideDatePicker();
  };

  const loanPurposeField = () => {
    console.warn('purpose selected', isLoanPurpose);
  };
  const {
    nameCont,
    namefillCont,
    loginEmail,
    userDetailfill,
    userContH,
    loginConfirm,
    dateTimeText,
    dropdownCont,
    dateCont,
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

  let loantenureData = [
    {
      value: '1 year',
    },
    {
      value: '2 years',
    },
    {
      value: '3years',
    },
  ];
  return (
    <ScrollView>
      <View style={nameCont}>
        <View style={namefillCont}>
          <Dropdown label="Title" data={data} containerStyle={dropdownCont} />
          <TextInput style={userDetailfill} placeholder={'First name'} />
          <TextInput style={userDetailfill} placeholder={'Last name'} />
          <Dropdown
            label="Gender"
            data={genderData}
            containerStyle={dropdownCont}
            dropdownOffset={{top: 10, left: 0}}
          />
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
            <Button title="Select Birth Date" onPress={showDatePicker} />
            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="date"
              onConfirm={onChange}
              onCancel={hideDatePicker}
              // date={isdate}
            />
            <Text style={dateCont}>
              {moment.utc(isdate).format('MM/DD/YYYY')}
            </Text>
          </View>

          <TextInput style={userDetailfill} placeholder={'Email'} />
          <TextInput style={userDetailfill} placeholder={'Phone No'} />
          <TextInput style={userDetailfill} placeholder={'Loan amount'} />
          <Dropdown
            label="Loan tenure"
            data={loantenureData}
            dropdownOffset={{top: 10, left: 0}}
          />
          <Picker
            selectedValue={isLoanPurpose}
            style={{height: 50, width: 100}}
            onValueChange={(itemValue, itemIndex) => {
              // setLoanPurpose(itemValue);
              showWeddingField(itemValue);
            }}>
            <Picker.Item label="Car" value="car" />
            <Picker.Item label="Travel" value="travel" />
            <Picker.Item label="Wedding" value="wedding" />
          </Picker>
          {isWeddingVisible === true && (
            <Button title="Select Date" onPress={showDatePicker} />
          )}
          {/* <TextInput style={userDetailfill} placeholder={'Wedding Date'} /> */}
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

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Register" component={UserName} />
        {/* <Stack.Screen name="Datepicker" component={Datepick} /> */}
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
    justifyContent: 'center',
    // backgroundColor: 'white',
    alignItems: 'center',
    height: '60%',
    width: '90%', //opacity: 0.5,
    position: 'relative',
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
    // position: 'relative',
  },
  titleCont: {
    top: -30,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    //backgroundColor: 'red',
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
    borderColor: 'white',
    marginBottom: 20,
    backgroundColor: 'white',
    // borderRadius: 20,
    opacity: 0.8,
    fontWeight: 'bold',
  },
  loginPass: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'white',
    marginBottom: 20,
    backgroundColor: 'white',
    // borderRadius: 20,
    opacity: 0.8,
    fontWeight: 'bold',
  },
  loginConfirm: {
    width: 200,
    height: 35,
    padding: 5,
    borderColor: 'black',
    backgroundColor: 'white',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.5,
    marginBottom: '5%',
    paddingTop: 0,
  },
  forgetPass: {
    width: 200,
    height: 35,
    padding: 5,
    borderColor: 'black',
    backgroundColor: 'white',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.5,
  },
  loginAndforget: {
    flex: 1,
    width: '80%',
    bottom: 10,
    padding: 10,
    flexDirection: 'column',
    // backgroundColor: 'red',
    alignItems: 'center',
    // position: 'relative',
    position: 'absolute',
    // paddingLeft: '15%',
    justifyContent: 'center',
  },
  loginText: {
    fontWeight: 'bold',
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 12,
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
    height: 40,
    padding: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    justifyContent: 'center',
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
  dropdownCont: {
    width: '30%',
  },
  dateCont: {
    //  backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
  },
});

export default App;
