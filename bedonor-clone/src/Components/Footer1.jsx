import React from 'react'
import styles from './Footer1.module.css'
import {
    FaAngleDoubleRight

} from 'react-icons/fa';


export function Footer1() {
    return (

        <div className={styles.bigger}>
            <div className={styles.footer}>
                <div className={styles.card1}>


                    <div>
                        <h1 className={styles.hd1}>Useful Links </h1>
                        <a href="/"><FaAngleDoubleRight className={styles.arrow}

                        /> Home</a>
                        <a href="/"><FaAngleDoubleRight className={styles.arrow}

                        /> About Us</a>
                        <a href="/"> <FaAngleDoubleRight className={styles.arrow}

                        />Careers</a>
                        <a href="/"> <FaAngleDoubleRight className={styles.arrow}

                        />Our Partner</a>
                        <a href="/"><FaAngleDoubleRight className={styles.arrow}

                        />Blog</a>
                        <a href="/"><FaAngleDoubleRight className={styles.arrow}

                        />Contact Us</a>
                    </div>
                    <div>
                        {/* <hr /> */}
                        <a href="/"><FaAngleDoubleRight className={styles.arrow}

                        />Medical Emergency</a>
                        <a href="/"><FaAngleDoubleRight className={styles.arrow}

                        />NGO</a>
                        <a href="/"><FaAngleDoubleRight className={styles.arrow}

                        />Natural Disaster</a>
                        <a href="/"><FaAngleDoubleRight className={styles.arrow}

                        />Others</a>
                        <a href="/"><FaAngleDoubleRight className={styles.arrow}

                        />What-Is-Be-Donor</a>
                        <a href="/"><FaAngleDoubleRight className={styles.arrow}

                        />How Be Donor Works</a>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.imgeDiv}>
                        <img src="https://sytb5eeu.cdn.imgeng.in/img/foot-fund.png" alt="beDonor" />
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.follow}>
                        <h1 className={styles.hd1}>Follow Us</h1>
                        {/* <hr /> */}
                    </div>

                    <div className={styles.icons}>
                        <div>
                            <img src="https://freeiconshop.com/wp-content/uploads/edd/twitter-solid.png" alt="twitter" />
                        </div>
                        <div>
                            <img src="https://images.squarespace-cdn.com/content/v1/5bb507377a1fbd4eba7f8b67/1610070938283-ZRB6Z5DMNWGLN7BKKIXD/FB+icon-01.png" alt="fb" />
                        </div>
                        <div>
                            <img src="http://assets.stickpng.com/images/5ecec78673e4440004f09e77.png" alt="insta" />
                        </div>

                    </div>
                    <div className={styles.text}>
                        <p>
                            Enter your e-mail and subscribe to our <br /> newsletter
                        </p>
                    </div>
                    <div className={styles.finalDiv}>
                        <input className={styles.inp} type="text" placeholder="Enter your email" />
                        <input className={styles.bns} type="button" value="Subscribe" />
                    </div>
                </div>
            </div>
        </div>
    )
}
