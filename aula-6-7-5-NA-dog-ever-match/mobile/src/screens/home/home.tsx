import AntDesign from '@expo/vector-icons/AntDesign';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Image, TouchableOpacity, View } from "react-native";
import { estilo } from './styles';

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

    const requestApi = async () => {
        await axios.get("http://localhost:3000/dogs/getAllDogs").then((resp) => {
            setValueApi(resp.data)
        })
    }

    useEffect(() => {
        requestApi()
    }, [])

    return (
        <View style={estilo.container}>
            <TouchableOpacity style={estilo.content}>
                <Image
                    source={{uri: valueApi[0]?.image[0]}}
                    style={{
                        height: '90%',
                        width: '90%'
                    }}
                    resizeMode='contain'
                />
            </TouchableOpacity>
            <View style={{
                width: '80%',
                flexDirection: 'row',
                justifyContent: 'space-between'
            }}>
                <TouchableOpacity style={{
                    height: 80,
                    width: 80,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'red'
                }}>
                    <AntDesign name="close" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={{
                    height: 80,
                    width: 80,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'green'
                }}>
                    <AntDesign name="heart" size={24} color="black" />
                </TouchableOpacity>
            </View>
        </View>
    )
}