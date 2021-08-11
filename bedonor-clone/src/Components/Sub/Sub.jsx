import { Card2 } from '../Cards/Card2';
import { Card } from '../Cards/Card';
import styles from '../Cards/Card.module.css';

export function Sub() {
    const data = [
        `https://www.healthcarebusinessinternational.com/awards/wp-content/uploads/2017/06/photo.jpg`,
        `https://csrbox.org/company/cmp_logo/1502709172Fortis-Escorts-Hospital-Pediatrician-Faridabad-63831e.jpg`,
        `https://texilamedicare.com/wp-content/uploads/2019/07/BLK-800x330.png`,
        `https://s3.ap-south-1.amazonaws.com/docttocare-website-documents/clinic_upload/img/11554708326_artemis-logo-2019.jpg`,
        `https://www.healthcarebusinessinternational.com/awards/wp-content/uploads/2017/06/photo.jpg`,
        `https://csrbox.org/company/cmp_logo/1502709172Fortis-Escorts-Hospital-Pediatrician-Faridabad-63831e.jpg`,
        `https://texilamedicare.com/wp-content/uploads/2019/07/BLK-800x330.png`,
        `https://s3.ap-south-1.amazonaws.com/docttocare-website-documents/clinic_upload/img/11554708326_artemis-logo-2019.jpg`
    ];
    return <div style={{margin:'49px'}}>
        <Card2 />
        <div className={styles.whatsappDiv}>
            <p>Have any questions for us? Chat with our team on WhatsApp Now</p>
            <div>
                <img src="https://sytb5eeu.cdn.imgeng.in/img/whastapp-icon.png" alt="subImg"/>Chat Now 09821021005
            </div>

        </div>
         <Card Link={data} />
    </div>
}