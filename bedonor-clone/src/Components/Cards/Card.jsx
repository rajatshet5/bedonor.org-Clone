import React from 'react'
import styles from './Card.module.css'
import Carousel from 'react-elastic-carousel'


export function Card({ Link }) {
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 500, itemsToShow: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 4 }
    ]
    return (
        <div>
            <h1 className={styles.successStories}>Featured In</h1>
        <Carousel className={styles.main} breakPoints={breakPoints}>
            {Link.map((el, i) =>
                <div key={i} className={styles.card}><img src={el} alt="ImageCr" /></div>
            )}
            </Carousel>
            </div>
    )
}
