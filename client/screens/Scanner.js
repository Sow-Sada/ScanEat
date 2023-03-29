import React from 'react';
import { StyleSheet, StatusBar, Text, SafeAreaView } from 'react-native';

export default function Scanner() {
  return (
    <SafeAreaView style={[styles.container, styles.AndroidSafeArea]}>
      <Text>Scanner</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  AndroidSafeArea: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});