import React, { Component } from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert } from 'react-native'
import Investors from "./Investorlist.json"

class InvestorList extends Component {

    handleOnPress = (item) => {
        this.props.navigation.navigate('InvestorInfo')
    }
    loadItems = ({ item }) => (
        <TouchableOpacity onPress={() => this.props.navigation.navigate('InvestorInfo', item)}>
            <View style={item.isActive ? styles.containerActive : styles.containerInActive}>
                <View>
                    <Text style={styles.title}>Name: {item.name}</Text>
                    <Text style={styles.details}>Balance: {item.balance}</Text>
                    <Text style={styles.details}>Age: {item.age}</Text>
                    <Text style={styles.details}>Email: {item.email}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
    render() {
        return (
            <View style={styles.viewContainer}>
                <FlatList
                    removeClippedSubviews={true}
                    data={Investors.Investors}
                    renderItem={item => this.loadItems(item)}
                    ItemSeparatorComponent={() => (
                        <View style={{ backgroundColor: "#FFF", height: 2 }} />
                    )}
                />
            </View>

        )
    }
}
export default InvestorList

const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
        justifyContent: 'center',
        paddingLeft: 5,
        paddingRight: 5,
        backgroundColor: '#FFF',
    },
    containerActive: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: '#FFF',
        flexDirection: 'row',
        alignItems: 'center',
        width: "100%",

    },
    containerInActive: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: '#bebebe',
        flexDirection: 'row',
        alignItems: 'center',
        width: "100%"
    },
    title: {
        padding: 5,
    },
    details: {
        padding: 5,
        marginRight: 30,
    }
})

