
const SpotlightCard = ({ name, img }) => (
    <div className=" ml-5 flex justify-between flex-col px-10 py-12 rounded-[20px] md:mr-6 sm:mr-5 mr-0 my-5 bg-discount-gradient box-shadow">

        <div className="flex flex-row">
            <img src={img} alt={name} className=" w-[220px] h-[250px] rounded-lg" />

        </div>
        <div className="flex flex-col">
            <button type="button" className={`py-4 px-6 mt-5 w-[220px] font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none`}>
                Buy Now
            </button>
        </div>
    </div>
);


export default SpotlightCard;