import {StyleSheet} from 'react-native';
import COLORS from '../../consts/colors';

const styleHelp = StyleSheet.create({
    queryTitle: {
        marginLeft: '15%',
        fontSize: 18, 
        fontWeight: 'bold',
        marginTop: 10
    },
    titleInput: {
        marginLeft: '15%',
        marginTop: '3%',
        height: 40,
        backgroundColor: COLORS.light,
        width: '80%',
        borderRadius: 10,
        paddingLeft: 10
    },
    querySearch: {
        marginLeft: '15%',
        marginTop: '3%',
        height: 90,
        backgroundColor: COLORS.light,
        width: '80%',
        paddingTop: '4%',
        borderRadius: 10,
        paddingLeft: 10,
        paddingBottom: 10,
    },
});

export default styleHelp;