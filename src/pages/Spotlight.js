import { spotlight } from "../constants";
import styles from "../Style";
import SpotlightCard from "./SpotlightCard";

const Spotlight = () => (
    <section id="spotlight" className={`${styles.paddingX} ${styles.paddingY} ${styles.flexCenter} flex-col relative my-10`}>
        <div className="w-full relative z-[1]">
            <h2 className={styles.heading2}>
                Spotlight
            </h2>
        </div>
        <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative mt-7 mb-10">
            {spotlight.map((card) => <SpotlightCard key={card.id} {...card} />)}
        </div>
    </section>
);

export default Spotlight;