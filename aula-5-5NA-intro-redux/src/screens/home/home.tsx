import { decrement, increment } from '@/src/store/slices/counter'
import { RootState } from '@/src/store/store'
import { router } from 'expo-router'
import { Button, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

export const Home = () => {
    const valorDoContador = useSelector((state: RootState) => state.counter.value)
    const dispatch = useDispatch()

    return (
        <View>
            <Button
                title='+'
                onPress={() => dispatch(increment())}
            />
            <Text>{valorDoContador}</Text>
            <Button
                title='-'
                onPress={() => dispatch(decrement())}
            />
            <Button
                title='Navega para outra tela'
                onPress={() => router.navigate("/details")}
            />
        </View>
    )
}