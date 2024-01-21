import {Platform, View, Text, Pressable, StyleSheet, Image } from "react-native";
import {useNavigation} from '@react-navigation/native'
import MealDetails from "./MealDetails";

function MealItem({id, title, imageUrl, duration, complexity,afordability}){

    const navigation = useNavigation();

    function selectMealItemHandler(){
        navigation.navigate('MealDetailsScreen', {
            mealId : id
        });
    }

    return (<View style={styles.mealItem}>
        <Pressable android_ripple={{color:'#ccc'}}
                   style={({pressed})=>pressed ? styles.buttonPressed : null}
                    onPress={selectMealItemHandler}>
            <View>
                <View>
                    <Image source={{ uri: imageUrl }} style={styles.image} />       
                    <Text style={styles.title}>{title}</Text>
                </View>
                <MealDetails duration={duration} complexity={complexity} afordability={afordability} />
            </View>
        </Pressable>
    </View>
    );
}

export default MealItem;

const styles = StyleSheet.create({
    mealItem :{
      margin : 16,
      borderRadius:8,
      overflow : 'hidden',
      backgroundColor :'white',
      elevation :4,
      shadowColor:'black',
      shadowOpacity : 0.35,
      shadowOffset: {width: 0, height: 2},
      shadowRadius : 16,
      overflow: Platform.OS==='android'?'hidden': 'visible'
    },
    innerContainer :{
        borderRadius : 8,
        overflow : 'hidden'
    },
    image:{
        width: '100%',
        height: 200
    },
    title:{
        fontWeight:'bold',
        textAlign:'center',
        fontSize: 18,
        margin: 8
    },
    details:{
        flexDirection : 'row',
        alignItems:'center',
        padding : 8,
        justifyContent : 'center'
    },
    detailsItem :{
        marginHorizontal : 4,
        fontSize : 12
    },
    buttonPressed :{
        opacity : 0.5
    },
});