import styles from "../Style";
import { discount, Medicine } from "../assets";
import Navbar from "../component/Navbar";
import { Stats, Spotlight, Profile, Testimonials, CTA, Footer } from "../pages";


const Hero = () => {
    return (
        // <section id="home" className={`flex md:flex-row flex-col py-4`}>
        <section id="home">
            <div className={`${styles.paddingX} ${styles.flexCenter} bg-primary w-full overflow-hidden`}>
                <div className={`${styles.boxWidth}`}>
                    <Navbar />
                </div>
            </div>

            <div className={`flex md:flex-row flex-col py-4`}>
                <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
                    <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
                        <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
                        <p className={`${styles.paragraph} ml-2`}>
                            <span className="text-white">20%</span> Discount on{" "}
                            <span className="text-white">1 month</span> Prescription
                        </p>
                    </div>

                    <div className="flex flex-row justify-between items-center w-full">
                        <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
                            Famcare<br className="sm:block hidden" />{" "}
                            <span className="text-gradient text-[48px]">WE CARE FOR YOU</span>{" "}
                        </h1>
                    </div>

                    <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                        Our team of experts identify the patients problem and
                        most likely examines it.
                    </p>
                </div>
                <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
                    <img src={Medicine} alt="billing" className="w-[70%] h-[80%] relative z-[5]" />

                    {/* gradient start */}
                    <div className="absolute z-[0] w-[60%] h-[35%] top-0 pink__gradient" />
                    <div className="absolute z-[1] w-[30%] h-[40%] rounded-full white__gradient bottom-40" />
                    <div className="absolute z-[0] w-[60%] h-[60%] right-20 bottom-20 blue__gradient" />
                    {/* gradient end */}
                </div>
            </div>

            <Stats />
            <Spotlight />
            <Profile />
            <Testimonials />
            <CTA />

            < div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <Footer />
                </div>
            </div >


        </section>
    );
};

export default Hero;