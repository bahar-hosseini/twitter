import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme=>({
header:{
    padding:17,
    backgroundColor:'white !important',
    display:'flex'
},
headerTitle:{
    fontSize:'1.2rem',
    fontWeight:600,
    marginleft:'0.5rem'
}
}));

export default useStyles;