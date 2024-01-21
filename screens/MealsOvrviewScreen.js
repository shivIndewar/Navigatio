import { View, Text, FlatList, StyleSheet } from 'react-native';
import {CATEGORIES, MEALS} from '../data/dummy-data'
import MealItem from '../comps/MealItem';
import { useLayoutEffect } from 'react';

function MealsOverViewScreen({ route, navigation }){

    const catId = route.params.categoryId;
    const displayedMeals = MEALS.filter((mealItem)=>{ 
            return mealItem.categoryIds.indexOf(catId) >= 0;
        }  
    );

        
    useLayoutEffect(()=>{
            const categoryTitle = CATEGORIES.find((category)=>category.id === catId).title;
            navigation.setOptions({
                title : categoryTitle
            });
    },[catId, navigation]);
    

    function renderMealItem(itemData){
        const item = itemData.item; 
        const mealItemProps ={
            id : item.id,
            title: item.title,
            imageUrl:item.imageUrl, 
            duration:item.duration,
            complexity: item.complexity,
            afordability:item.affordability
        }
        return (
        
            <MealItem  {...mealItemProps} />
        
            );
    }

    return(
        <View>
            <FlatList data={displayedMeals} keyExtractor={(item) => item.id } renderItem={renderMealItem}></FlatList>
        </View>
    );     
}

export default MealsOverViewScreen;

const styles = StyleSheet.create({
        container :{
            flex : 1,
            padding : 16
        }
});