import { StyleSheet, Text, TextInput, View } from 'react-native'

interface IProps {
    label: string,
    setValue: (value: string) => void,
    value: string
}


export const Input = ({label, setValue, value}: IProps) => {
    return (
        <View>
            <Text>{label}:</Text>
            <TextInput 
                onChangeText={setValue} 
                value={value} 
                style={estilo.styleInput}
            />
            <Text>{value}</Text>
        </View>
    )
}

const estilo = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    styleInput: {
        height: 52,
        width: 200,
        borderWidth: 1,
        borderRadius: 8
    }
})