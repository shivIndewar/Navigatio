import { View, Image, Text, StyleSheet, ScrollView, Button } from "react-native";
import { MEALS } from '../data/dummy-data';
import MealDetails from "../comps/MealDetails";
import SubTitle from '../comps/MealDetail/SubTitle'
import List from "../comps/MealDetail/List";
import { useLayoutEffect } from "react";
import IconButton from '../comps/IconButton';

function MealDetailsScreen({route, navigation}){
    const mealsId = route.params.mealId;

    const selectedMealItem = MEALS.find((mealItem)=> mealItem.id === mealsId);

    function headerTapedHandler(){
        console.log('Pressed');
    }

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerRight : ()=>{
                return <IconButton icon="star" color="white" onPress={headerTapedHandler} />
            }
        });
    },[navigation, headerTapedHandler]);

    return (<ScrollView style={styles.rootContiner}>
           <Image source={{uri: selectedMealItem.imageUrl}} style={styles.image} />
           <Text style={styles.title}>{selectedMealItem.title}</Text>
           <MealDetails duration={selectedMealItem.duration} complexity={selectedMealItem.complexity} 
                        afordability={selectedMealItem.affordability} textStyle= {styles.detailText} />

        <View style={styles.listOuterContainer}>         
            <View style={styles.listContainer}>
                <SubTitle> Ingredients </SubTitle>
                <List data={selectedMealItem.ingredients} />
                <SubTitle> Steps </SubTitle>   
                <List data={selectedMealItem.steps} />
            </View>
        </View>    
       </ScrollView>
    );
}
export default MealDetailsScreen;

const styles = StyleSheet.create({
    rootContiner:{
        marginBottom : 32
    },
    image:{
        width : '100%',
        height : 350
    },
    title:{
        fontWeight :'bold',
        fontSize : 18,
        textAlign: 'center',
        margin : 8,
        color: 'white'
    },
    detailText :{
        color : 'white'
    },
    listContainer:{
        width :'80%' 

    },
    listOuterContainer :{
        alignItems:'center'
    }
   
});