import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from './CasePage.module.css';
import { Donate } from "../Donate/Donate";
import { BiRupee } from "react-icons/bi";
import { FaShareAlt } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { v4 as uuid } from "uuid";

export function CasePage() {
    const [showDonate, setShowDonate] = useState(false);
    const handleDonate = () => {
        setShowDonate(true);
    }
    const location = useLocation();
    //console.log(location.state.case);
    let { heading, img, campaigner, benefeciary, needed, daysLeft, id } = location.state.case;
    const [newAllData, setNewAllData] = useState(location.state.case);
    useEffect(() => {
        getAgain();
    }, []);

    const getAgain = () => {
        axios.get(`http://localhost:3001/data/${id}`)
            .then((res) => {
                setNewAllData(res.data);
        })
        .catch((err) => {
            console.log(err);
        })
    }
    
    
    window.onclick = function (event) {
        if (event.target === document.getElementById("myModalDonate")) {
            setShowDonate(false);
            getAgain();
        }
    }
    const handleClose = () => {
        setShowDonate(false);
    }
    return <div className={styles.caseDiv}>
        <Donate caseData={newAllData} showDonate={showDonate} handleClose={handleClose}  />
        <div className={styles.detDiv}>
            <h1>{heading}</h1>
            <img src={img} alt="Case Pic" />
            <div style={{display:"flex", justifyContent:"space-evenly"}}>
                <p style={{fontSize:"15px"}} className={styles.donorText}><CgProfile className={styles.prof} size={35}/><span>Campaigner: </span>{campaigner}</p>
                <p style={{fontSize:"15px"}} className={styles.donorText}><CgProfile className={styles.prof} size={35}/><span>Benifeciary:</span> {benefeciary}</p>
            </div>
            <div style={{display:"flex", flexDirection:"column"}}>
                <h3 className={styles.donorText}><FaShareAlt className={styles.share}/>Share This Fundraiser</h3>
                <div style={{display:"flex"}}>
                    <div className={styles.medium}>
                        Facebook
                    </div>
                    <div className={styles.medium}>
                        Whatsapp
                    </div>
                    <div className={styles.medium}>
                        Twitter
                    </div>
                </div>
            </div>
            <div className={styles.caseDesc}>
                <h3>{newAllData.heading}</h3>
                {newAllData.details}
            </div>
        </div>
        <div className={styles.donateDiv}>
            <button onClick={handleDonate} className={styles.donateBtn}>Donate Now</button>
            <div className={styles.paymentDiv}>
                <div>
                <img src="https://sytb5eeu.cdn.imgeng.in/img/credit-card.svg" alt="Credit Card"/>
                    Credit Card
                    </div>
                <div><img src="https://sytb5eeu.cdn.imgeng.in/img/internet.svg" alt="Net Banking" />
                    Net Banking
                    </div>
                <div><img src="https://sytb5eeu.cdn.imgeng.in/img/upi-icon.svg" alt="UPI" />
                    UPI
                    </div>
                <div><img src="https://sytb5eeu.cdn.imgeng.in/img/wallet.svg" alt="Wallet" />
                    Wallet
                    </div>
            </div>
            <div className={styles.detsDon}>
                <p><span><BiRupee className={styles.rupees}/> {newAllData.raised}</span> <p style={{paddingTop:'25px', paddingLeft:'8px'}}>raised</p></p>
            </div>
            <div id={styles.supSub1}>
                <p className={styles.donorText}>Goal: <BiRupee className={styles.rupeeSpace}/> {needed}</p>
            </div>
            <div id={styles.supSub2}>
                <p>{newAllData.supporters} supporters</p>
                <p>{daysLeft} days Left</p>
            </div>
            <div className={styles.fbDiv}>
                <p>Share On Facebook</p>
            </div>
            <div className={styles.contactDiv}>
                <div className={styles.headingDiv}>Contact Details</div>
                <div className={styles.contactSubDiv}>
                    <img src="https://bedonor.org/assets/images/logo/noLogo.png" alt="Profile" />
                    <p>{campaigner}</p>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXaxadElvFIreDIQq50R4uvqSLVaU2bClZ-g&usqp=CAU" alt="chat" />
                </div>
            </div>
            <div className={styles.topDonorsDiv}>
                <div className={styles.headingDiv}><img src="https://sytb5eeu.cdn.imgeng.in/img/top.png" alt="Profile"/>Top Donors</div>
                    <div className={styles.scrollDiv}>
                        {[...newAllData.donors].sort((a, b) => {
                            return Number(b.value) - Number(a.value);
                        }).slice(0, 10).map((item) => {
                            return <div key={uuid()} className={styles.eachDonor}><img src="https://bedonor.org/assets/images/logo/noLogo.png" alt="Profile" /><p className={styles.donorText}>{item.name}   <BiRupee className={styles.rupeeSpace}/> {item.value}</p></div>
                        })}
                    </div>
            </div>
            <div className={styles.topSupportersDiv}>
                <div className={styles.headingDiv}><img src="https://sytb5eeu.cdn.imgeng.in/img/user-don.png" alt="People" />{newAllData.supporters} Supporters</div>
                    <div className={styles.scrollDiv}>
                        {newAllData.donors.map((item) => {
                            return <div key={uuid()} className={styles.eachDonor}><img src="https://bedonor.org/assets/images/logo/noLogo.png" alt="Profile"/><p className={styles.donorText}>{item.name}   <BiRupee className={styles.rupeeSpace}/> {item.value}</p></div>
                        })}
                    </div>
            </div>
        </div>
    </div>
}