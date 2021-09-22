import React, {useEffect, useState} from 'react';
import useStyle from './Styles'
import RightSidebar from "../rightSidebar/RightSidebar";
import Divider from "@material-ui/core/Divider";
import LeftSidebar from "../leftSidebar/LeftSidebar";
import {getProfileRequest} from "../../api/api_auth";
import {toast} from "react-toastify";
import {useHistory} from 'react-router-dom'
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";


const Layout = (props) => {
  const classes = useStyle();
  const history = useHistory();


  const [wait, setWait] = useState(true);

  useEffect(() => {
    getProfileRequest((isOk, data) => {
      if (!isOk) {
        toast.error(data);
        localStorage.clear();
        return history.push("/login")
      }
      setWait(false);
      localStorage.setItem("name", data.name);
      localStorage.setItem("image", data.image);
      localStorage.setItem("username", data.username);
      localStorage.setItem("x-auth-token", data["x-auth-token"]);
    })
  }, [])

  if (wait)
    return <div className={classes.waitParent}>
      <CircularProgress className={"uni_m_b_small"}/>
      <Typography>{("wait")}</Typography>
    </div>;
  else
    return (
      <div className={classes.root}>
        <LeftSidebar/>
        <Divider orientation={"vertical"} className={classes.divider}/>
        <div className={classes.content}>
          {props.children}
        </div>
        <Divider orientation={"vertical"} className={classes.divider}/>
        <RightSidebar/>
      </div>
    );
};

export default Layout;