import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class InvestorInfo extends Component {
  constructor(props, ctx) {
    super(props, ctx);
    this.state = {
      investor: this.props.route.params
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{this.state.investor.about}</Text>
      </View>
    )
  };
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  },
  title: {
    padding: 5,
  }
})

