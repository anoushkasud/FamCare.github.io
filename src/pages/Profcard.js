import styles from "../Style";

const Profcard = ({ content, name, title, img }) => (
    <div className="bg-black-gradient mx-4 my-4 rounded-[20px] px-4 py-4 flex">
        <div className="w-[100%] md:mt-0 px-5">
            <img src={img} alt={name} className=" w-[100px] h-[100px] rounded-lg mb-4" />
            <div className="flex flex-col ">
                <h4 className="font-poppins font-semibold text-[20px] text-white">
                    {name}
                </h4>
                <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
                    {title}
                </p>
            </div>
            <p className="font-poppins font-normal text-[18px] leading-[24px] text-white my-7">
                {content}
            </p>
        </div>
        <div className=" flex flex-col ml-40 auto mt-5 px-5">
            <button type="button" className={`py-4 w-[180px] font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none`}>
                Consult Now
            </button>
        </div>
    </div>
)

export default Profcard