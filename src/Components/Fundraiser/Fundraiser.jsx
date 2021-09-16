import { useEffect, useState } from 'react';
import styles from './Fundraiser.module.css';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import { BiRupee } from 'react-icons/bi';


export function Fundraiser({ load }) {
    const [allData, setAllData] = useState([]);
    //const [updated, setUpdated] = useState(false);
    const [page, setPage] = useState(1);
    //console.log(allData);

    const getData = () => {
        axios.get(`https://h-server-app.herokuapp.com/data?_page=${page}&_limit=4`)
            .then((res) => {
                setAllData(res.data);
            })
            .catch((err) => {
                alert(err);
            })
    }
    
    useEffect(() => {
         getData();
        // axios.get("http://localhost:3001/data")
        //     .then(({data}) => {
        //         console.log(data);
        //         setAllData(data);
        //     })
        //     .catch((err) => {
        //     console.log(err);
        // })
    }, [load, page])
    return <div className={styles.pgDiv}>
        <div className={styles.coverDiv}>

        </div>
        <div className={styles.infoDiv}>
            <div>
                Zero Platform fee
            </div>
            <div>
                Easy to use interface
            </div>
            <div>
                Instant withdrawal
            </div>
        </div>
        <div className={styles.mainDiv}>
            <div style={{flexDirection:'column', margin: '3px', width:'19%'}} className={styles.pages}>
                <h5 style={{margin:'8px 60px'}}>Page: {page}</h5>
                <button disabled={page===1} onClick={() => setPage(page - 1)}>Previous Page</button>
                <button disabled={page===3} onClick={() => setPage(page + 1)}>Next Page</button>
            </div>
            <div className={styles.casesDiv}>
                {allData.map((item) => {
                    return <div className={styles.caseMainDiv} key={item.id}>
                        <img src={item.img} alt="img" />
                        {item.heading !== undefined ? <p className={styles.caseHeading}>{item.heading.length > 60 ? item.heading.substr(0, 61) + "..." : item.heading}</p> : null}
                        <div className={styles.raiseDiv}>
                            <p className={styles.caseBy}>By {item.campaigner}</p>
                            <p className={styles.caseRaised}><BiRupee className={styles.rupeesIcn}/> <p className={styles.raisedText}>{item.raised} raised</p></p>
                        </div>
                        <p className={styles.caseNeeded}>Goal:  <BiRupee className={styles.rupeeIcn}/> {item.needed}</p>
                        <div>
                            <p className={styles.caseBy}>{item.daysLeft} days left</p>
                            <p className={styles.caseSupporters}>{item.supporters} supporters</p>
                        </div>
                        <NavLink to={{
                                            pathname: "/case",
                                            state: {
                                                case: item,
                                            },
                        }}><button className={styles.caseBtn}>Donate</button></NavLink>
                    </div>
                })}
            </div>
        </div>
        <div className={styles.pages}>
            <h4>Page: {page}</h4>
            <button disabled={page===1} onClick={() => setPage(page - 1)}>Previous Page</button>
            <button disabled={page===3} onClick={() => setPage(page + 1)}>Next Page</button>
        </div>
        
    </div>
}