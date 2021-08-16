import styles from './Categories.module.css';

export function Categories() {
    return <div className={styles.categoriesDiv}>
        <h1>Crowdfunding Categories</h1>
        <div>
        <div>
            <img className={styles.sign} src="https://sytb5eeu.cdn.imgeng.in/img/me.png" alt="category" />
            <p>Medical Emergency</p>
            <img className={styles.arrow} src="https://sytb5eeu.cdn.imgeng.in/img/arrow-btn.png" alt="category"/>
        </div>
        <div>
            <img className={styles.sign} src="https://sytb5eeu.cdn.imgeng.in/img/ngo.png" alt="category" />
            <p>NGO</p>
            <img className={styles.arrow} src="https://sytb5eeu.cdn.imgeng.in/img/arrow-btn.png" alt="category"/>
        </div>
        <div>
            <img className={styles.sign} src="https://sytb5eeu.cdn.imgeng.in/img/disaster.png" alt="category"/>
            <p>Natural Disasters</p>
            <img className={styles.arrow} src="https://sytb5eeu.cdn.imgeng.in/img/arrow-btn.png" alt="category"/>
        </div>
        <div>
            <img className={styles.sign} src="https://sytb5eeu.cdn.imgeng.in/img/others.png" alt="category" />
            <p>Others</p>
            <img className={styles.arrow} src="https://sytb5eeu.cdn.imgeng.in/img/arrow-btn.png" alt="category"/>
        </div>
        </div>
      </div>
}