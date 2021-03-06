import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
root:{
display:"flex",
height:"100vh",
width:"100%",
overflow:"hidden"
},
divider:{
height:'100%',
width:'1 !important',
backgroundColor:'#7EBAFF !important',
filter:"opacity(0.75)",
},
content:{
    flex:1,
    overflowY:'auto',
    backgroundColor:'white'
}
});

export default useStyles;