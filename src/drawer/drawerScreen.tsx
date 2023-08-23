import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {DrawerParamsList} from '../../navigation/navigate';
import Home from '../homescreen/home';

export default function DrawerScreen(): JSX.Element {
  const Drawer = createDrawerNavigator<DrawerParamsList>();
  return (
    <Drawer.Navigator screenOptions={{drawerType: 'front', headerShown: false}}>
      <Drawer.Screen name="HomeDrawer" component={Home} />
    </Drawer.Navigator>
  );
}
