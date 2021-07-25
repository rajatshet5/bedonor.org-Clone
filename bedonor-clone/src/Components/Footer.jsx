import styles from './Footer.module.css';
import { Link } from "react-router-dom";
import { Footer1 } from './Footer1';

export function Footer() {
    return <div>
        {/* <div className={styles.linkDiv}>

        </div> */}
        <Footer1/>
        <div className={styles.bottomDiv}>
            <p>Copyright ©2021</p>
            <div>
                <p>Privacy Policy | Terms of Use | AML</p>
                <p>policies| Cookie policies</p>
            </div>
            <p>BeDonor Online Ventures (P) Ltd</p>
            <div>
                <img src="https://sytb5eeu.cdn.imgeng.in/img/payment-strip.png" />
            </div>
        </div>
    </div>
}