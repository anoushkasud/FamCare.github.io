import React from 'react'
import { FeedbackCard, Footer } from '../pages';
import { feedback } from "../constants";
import styles from "../Style";
import Navbar from '../component/Navbar';

const Customers = () => {
    return (
        <section id="customer" >
            <div className={`${styles.paddingX} ${styles.flexCenter} bg-primary w-full overflow-hidden`}>
                <div className={`${styles.boxWidth}`}>
                    <Navbar />
                </div>
            </div>

            <div className={`${styles.paddingX} ${styles.flexCenter} flex-col relative my-10`}>
                <div className="w-full relative z-[1]">
                    <h2 className={`${styles.heading2} flex justify-center`}>
                        Testimonials
                    </h2>
                </div>
                <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container ustify-center relative z-[1] ">
                    {feedback.map((card) => <FeedbackCard key={card.id} {...card} />)}
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

export default Customers