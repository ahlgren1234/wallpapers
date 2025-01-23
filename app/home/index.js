import { View, Text, StyleSheet, Pressable, ScrollView, TextInput } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Feather, FontAwesome6, Ionicons } from '@expo/vector-icons';
import { theme } from '../../constants/theme';
import { hp, wp } from '../../helpers/common';


const HomeScreen = () => {

    const { top } = useSafeAreaInsets();
    const paddingTop = top > 0 ? top + 10 : 30;

    return (
        <View style={[styles.container, {paddingTop}]}>
            {/* header */}
            <View style={styles.header}>
                <Pressable>
                    <Text style={styles.title}>
                        Pixels
                    </Text>
                </Pressable>
                <Pressable>
                    <FontAwesome6 name="bars-staggered" size={22} color={theme.colors.neautral(0.7)} />
                </Pressable>
            </View>

            <ScrollView
                contentContainerStyle={{gap: 15}}
            >
                {/* search bar */}
                <View style={styles.searchBar}>
                    <View style={styles.searchIcon}>
                        <Feather name="search" size={24} color={theme.colors.neautral(0.4)} />
                    </View>
                    <TextInput
                        placeholder='Search for photos...'
                        style={styles.searchInput}
                    />
                    <Pressable style={styles.closeIcon}>
                        <Ionicons name="close" size={24} color={theme.colors.neautral(0.6)} />
                    </Pressable>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 15,
    },
    header: {
        marginHorizontal: wp(4),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        fontSize: hp(4),
        fontWeight: theme.fontWeights.semibold,
        color: theme.colors.neautral(0.9),
    },
})

export default HomeScreen