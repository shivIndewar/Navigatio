import { FlatList, StyleSheet } from 'react-native';
import {CATEGORIES} from '../data/dummy-data';
import GridTile from '../comps/GridTile'

function CategoriesScreen({ navigation }){

    function renderCategoryItem(itemData){
        function pressHandler(){
            navigation.navigate('MealsOverView',{
                categoryId :itemData.item.id
            });
        }
        return <GridTile title={itemData.item.title} color={itemData.item.color} onPress={pressHandler}></GridTile>
    }

    return <FlatList data={CATEGORIES} 
                    keyExtractor={(item)=>item.id} 
                    renderItem={renderCategoryItem}
                    numColumns={2}
                    ></FlatList>
} 

export default CategoriesScreen;

