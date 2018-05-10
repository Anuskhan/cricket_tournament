import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,TextInput,Button,Image,
    Text,ScrollView,SafeAreaView,
    View
  } from 'react-native';
  
import { drawerIcon,drawerLabel,drawerLabel,DrawerNavigator } from 'react-navigation';
import { DrawerItems, SafeAreaView } from 'react-navigation';

const CustomDrawerContentComponent = (props) => (
  <ScrollView>
    <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
      <DrawerItems {...props} />
    </SafeAreaView>
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});