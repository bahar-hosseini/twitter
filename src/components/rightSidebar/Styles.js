
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme=>({

root:{
    backgroundColor:"white",
    width:"18%",
    padding:'1.5rem 1rem'
},
logoType:{
    fontSize:'1.75rem !important',
    fontWeight:"700 !important",
    marginleft:'20px',
    color:'#5EA9DD'
    
},
hashTagTitle:{
    fontSize:'1.25rem !important',
    fontWeight:"600 !important",
    marginTop:'3rem',
    marginBottom:'1.5rem'
},
hashtag:{
    marginRight:'0.8rem',
    padding:'0.75rem'
},
hashTagParent:{
    marginBottom:'0.5rem',
    padding:'0.15rem !important',
    width:'100%'
}
}));

export default useStyles;