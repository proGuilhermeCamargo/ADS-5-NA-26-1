import axios from 'axios';
import { useEffect, useState } from 'react';
import { Text, View } from "react-native";

export default function App () {
    const [agua, balde] = useState("")

    const chamaApi = async () => {
        await axios.get("http://localhost:3000/coca").then((resposta) => {
            console.log("RESPOSTA DA API", resposta.data)
            balde(resposta.data)
        })
    }

    useEffect(() => {
        chamaApi()
    }, [])

    return(
        <View>
            <Text>{agua}</Text>
        </View>
    )
}