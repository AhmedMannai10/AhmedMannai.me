const CtaButton = ({ name }) => {
    return (
        <div
            className="flex bg-bg_btn text-white 
    text-2xl font-medium rounded w-[155px]
     h-12 justify-center items-center"
        >
            <p>{name}</p>
        </div>
    );
};

export default CtaButton;
