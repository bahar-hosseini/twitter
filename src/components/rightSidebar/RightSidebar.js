import React, {useEffect, useState} from 'react';
import Typography from "@material-ui/core/Typography";
import useStyle from './Styles'
import Grid from "@material-ui/core/Grid";
import ButtonBase from "@material-ui/core/ButtonBase";
import {Link} from "react-router-dom";
import {getHashTags} from "../../api/api_tweet";
import {setHashTagList, useTweetDispatch, useTweetState} from "../../context/TweetContext";
import { toast} from "react-toastify";


const RightSidebar = () => {

  const classes = useStyle();
  const {hashTags} = useTweetState();
  const tweetDispatch = useTweetDispatch();
  useEffect(() => {
    getHashTags((isOk, data) => {
      if (!isOk)
        return toast.error("can not find hashtag");
      setHashTagList(tweetDispatch,data);
    })
  }, []);

  return (
    <div className={classes.root}>
      <Link to={"/"}>
        <Grid container direction={"row"} alignItems={'center'}>
          <Grid item>
            <img src={"/images/logo.png"} alt='logo'/>
          </Grid>
          <Grid item>
            <Typography className={classes.logoType}>
              {("Twitter")}
            </Typography>
          </Grid>
        </Grid>
      </Link>
      <Typography className={classes.hashTagTitle}>
        {("Hashtag Title")}
      </Typography>
      <Grid container direction={"column"} alignItems={"center"}>
        {
          hashTags.map(item => <ButtonBase className={classes.hashTagParent}>
              <Link to={"/hashtags/" + item.text} style={{width: '100%'}}>
                <Grid item container>
                  <img src={"/images/hashtag.png"} alt='hashtag'/>
                  <Typography className={classes.hashtag}>
                    {item.text}
                  </Typography>
                </Grid>
              </Link>
            </ButtonBase>
          )
        }
      </Grid>
    </div>
  );
};

export default RightSidebar;