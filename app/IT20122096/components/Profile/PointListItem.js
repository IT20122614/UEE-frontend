import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import colors from '../../config/colors';

export default function PointListItem({item}) {
  return (
    <View style={styles.pointCard}>
      <Text style={[styles.pointText, { flex: 1.5 }]}>{item.year}</Text>
      <Text style={[styles.pointText, { flex: 4 }]}>{ item.month}</Text>
      <Text style={[styles.pointText, { flex: 0, alignSelf: "flex-end" }]}>
        {item.point}
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  pointCard: {
    flexDirection: "row",
    display: "flex",
    padding: 10,
    borderBottomWidth: 1,
    borderStyle: "solid",
    borderColor: colors.primary,
    marginLeft: 10,
    marginRight: 10,
    marginBottom:20
  },
  pointText: {
    color: colors.primary,
    fontSize: 20,
  },
});