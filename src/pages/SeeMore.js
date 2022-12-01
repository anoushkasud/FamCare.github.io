import React from 'react'
import styles from "../Style";
import { doctors } from "../constants";
import {Profcard,Footer} from "../pages";
import Navbar from '../component/Navbar';

const SeeMore = () => (
    <section className='seemore'>
        <div className={`${styles.paddingX} ${styles.flexCenter} bg-primary w-full overflow-hidden`}>
            <div className={`${styles.boxWidth}`}>
                <Navbar />
            </div>
        </div>
        <div className={`${styles.paddingX} sm:flex-row flex-col  box-shadow`}>
            <div className="w-full relative z-[1] py-10">
                <h2 className={`${styles.heading2} flex justify-center`}>
                    Our Professionals
                </h2>
            </div>
            <div className=" sm:justify-start justify-center">
                {doctors.map((card) => <Profcard key={card.id} {...card} />)}
            </div>
        </div>
        
        < div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <Footer />
                </div>
            </div >

    </section>
)

export default SeeMore;