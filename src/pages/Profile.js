import styles from "../Style";
import { profiles } from "../constants";
import Profcard from "./Profcard";
import { rightarrow } from "../assets";
import { NavLink } from 'react-router-dom';




const Profile = () => (
    <section id="profiles" className="my-10" >
        <div className={`${styles.paddingX} sm:flex-row flex-col  box-shadow px-5 py-5`}>
            <div className="w-full relative z-[1]">
                <h2 className={styles.heading2}>
                    Our Professionals
                </h2>
            </div>
            <div className=" sm:justify-start justify-center mt-10">
                {profiles.map((card) => <Profcard key={card.id} {...card} />)}
            </div>
            <div className={`${styles.flexStart} flex-row`}>
                <NavLink to={"/profiles"}>
                    <p className="font-poppins font-medium text-[20px] leading-[23.4px]">
                        <span className="text-gradient cursor-pointer">See More <img src={rightarrow} alt='rightarrow' className="w-[12px] inline" /></span>
                    </p>
                </NavLink>
            </div>
        </div>
    </section>
);

export default Profile;