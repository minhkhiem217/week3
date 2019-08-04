import React from 'react';
import {View,Text, StyleSheet} from 'react-native';

function GameStatus(props){
    return(
        <View>
            <Text style={styles.text}>Result:{props.result}</Text>
        </View>
    )
}

const styles = StyleSheet.create({

    text: {
        fontSize:35,
        fontWeight: '600'
    }
    })

export default GameStatus;