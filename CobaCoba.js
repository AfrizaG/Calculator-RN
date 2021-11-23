import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const CobaCoba = () => {

    let angka = '12345678'

    function numberWithCommas(x) {
        return x.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    numberWithCommas(angka)
    let huhu = angka.length



    return (
        <View style={styles.body}>
            <Text style={styles.textStyling}>{numberWithCommas(angka)}</Text>
        </View>
    )
}

export default CobaCoba

const styles = StyleSheet.create({
    body : {
        flex : 1,
        backgroundColor : '#a5b4aa',
        justifyContent : 'center',
        alignItems : 'center'
    }, 
    textStyling : {
        fontSize: 36
    }
})
