import React from 'react'
import Carousel from 'react-elastic-carousel'
import styles from './Card.module.css'


export function Card2() {
    const breakPoints2 = [
        { width: 1, itemsToShow: 1 },
        { width: 500, itemsToShow: 2 },

        { width: 1200, itemsToShow: 3 }
    ]
    // console.log(data1);
    return (
        <div>
            <h1 className={styles.successStories} style={{color:'black', margin:'auto'}}>Success Stories</h1>
        <Carousel className={styles.main2} breakPoints={breakPoints2}>
            <div className={styles.card2}>
                <div className={styles.imgeDiv}><img src="https://sytb5eeu.cdn.imgeng.in/img/s1.png" alt="ImagesData" /></div>
                <div><p className={styles.pElem}>
                    Akshit my only son is everything I’m living for; he was born 12 years after I got married and that too after Caesarean surgery. It was disturbing to be in that phase and it was shattering when we discovered our son got this serious spinal related disorder called “Spine Bifida or also called Myelomeningocele which is inborn birth...
                </p>
                </div>
                <h2 className={styles.hElem}>Master Akshit</h2>
            </div>
            <div className={styles.card2}>
                <div className={styles.imgeDiv}><img src="https://sytb5eeu.cdn.imgeng.in/img/s1.png" alt="ImagesData" /></div>
                <div><p className={styles.pElem}>
                    The only son to his parents with 3 sisters; all of them taken care of, by the father who works for a private firm as a clerk is merely able to earn a living for the family. In the words of Sanjeev; he says, I was diagnosed with the almost incurable condition of Retinitis Pigmentosa at the mere age of 14, ten yeas since...
                </p>
                </div>
                <h2 className={styles.hElem}>Sanjeev Kumar</h2>
            </div>
            <div className={styles.card2}>
                <div className={styles.imgeDiv}><img src="https://sytb5eeu.cdn.imgeng.in/img/s1.png" alt="ImagesData" /></div>
                <div><p className={styles.pElem}>
                    Sultana, a primary teacher in the city of Moradabad, Uttar Pradesh diagnosed with Muscular dystrophy had lost all her hope until she found one with BeDonor. Sultana’s husband who’s a Taxi Driver told the story of her getting recovered of this incurable condition. He said we were a happy family making enough to give...
                </p>
                </div>
                <h2 className={styles.hElem}>Ms Sultana</h2>
            </div>
            <div className={styles.card2}>
                <div className={styles.imgeDiv}><img src="https://sytb5eeu.cdn.imgeng.in/img/s1.png" alt="ImagesData" /></div>
                <div><p className={styles.pElem}>
                    It was a moment of utter depression for me when I came to know that my daughter Naina has been diagnosed with the Thalassemia Major and it’s a severe form of Blood cancer. That moment almost took my breath away I had nothing but my daughter, she means everything to me...
                </p>
                </div>
                <h2 className={styles.hElem}>Baby Kumud (Nick Name Naina)</h2>
            </div>
            <div className={styles.card2}>
                <div className={styles.imgeDiv}><img src="https://sytb5eeu.cdn.imgeng.in/img/s1.png" alt="ImagesData" /></div>
                <div><p className={styles.pElem}>
                    Akshit my only son is everything I’m living for; he was born 12 years after I got married and that too after Caesarean surgery. It was disturbing to be in that phase and it was shattering when we discovered our son got this serious spinal related disorder called “Spine Bifida or also called Myelomeningocele which is inborn birth...
                </p>
                </div>
                <h2 className={styles.hElem}>Master Akshit</h2>
            </div>
            <div className={styles.card2}>
                <div className={styles.imgeDiv}><img src="https://sytb5eeu.cdn.imgeng.in/img/s1.png" alt="ImagesData" /></div>
                <div><p className={styles.pElem}>
                    The only son to his parents with 3 sisters; all of them taken care of, by the father who works for a private firm as a clerk is merely able to earn a living for the family. In the words of Sanjeev; he says, I was diagnosed with the almost incurable condition of Retinitis Pigmentosa at the mere age of 14, ten yeas since...
                </p>
                </div>
                <h2 className={styles.hElem}>Sanjeev Kumar</h2>
            </div>
            <div className={styles.card2}>
                <div className={styles.imgeDiv}><img src="https://sytb5eeu.cdn.imgeng.in/img/s1.png" alt="ImagesData" /></div>
                <div><p className={styles.pElem}>
                    Sultana, a primary teacher in the city of Moradabad, Uttar Pradesh diagnosed with Muscular dystrophy had lost all her hope until she found one with BeDonor. Sultana’s husband who’s a Taxi Driver told the story of her getting recovered of this incurable condition. He said we were a happy family making enough to give...
                </p>

                </div>
                <h2 className={styles.hElem}>Ms Sultana</h2>
            </div>
            <div className={styles.card2}>
                <div className={styles.imgeDiv}><img src="https://sytb5eeu.cdn.imgeng.in/img/s1.png" alt="ImagesData" /></div>
                <div><p className={styles.pElem}>
                    It was a moment of utter depression for me when I came to know that my daughter Naina has been diagnosed with the Thalassemia Major and it’s a severe form of Blood cancer. That moment almost took my breath away I had nothing but my daughter, she means everything to me...
                </p>

                </div>
                <h2 className={styles.hElem}>Baby Kumud (Nick Name Naina)</h2>
            </div>
            </Carousel>
            </div>
    )
}
