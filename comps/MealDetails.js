import { View, Text, StyleSheet } from "react-native";

function MealDetails({duration,complexity,afordability, style, textStyle}){
    return (
    <View style={[styles.details, style]}>
        <Text style={[styles.detailsItem, textStyle]}>{duration}</Text>
        <Text style={[styles.detailsItem,textStyle]}>{complexity}</Text>
        <Text style={[styles.detailsItem,textStyle]}>{afordability}</Text>
    </View>
);

}

export default MealDetails;

const styles = StyleSheet.create({
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
});