import React from 'react'
import Navbar from '../component/Navbar';
import { spotlight } from "../constants";
import styles from "../Style";
import { SpotlightCard, Footer } from "../pages";

const Product = () => {
    return (
        <section id="product" >
            <div className={`${styles.paddingX} ${styles.flexCenter} bg-primary w-full overflow-hidden`}>
                <div className={`${styles.boxWidth}`}>
                    <Navbar />
                </div>
            </div>
            <div className={`${styles.paddingX} ${styles.flexCenter} flex-col relative my-10`}>
                <div className="w-full relative z-[1]">
                    <h2 className={`${styles.heading2} flex justify-center`}>
                        Products
                    </h2>
                </div>
                <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative mt-7 mb-10">
                    {spotlight.map((card) => <SpotlightCard key={card.id} {...card} />)}
                </div>
            </div>

            < div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <Footer />
                </div>
            </div >
        </section>
    )
}

export default Product