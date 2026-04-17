import AntDesign from '@expo/vector-icons/AntDesign';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Image, TouchableOpacity, View } from "react-native";
import { estilo } from './styles';
import { router } from 'expo-router';

interface IList {
    image: string[],
    id: number,
    name: string,
    description: string,
    years: number,
    contact: string,
    address: string,
    gender: any,
    size: any
}

export const Home = () => {
    const [valueApi, setValueApi] = useState<IList[]>([])
    const [match, setMatch] = useState<IList[]>([])

    const requestApi = async () => {
        await axios.get("http://localhost:3000/dogs/getAllDogs").then((resp) => {
            setValueApi(resp.data)
        })
    }

    useEffect(() => {
        requestApi()
    }, [])

    const handlePressNo = () => {
        setValueApi((prevState) => prevState.slice(1))
    }

    const handlePressYes = () => {
        setMatch((prevMatch) => [...prevMatch, valueApi[0]])
        setValueApi((prevState) => prevState.slice(1))
    }

    return (
        <View style={estilo.container}>
            <TouchableOpacity onPress={() => router.navigate("/details")} style={estilo.content}>
                <Image
                    source={{uri: valueApi[0]?.image[0]}}
                    style={{
                        height: '90%',
                        width: '90%'
                    }}
                    resizeMode='contain'
                />
            </TouchableOpacity>
            <View style={estilo.contentButtons}>
                <TouchableOpacity 
                    onPress={handlePressNo} 
                    style={estilo.buttonNo}
                >
                    <AntDesign name="close" size={24} color="#fff" />
                </TouchableOpacity>
                <TouchableOpacity onPress={handlePressYes} style={estilo.buttonYes}>
                    <AntDesign name="heart" size={24} color="#fff" />
                </TouchableOpacity>
            </View>
        </View>
    )
}