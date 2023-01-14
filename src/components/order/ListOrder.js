import {
  Dimensions,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import React, {useMemo, useState} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import Cancelled from './Cancelled';
import Confirmed from './Confirmed';
import Delivering from './Delivering';
import Processing from './Processing';
import Finished from './Finished';
import Pending from './Pending';
const renderSceneMap = SceneMap({
  first: Pending,
  second: Confirmed,
  third: Processing,
  fourth: Delivering,
  five: Finished,
  six: Cancelled,
});
const ListOrder = ({route}) => {
  const {key} = route.params;
  
  const navigation = useNavigation();
  const [index, setIndex] = React.useState(0);
  useMemo(() => {
    if (key) setIndex(key);
  }, [key]);
  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{backgroundColor: 'white'}}
      style={{backgroundColor: '#43bd1e', height: 40}}
      renderLabel={({route, focused, color}) => (
        <Text style={{color}}>{route.title}</Text>
      )}
      scrollEnabled={true}
    />
  );
  const [routes] = React.useState([
    {key: 'first', title: 'Chờ xác nhận'},
    {key: 'second', title: 'Đã xác nhận'},
    {key: 'third', title: 'Đang xử lý'},
    {key: 'fourth', title: 'Đang vận chuyển'},
    {key: 'five', title: 'Hoàn thành'},
    {key: 'six', title: 'Đã hủy'},
  ]);
  return (
    <>
      <View style={styles.viewHis}>
        <TouchableOpacity style={styles.hisOdr}>
          <AntDesign
            name="arrowleft"
            size={30}
            color={'black'}
            onPress={() => {
              navigation.navigate('Account');
            }}></AntDesign>
        </TouchableOpacity>
        <Text style={styles.viewText}>Lịch sử đơn hàng</Text>
      </View>
      <TabView
        navigationState={{index, routes}}
        renderScene={renderSceneMap}
        onIndexChange={setIndex}
        renderTabBar={renderTabBar}
      />
    </>
  );
};

export default ListOrder;

const styles = StyleSheet.create({
  screenTap: {
    marginTop: StatusBar.currentHeight,
  },
  container: {
    // height: 120,
    width: '100%',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    width: '100%',
    flexDirection: 'row',
    paddingLeft: 10,
    height: 35,
  },
  viewText: {
    textAlign: 'center',
    fontSize: 20,
    width: '90%',
    paddingRight: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  hisOdr: {
    width: 28,
    alignItems: 'center',
  },
  viewHis: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#43bd1e',
  },
});
