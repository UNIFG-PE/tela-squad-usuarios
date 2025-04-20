import React, { useState } from "react";

import {Text, View, Image, TextInput, TouchableOpacity, Alert} from 'react-native';

import { style } from "./styles";

import Logo from '../../assets/Circle.png1.png'

import {MaterialIcons} from '@expo/vector-icons';
import { themas } from "../../global/themes";
import { Colors } from "react-native/Libraries/NewAppScreen";

export default function Login(){
    // A programação começa nesse codigo
const [email, setEmail] = useState ('');
const [passoword,setPassword] = useState('');

function getLogin(){
    try {
        if(!email || !passoword){
            return Alert.alert('atenção','informe os campos obrigatórios!')
        }
        Alert.alert('Logado com sucesso')

    } catch (error) {
        console.log(error)
    }
}

    return (
        <View style = {style.container}>
               <View style = {style.boxTop}>
                <Image
                    source = {Logo}
                    style = {style.logo}
                    resizeMode="contain"
                />
                <Text style = {style.text}>Bem vindo de volta!</Text>
               </View>
               <View style = {style.boxMid}>
                <Text>ENDEREÇO DE E-MAIL</Text>
                <View style = {style.BoxInput} >           
                <TextInput
                    style={style.input}
                    value={email}
                    
                    /*tem essa forma  onChangeText={(e) => setEmail(e)} ou essa onChangeText={setPassword} - detecta quando o texto está sendo digitado ou modificado. Serve para pegar o que o usuário digitou.*/
                    onChangeText={(e) => setEmail(e)}
                />
                <MaterialIcons
                    name='email'
                    size={20}
                    color={themas.colors.gray}
                    />          

               </View>
               <Text style={style.titleInput}>SENHA</Text>
               <View style = {style.BoxInput} >           
                <TextInput
                    style={style.input}
                    value={passoword}
                    onChangeText={setPassword}
                />
                <MaterialIcons
                    name='remove-red-eye'
                    size={20}
                    color={themas.colors.gray}
                    />          

               </View>
               </View>
               <View style ={style.boxBottom}>
                <TouchableOpacity style = {style.button} onPress= {()=>getLogin()}>
                    <Text style={style.textButton}>Entrar</Text>
                </TouchableOpacity>              
                    
                    
            </View>
            <Text style = {style.textBottom}>Não tem conta?<Text style ={{color: themas.colors.primary}}>crie agora!</Text></Text>
        </View>  

    )
}