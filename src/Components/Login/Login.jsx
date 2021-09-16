import axios from 'axios';
import {useState, useEffect} from 'react';
import styles from './Login.module.css';

export function Login({show, handleClose, LIU, setLIU }) {
    const initState = {
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        password: "",
    };
    const initLoginData = {
        email: "",
        password: "",
    };
    const initFormData = {
        title: "",
        target: "",
        by: "",
        image: "",
        patient: "",
        ailment: "",
        details:"",
    }
    const [data, setData] = useState(initState);
    const [toLogin, setToLogin] = useState(false);
    const [loginData, setLoginData] = useState(initLoginData);
    const [LIUData, setLIUData] = useState({});
    //const [loggedIn, setLoggedIn] = useState(false);
    useEffect(() => {
        if (LIU) {
        axios.get("https://h-server-app.herokuapp.com/LIU")
            .then((res) => {
                //console.log(res.data);
                if (res.data.length === 0) {
                    console.log("not logged in");
                } else {
                    setLIUData(...res.data);
                    //console.log("logged in");
                }
            })
            .catch((err) => {
                alert(err);
            })
    }
    }, [LIU])
    const handleLogin = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    }
    const handleLogin1 = (e) => {
        const { name, value } = e.target;
        setLoginData({ ...loginData, [name]: value });
    }
    const handleSubmit = (e) => {
        
        e.preventDefault();
        const details = {
            method: "post",
            data,
            url: "https://h-server-app.herokuapp.com/users",
        };
        axios(details)
            .then((res) => {
                handleSignupSuccess();
            })
            .catch((err) => {
                alert(err);
            })
            .finally(() => {
                setData(initState);
            })
    }
    const handleLoginSubmit = (e) => {
        e.preventDefault();
        axios.get("https://h-server-app.herokuapp.com/users")
            .then((res) => {
                let flag = false;
                for(let dets of res.data) {
                    if (loginData.email === dets.email && loginData.password === dets.password) {
                        flag = true;
                        const LIU_details = {
                            method: "post",
                            data: {
                                email: loginData.email,
                            },
                            url: "https://h-server-app.herokuapp.com/LIU",
                        };
                    axios(LIU_details)
                        .then((res) => {
                            setLIU(true);
                            //console.log("Logged in Successfully");
                        })
                        .catch((err) => {
                            alert(err);
                        })
                        .finally(() => {
                            setLoginData(initLoginData);
                        })
                        break;
                    }
                }
                if (!flag) {
                    alert("Invalid Credentials");
                }
            })
            .catch((err) => {
                alert(err);
            })
        setLoginData(initLoginData);
    }
    const handleSignupSuccess = () => {
        alert('Signed up Successfully');
        handleClose();
    }
    const handleGoToLogin = () => {
        setToLogin(true);
    }
    const handleGoToSignup = () => {
        setToLogin(false);
    }
    const [newForm, setNewForm] = useState(initFormData);
    const handleForm = (e) => {
        const { name, value } = e.target;
        setNewForm({ ...newForm, [name]: value });
        //console.log(newForm);
    }
    //console.log(LIU_data);
    const handleFormSubmit = (e) => {
        e.preventDefault();
        const LIU_email = LIUData.email;
        //console.log(LIU_email);
        let currentLIUName;
        axios.get('https://h-server-app.herokuapp.com/users')
            .then((res) => {
                for (let item of res.data) {
                    if (LIU_email === item.email) {
                        currentLIUName = item.firstName + " " + item.lastName;
                        const updatedFormDetails = {
                            heading: newForm.title,
                            campaigner: currentLIUName,
                            benefeciary: newForm.patient,
                            needed: newForm.target,
                            raised: "0",
                            daysLeft: newForm.by,
                            supporters: "0",
                            img: newForm.image,
                            details: newForm.details,
                            ailment: newForm.ailment,
                            donors: [],
                        }
                        //console.log(updatedFormDetails);
                        const config = {
                            method: "post",
                            data: updatedFormDetails,
                            url: "https://h-server-app.herokuapp.com/data",
                        };
                        axios(config)
                            .then((res) => {
                                alert('Fundraiser added Successfully');
                                handleClose();
                            })
                            .catch((err) => {
                                alert(err);
                            })
                            .finally(() => {
                                setNewForm(initFormData);
                            })
                        break;
                    }
                }
            })
            .catch((err) => {
                alert(err);
            })
    }
    const { firstName, lastName, phone, email, password } = data;
    return !LIU? (<div id="myModal" className={styles.modal} style={show ? { display: "block" } : { display: "none" }}>

            {!toLogin ? <div className={styles.modalContent}>
                <span onClick={() => handleClose()} className={styles.close}>&times;</span>
                <div className={styles.loginDiv}>
                    <h3>Start your Fundraiser</h3>
                    <form onSubmit={handleSubmit}>
                        <input type="text" value={firstName} name="firstName" onChange={handleLogin} placeholder="Name" />
                        <input type="text" value={lastName} name="lastName" onChange={handleLogin} placeholder="Last Name" />
                        <input type="text" value={phone} name="phone" onChange={handleLogin} placeholder="Phone Number" />
                        <input type="text" value={email} name="email" onChange={handleLogin} placeholder="Email Address" />
                        <input type="password" value={password} name="password" onChange={handleLogin} placeholder="Password" />
                        <button type="submit" className={styles.startNow}>Start Now</button>
                    </form>
                
                    <div className={styles.loginBtnDiv}>
                        <p>Already have an account?</p>
                        <p onClick={handleGoToLogin} className={styles.loginBtn}>Login</p>
                    </div>
                
                </div>
            </div> : <div className={styles.modalContent}>
                <span onClick={() => handleClose()} className={styles.close}>&times;</span>
                <div className={styles.loginDiv}>
                    <h3>Login</h3>
                    <form onSubmit={handleLoginSubmit}>
                        <input type="text" value={loginData.email} name="email" onChange={handleLogin1} placeholder="Email Address" />
                        <input type="password" value={loginData.password} name="password" onChange={handleLogin1} placeholder="Password" />
                        <button type="submit" className={styles.startNow}>Login</button>
                    </form>
                
                    <div className={styles.loginBtnDiv}>
                        <p>Don't have an account?</p>
                        <p onClick={handleGoToSignup} className={styles.loginBtn}>Signup</p>
                    </div>
                </div>
            </div>}
    </div>) : (<div id="myModal" className={styles.modal} style={show ? { display: "block" } : { display: "none" }}>

            <div className={styles.modalContent1}>
                <span onClick={() => handleClose()} className={styles.close}>&times;</span>
                <div className={styles.frDiv}>
                    <h3>Tell us more about your Fundraiser</h3>
                    <form onSubmit={handleFormSubmit}>
                        <input type="text" value={newForm.title}  name="title" onChange={handleForm} placeholder="Title" />
                        <input type="text" value={newForm.target}  name="target" onChange={handleForm} placeholder="Target Amount" />
                        <input type="text" value={newForm.by}  name="by" onChange={handleForm} placeholder="You need the money by? Please specify the number of days." />
                        <input type="text" value={newForm.image}  name="image" onChange={handleForm} placeholder="Image URL" />
                        <input type="text" value={newForm.patient} name="patient" onChange={handleForm} placeholder="Benificiary Name" />
                        <input type="text" value={newForm.ailment} name="ailment" onChange={handleForm} placeholder="Ailment/Medical Condition/Cause" />
                        <textarea type="text" value={newForm.details}  name="details" onChange={handleForm} placeholder="Details about the Patient/Cause..." />
                        <button type="submit" className={styles.startNow}>Submit</button>
                    </form>
                </div>
            </div>
    </div>)
}


















 