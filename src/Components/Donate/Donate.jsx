import axios from 'axios';
import { useState } from 'react';
import styles from './Donate.module.css';
import { BsFillLockFill } from 'react-icons/bs';
import { BiRupee } from 'react-icons/bi';

export function Donate({ caseData, showDonate, handleClose }) {
    const init = {
        name: "",
        phone: "",
        email: "",
    };
    const [amount, setAmount] = useState();
    const [showInput, setShowInput] = useState(false);
    const [donorData, setDonorData] = useState(init);

    const handleAmount = (val) => {
        setAmount(val);
    }
    const handleManualInput = (e) => {
        const { value } = e.target;
        setAmount(value);
    }
    const handlePay = () => {
        const { raised } = caseData;
        const newRaisedAmount = Number(raised) + Number(amount);
        caseData.raised = newRaisedAmount;
        caseData.supporters = Number(caseData.supporters) + 1;
        const newDonorData = { ...donorData };
        newDonorData.value = amount;
        caseData.donors = [...caseData.donors, newDonorData];

        const config = {
            method: "patch",
            data: { ...caseData },
            url: `https://h-server-app.herokuapp.com/data/${caseData.id}`,
        };
        axios(config)
            .then((res) => {
                alert('Donation Successfull');
                setAmount("");
                handleClose();
            })
            .catch((err) => {
                alert(err);
            })
            .finally(() => {
                setDonorData(init);
            })
    }
    const handleDonors = (e) => {
        const { name, value } = e.target;
        setDonorData({ ...donorData, [name]: value});
        //console.log(donorData);
    }
    return <div>
    <div id="myModalDonate" className={styles.modalDonate} style={showDonate ? { display: "block" } : { display: "none" }}>
            <div className={styles.modalContentDonate}>
                <span onClick={() => handleClose()} className={styles.closeDonate}>&times;</span>
                <div>
                    <h3>Make a Donation</h3>
                    <div className={styles.btns}>
                        <button style={amount==="500" ? { backgroundColor: "rgb(82,105,206)", color:'white' }:null} onClick={() => handleAmount("500")}>
                            <BiRupee className={styles.rupeeIcn}/> 500
                        </button>
                        <button style={amount==="1000" ? { backgroundColor: "rgb(82,105,206)", color:'white' }:null} onClick={() => handleAmount("1000")}>
                            <BiRupee className={styles.rupeeIcn}/> 1000
                        </button>
                        <button style={amount==="2000" ? { backgroundColor: "rgb(82,105,206)", color:'white' }:null} onClick={() => handleAmount("2000")}>
                            <BiRupee className={styles.rupeeIcn}/> 2000
                        </button>
                        <button style={{ width: "130px", cursor:"pointer"}} onClick={() => setShowInput(!showInput)}>
                            Other Amount:
                        </button>
                        {showInput? <input type="number" value={amount} onChange={handleManualInput} placeholder="Enter Amount"/>: null}
                    </div>
                    <div>
                        <input type="text" value={donorData.name} name="name" onChange={handleDonors} placeholder="Name" />
                        <input type="number" value={donorData.phone} name="phone" onChange={handleDonors} placeholder="Phone" />
                        <input type="text" value={donorData.email} name="email" onChange={handleDonors} placeholder="Email" />
                    </div>
                    <button className={styles.payBtn} onClick={handlePay}>Pay <BiRupee className={styles.rupeeIcn}/> {amount}</button>
                    <p className={styles.verified}><BsFillLockFill className={styles.lockIcn} />Verified by BeDonor Team.</p>
                </div>
            </div>
        </div>
        </div>
}