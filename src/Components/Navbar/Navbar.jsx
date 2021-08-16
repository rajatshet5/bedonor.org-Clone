import { useEffect, useState } from 'react';
import { NavLink} from 'react-router-dom';
import styles from './Navbar.module.css';
import { Login } from '../Login/Login';
import axios from 'axios';

export function Navbar({tempo, load, changeLoad, altShow, altShowFn }) {
    const check = () => {
        axios.get("http://localhost:3001/LIU")
            .then((res) => {
                //console.log(res.data);
                if (res.data.length === 0) {
                    setLIU(false);
                    //console.log("not logged in");
                } else {
                    setLIU(true);
                    setLIU_data(...res.data);
                    //console.log("logged in");
                }
            })
            .catch((err) => {
                alert(err);
            })
    }
    useEffect(() => {
        check();
    }, [load]);
    const [show, setShow] = useState(false);
    const [LIU, setLIU] = useState(false);
    const [LIU_data, setLIU_data] = useState({});
    if (tempo && show === false) {
        setShow(true);
    }
    if (altShow) {
        setShow(true);
    }
    const handleClick = () => {
        setShow(true);
    }
    const handleClose = () => {
        setShow(false);
        //altShowFn(false);
        //closeTempo();
        changeLoad();
    }
    const handleLIU = (val) => {
        setLIU(val);
    }
    window.onclick = function(event) {
        if (event.target === document.getElementById("myModal")) {
            setShow(false);
            //altShowFn(false);
            //closeTempo();
            changeLoad();
        }
    }
    const handleLogout = () => {
        const config = {
            method: "delete",
            url: `http://localhost:3001/LIU/1`,
        };
        axios(config)
            .then((res) => {
                alert('Logout Successfull');
            })
            .catch((err) => {
                alert(err);
            })
        setShow(false);
        //altShowFn(false);
        //closeTempo();
        setLIU(false);
    }
    return <div className={styles.navbar}>
        <Login load={load} changeLoad={changeLoad} LIU_data={LIU_data} show={show} handleClose={handleClose} handleLIU={handleLIU} LIU={LIU} setLIU={setLIU}/>
        <div className={styles.imgDiv}>
            <NavLink to='/'><img className={styles.imgCu} src="https://sytb5eeu.cdn.imgeng.in/logo.svg" alt="logo"/></NavLink>
        </div>
        <div>
            <div className={styles.subs}>
                <NavLink className={styles.tdNone} to='/'><p>Home</p></NavLink>
                <p onClick={handleClick}>Start Free Fundraisers</p>
            </div>
            <div className={styles.btnDiv}>
                <button className={styles.bns}><NavLink className={styles.tdNone} to='/fundraiser'>Be Donor</NavLink></button>
                <button className={styles.chat}><img src="https://sytb5eeu.cdn.imgeng.in/img/whastapp-icon.png" alt="subImg"/><p>Chat</p></button>
                {/* <img src="https://sytb5eeu.cdn.imgeng.in/img/user-icon.png" alt="Rupees" /> */}
                {LIU ? <button className={styles.logoutBtn} onClick={handleLogout}>Logout</button> : null}
            </div>
        </div>
    </div>
}