const CtaButton = ({ name }) => {
    return (
        <div
            className="flex bg-bg_btn text-white 
    text-2xl font-medium rounded w-[155px]
     h-12 justify-center items-center duration-300 
     md:text-3xl md:w-[200px] md:h-15"
        >
            <p>{name}</p>
        </div>
    );
};

export default CtaButton;
