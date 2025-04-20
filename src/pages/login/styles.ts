
import { Dimensions, StyleSheet } from "react-native";
import { themas } from "../../global/themes";

//container é o quadrado que engloba tudo, dando padding veremos a difernça
// os boxtop,mid e  bottom são os menores.
export const style = StyleSheet.create({
    container:{
        flex : 1,
        alignItems: 'center',
        justifyContent : 'center',
        //padding : 20

    },
    boxTop:{
        height: Dimensions.get('window').height/3,
        width: '100%',
        //backgroundColor : 'red',
        alignItems:'center',
        justifyContent: 'center'

    },
    boxMid:{
        height: Dimensions.get('window').height/4,
        width: '100%',
        //backgroundColor : 'green',
        paddingHorizontal: 37,
        //alignItems: 'center',
        //justifyContent: 'center'

    },
    boxBottom:{
        height: Dimensions.get('window').height/3,
        width: '100%',
        //backgroundColor : 'blue',
        alignItems: 'center',
        justifyContent: 'center'

    },
    logo:{
        width: 80, 
        height: 80
    },
    //text é o texto de bem vindo... , margin ea diferença da logo e texto
    text:{
        fontWeight: 'bold',
        marginTop:30,
        fontSize: 18


    },
    titleInput:{
        marginLeft:5,
        color: themas.colors.gray,
        marginTop: 20

    },
    //onde vai ser
    BoxInput:{
        width:'100%',
        height:40,
        borderWidth:1,
        borderRadius:40,
        marginTop:10,
        flexDirection: 'row',
        alignItems:'center',
        paddingHorizontal: 10,
        backgroundColor: themas.colors.lightGray,
        borderColor: themas.colors.lightGray

    },
    input:{
        height:'100%',
        width: '90%', 
        //backgroundColor:'red',
        borderRadius:40,
        paddingLeft:5
    },
    button:{
        width:250,
        height:50,
        alignItems:'center',
        justifyContent:'center',
        
        backgroundColor:themas.colors.primary,
        borderRadius:40,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        
        elevation: 7,
    },
    textButton:{
        fontSize:16,
        color:'#FFFF',
        fontWeight:'bold'
    },
    textBottom:{
        fontSize:16,
        color:themas.colors.gray
    },
    // textBottomCreate:{
    //     fontSize:16,
    //     color:themas.colors.primary,
    // }


})