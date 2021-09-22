import React, {useState} from 'react';
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import useStyles from './styles'
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import {toast} from "react-toastify";
import {loginApi, registerApi} from "../../api/api_auth";


const LOGIN_TAB_VALUE = 1;
const REG_TAB_VALUE = 2;

const AuthPage = () => {
  const classes = useStyles();

  const [tab, setTab] = useState(LOGIN_TAB_VALUE);

  //login state
  const [usernameLogin, setUsernameLogin] = useState();
  const [passwordLogin, setPasswordLogin] = useState();

  //register state
  const [fullNameRegister, setFullNameRegister] = useState();
  const [usernameRegister, setUsernameRegister] = useState();
  const [passwordRegister, setPasswordRegister] = useState();
  const [confPasswordRegister, setConfPasswordRegister] = useState();


  const handleChangeTab = (e, newValue) => {
    setTab(newValue);
  };

  const validateLogin = (user) => {
    if (!user.username)
      return ('');
    if (!user.password)
      return ("password is wrong")
  };
  const validateRegister = (user) => {
    if (!user.username)
      return ('the username is not valid');
    if (!user.name)
      return ("the name is not valid");
    if (!user.password)
      return ("the password is not valid");
    if (user.password !== user.confPasswordRegister)
      return ("the password is not valid")
  };

  const handleRegister = () => {
    const user = {
      name: fullNameRegister,
      username: usernameRegister,
      password: passwordRegister,
      confPasswordRegister: confPasswordRegister,
    };
    const error = validateRegister(user);
    if (error)
      return toast.warn(error);
    user.confPasswordRegister = undefined;
    registerApi(user, (isOk, data) => {
      if (!isOk)
        return toast.error(data);
      toast.success('successfully registerd');
      localStorage.setItem("name", data.name);
      localStorage.setItem("image", data.image);
      localStorage.setItem("username", data.username);
      localStorage.setItem("x-auth-token", data["x-auth-token"]);
      window.location.reload();
    })
  };
  const handleLogin = () => {
    const user = {
      username: usernameLogin,
      password: passwordLogin
    };
    const error = validateLogin(user);
    if (error)
      return toast.warn(error);
    loginApi(user, (isOk, data) => {
      if (!isOk)
        return toast.error(data);
      toast.success(("successfully loged in"));
      localStorage.setItem("name", data.name);
      localStorage.setItem("image", data.image);
      localStorage.setItem("username", data.username);
      localStorage.setItem("x-auth-token", data["x-auth-token"]);
      window.location.reload();
    })
  };

  return (
    <Paper className={classes.container}>
      <Typography className={classes.headerText}>{("welcome")}</Typography>
      <Tabs
        value={tab}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChangeTab}
        aria-label="disabled tabs example"
      >
        <Tab label={("login")} value={LOGIN_TAB_VALUE} className={classes.tab}/>
        <Tab label={("register")} value={REG_TAB_VALUE} className={classes.tab}/>
      </Tabs>
      {tab === LOGIN_TAB_VALUE &&
      <div className={classes.containerInput}>
        <Typography>{("username")}</Typography>
        <Input className={"uni_m_b_small"}
               value={usernameLogin} onChange={e => setUsernameLogin(e.target.value)}
        >
        </Input>
        <Typography>{("password")}</Typography>
        <Input className={"uni_m_b_small"}
               value={passwordLogin} onChange={e => setPasswordLogin(e.target.value)}
        />
        <Button variant={"contained"} color="primary" onClick={handleLogin}>{("login")}</Button>
      </div>
      }
      {tab === REG_TAB_VALUE &&
      <div className={classes.containerInput}>
        <Typography>{("fullName")}</Typography>
        <Input className={"uni_m_b_small"}
               value={fullNameRegister} onChange={e => setFullNameRegister(e.target.value)}
        />
        <Typography>{("username")}</Typography>
        <Input className={"uni_m_b_small"}
               value={usernameRegister} onChange={e => setUsernameRegister(e.target.value)}
        />
        <Typography>{("password")}</Typography>
        <Input className={"uni_m_b_small"}
               value={passwordRegister} onChange={e => setPasswordRegister(e.target.value)}
        />
        <Typography>{("Confirm Password")}</Typography>
        <Input className={"uni_m_b_small"}
               value={confPasswordRegister} onChange={e => setConfPasswordRegister(e.target.value)}
        />
        <Button variant={"contained"} color="primary" onClick={handleRegister}>{("register")}</Button>
      </div>
      }
    </Paper>
  );
};

export default AuthPage;