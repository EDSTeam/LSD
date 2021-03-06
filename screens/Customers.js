import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  TouchableHighlight,
  // Button,
  // Picker,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
// import DropDownItem from "react-native-drop-down-item";
// import {
//   TouchableHighlight,
//   BorderlessButton,
// } from "react-native-gesture-handler"

export default function Customers() {
  const [ban, setban] = useState(false);

  function isban(ban) {
    setban(!ban);
  }
  // function changeclr(ban){
  // }
  const [cust, setcust] = useState([
    {name: 'jawadg01', email: 'abcde@ab.com1'},
    {name: 'jawadg02', email: 'abcde@ab.com2'},
    {name: 'jawadg03', email: 'abcde@ab.com3'},
    {name: 'jawadg04', email: 'abcde@ab.com4'},
    {name: 'jawadg05', email: 'abcde@ab.com5'},
    {name: 'jawadg06', email: 'abcde@ab.com6'},
    {name: 'jawadg07', email: 'abcde@ab.com7'},
    {name: 'jawadg08', email: 'abcde@ab.com8'},
    {name: 'jawadg09', email: 'abcde@ab.com9'},
    {name: 'jawadg010', email: 'abcde@ab.com10'},
    {name: 'jawadg011', email: 'abcde@ab.com11'},
    {name: 'jawadg012', email: 'abcde@ab.com12'},
  ]);

  return (
    <View style={styles.Screen}>
      <View style={{width: '100%'}}>
        <FlatList
          data={cust}
          keyExtractor={item => item.email}
          renderItem={({item}) => (
            <TouchableOpacity raised style={styles.TextInputbox}>
              <View style={{flexDirection: 'column'}}>
                <Text style={styles.title}>{item.name}</Text>
                <Text style={styles.boxfont}>{item.email}</Text>
              </View>

              <TouchableOpacity
                style={{justifyContent: 'center'}}
                onPress={() => isban(ban)}>
                <Icon name="ban" size={24} color={ban ? 'black' : 'red'} />
              </TouchableOpacity>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // confirmbutton: {
  //   flexDirection: 'row',
  //   // width: "30%",
  //   padding: 50,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  Screen: {
    // flexDirection: "column",
    height: '100%',
    padding: '10%',
    backgroundColor: '#d3d3d3',

    // flex: '20%',
  },
  TopBar: {
    padding: 20,
    flexDirection: 'row',
    flex: 2,

    width: '100%',
    height: '100%',
    backgroundColor: '#d00f16',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  TopBarText: {
    // padding: 40,
    flexDirection: 'row',
    fontSize: 30,
    fontFamily: 'Roboto-Bold',
    color: 'white',
    textAlign: 'left',
    alignItems: 'flex-start',
    flex: 6,
  },
  TopBarSearch: {
    // flexDirection: "row",
    alignItems: 'flex-end',
    color: 'white',
    fontSize: 20,
    flex: 1,
  },
  TopBarBack: {
    color: 'white',
    flex: 1,
    fontSize: 20,
  },
  RestScreen: {
    // flex: 9,
    // width: 100,
    // flex: 8,
    // width: 100,
    padding: '15%',
    backgroundColor: '#d3d3d3',
    height: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  firstbox: {
    width: '100%',
    flexDirection: 'row',
    marginVertical: 10,
    borderColor: 'black',
    backgroundColor: 'white',
    borderWidth: 0.5,
    borderRadius: 10,
    height: 50,
    paddingTop: 40,
    // justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'darkgrey',
    shadowOpacity: 20,
    // justifyContent: "center",
  },
  TextInputbox: {
    flexDirection: 'row',
    padding: 7,
    paddingHorizontal: 16,
    width: 328,
    height: 64,
    borderRadius: 5,
    elevation: 5,
    // flexDirection: 'row',
    marginVertical: 10,
    borderColor: 'black',
    backgroundColor: 'white',
    borderWidth: 0,
    alignContent: 'center',
    justifyContent: 'space-between',
    textAlign: 'left',
    fontFamily: 'Roboto-Bold',
    shadowColor: 'darkgrey',
    shadowOpacity: 20,
    // borderRadius: 10,
    // height: 50,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  boxfont: {
    fontSize: 12,
    paddingTop: 4,
  },

  Confirmbutton: {
    // padding: 20,
    // paddingBottom: 20,
    paddingHorizontal: 15,
    backgroundColor: '#d00f16',
    borderRadius: 20,
    width: 200,
    height: 40,
    shadowColor: '#000',
    shadowOffset: {width: 2, height: 4},
    shadowOpacity: 0.9,
    shadowRadius: 6,
    elevation: 2,
    minHeight: '6%',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bigbuttontext: {
    fontWeight: 'bold',
    color: 'white',
    fontFamily: 'Roboto-Bold',
    fontSize: 20,
    textAlign: 'center',
    paddingTop: '2%',

    // opacity: 1,
  },
  bigbutton: {
    // padding: '50%',
    paddingHorizontal: '23%',
    flex: 2,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});
