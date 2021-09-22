import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme=>({

root:{
    backgroundColor:"white",
    width:"25%",
    padding:'1.5rem 2rem'
},
profText:{
    marginLeft:'0.5rem',
    width:'max-content',
    direction:'ltr'
},
profName:{
    marginLeft:'0.7rem',
    marginTop:'0.7rem'
},
profId:{
flex:1,
color:theme.palette.text.hint,
fontSize:"0.90rem",
    marginLeft:'0.7rem',
    marginTop:'0.1rem'
},
tweeterRoot:{
backgroundColor:'#f5f8fa',
marginTop:'3rem',
borderRadius:'2.5rem',
padding:'11px 24px'
},
tweeterTitle:{
    fontSize:"1rem !important",
    fontWeight:'600 !important',
    marginBottom:'11px'
},
tweeterNameParent:{
    marginLeft:'0.5rem',
    width:'max-content'
},
tweeterParent:{
    padding: '10px 0'
},
  menu: {
    backgroundColor: 'white',
    padding: '1rem',
  },
  twitterImg: {
    width: 50,
    height: 50,
    borderRadius: '50%'
  }

}));

export default useStyles;