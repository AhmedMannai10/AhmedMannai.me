const CtaButton = ({ name }) => {
    return (
        <div
            className="flex bg-bg_btn text-white 
    text-2xl font-medium rounded w-fit
     h-12 justify-center items-center duration-300 
     md:text-3xl px-4 cursor-pointer"
        >
            <p>{name}</p>
        </div>
    );
};

export default CtaButton;
