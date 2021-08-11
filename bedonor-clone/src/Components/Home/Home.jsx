import { useState } from 'react';
import styles from '../../App.module.css';
import { Categories } from '../Categories/Categories';
import { Sub } from '../Sub/Sub';

export function Home({changeLoad, altShowFn}) {
  const [tempo, setTempo] = useState(false);
  const tempfn = () => {
    setTempo(true);
    //console.log(tempo);
  }
 
  return <div>
    <div className={styles.bannerDiv}>
      <div className={styles.bannerSubs}>
        <h1>Raise funds for a social cause or a medical emergency!</h1>
        <div>
          <p>0% Platform fee</p>
          <p>Easy to use interface</p>
          <p>Instant withdrawal</p>
        </div>
      </div>
      <img onClick={tempfn} className={styles.image} src="https://sytb5eeu.cdn.imgeng.in/img/fund-btn.png" alt="btn" />
    </div>
    <Categories style={{margin:"10px 0px"}} />
    <div className={styles.stepsDiv}>
      <h1>
        3 Simple steps & Congratulations! you’ve started raising funds.
      </h1>
      <div className={styles.ways}>
        <img className={styles.waysImg1} src="https://sytb5eeu.cdn.imgeng.in/img/step1.png" alt="subImg" />
        <img className={styles.waysImg2} src="https://sytb5eeu.cdn.imgeng.in/img/step2.png" alt="subImg" />
        <img className={styles.waysImg3} src="https://sytb5eeu.cdn.imgeng.in/img/step3.png" alt="subImg" />
        <video className={styles.vid} width="400" height="600" controls>
          <source src="https://sytb5eeu.cdn.imgeng.in/video.mp4" type="video/mp4"/>
        </video>
        <div>
          <h3>Create a fundraiser</h3>
          <p>Let us know a little about yourself and for whom you’re raising the funds.</p>
        </div>
        <div>
          <h3>Share the fundraiser</h3>
          <p>Start by sharing the fundraiser with your family, friends and colleagues. You’ll notice a fairly visible support in no time.</p>
        </div>
        <div>
          <h3>Withdraw the funds</h3>
          <p>It’s not that long since you started the fundraiser and you can now withdraw the funds to your bank account with 0 hassle.</p>
        </div>
      </div>
    </div>
  <div className={styles.whyUsDiv}>
    <h1>Why Choose Us?</h1>
    <img src="https://sytb5eeu.cdn.imgeng.in/img/why-bg2.jpg" alt="subImg" />
    <div className={styles.whySubDiv1}>
      <img src="https://sytb5eeu.cdn.imgeng.in/img/success-rate.png" alt="subImg" />
      <p>Fastest growing fundraising platform in India</p>
    </div>
    <div className={styles.whySubDiv2}>
      <img src="https://sytb5eeu.cdn.imgeng.in/img/donors.png" alt="subImg" />
      <p>Global reach for extensive fundraising</p>
    </div>
    <div className={styles.whySubDiv3}>
      <img src="https://sytb5eeu.cdn.imgeng.in/img/accept-payment.png" alt="subImg" />
      <p>Accepting donations via all popular payment instruments</p>
    </div>
    <div className={styles.whySubDiv4}>
      <img src="https://sytb5eeu.cdn.imgeng.in/img/support.png" alt="subImg" />
      <p>A panel of dedicated professionals</p>
    </div>
    <div className={styles.whySubDiv5}>
      <img src="https://sytb5eeu.cdn.imgeng.in/img/dashboard.png" alt="subImg" />
      <p>No excessive documentation</p>
    </div>
    <div className={styles.whySubDiv6}>
      <img src="https://sytb5eeu.cdn.imgeng.in/img/hassle.png" alt="subImg" />
      <p>0 hassle withdrawal</p>
    </div>
    </div>
    <Sub/>
  </div>
}