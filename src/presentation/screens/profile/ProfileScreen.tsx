import React from 'react'
import { Pressable, Text, View } from 'react-native'
import { styles } from '../../../config'
import { useProfileStore } from '../../store/profile-store'
import { useCounterStore } from '../../store/counter-store'

export const ProfileScreen = () => {

    const name = useProfileStore(state => state.name);
    const email = useProfileStore(state => state.email);
    const changeProfile = useProfileStore(state => state.changeProfile);

    const count = useCounterStore(state => state.count);


    return (
        <View style={ styles.container }>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.title}>{email}</Text>
            <Text style={ styles.title }>Count: {count}</Text>

            <Pressable
                onPress={ () => useProfileStore.setState({ name: 'David'})}
                style={ styles.primaryButton }>
                <Text>Change Name</Text>
            </Pressable>

            <Pressable
                onPress={ () => useProfileStore.setState({ email: 'david@mail.com'})}
                style={ styles.primaryButton }>
                <Text>Change Email</Text>
            </Pressable>

            <Pressable
                onPress={ () => changeProfile('Dua', 'dua@mail.com')}
                style={ styles.primaryButton }>
                <Text>Return</Text>
            </Pressable>
        </View>
    )
}
