import React, { useEffect } from 'react'
import { Pressable, Text, View } from 'react-native'
import { styles } from '../../../config'
import { useCounterStore } from '../../store/counter-store'
import { useNavigation } from '@react-navigation/native'

export const SettingsScreen = () => {

    const count = useCounterStore(state => state.count);
    const incrementBy = useCounterStore(state => state.incrementBy);
    const decreaseBy = useCounterStore(state => state.decreaseBy);

    const navigation = useNavigation();

    useEffect(() => {

        navigation.setOptions({
            title: `Count: ${count}`
        })
    }, [count])
    

    return (
        <View style={ styles.container }>
            <Text style={ styles.title }>Count: {count}</Text>

            <Pressable
                onPress={ () => incrementBy(count)}
                style={ styles.primaryButton }>
                <Text>+1</Text>
            </Pressable>

            <Pressable
                onPress={ () => decreaseBy(count)}
                style={ styles.primaryButton }>
                <Text>-1</Text>
            </Pressable>
        </View>
    )
}
