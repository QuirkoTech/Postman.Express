const Button = ({ className = "", onClick = () => {}, ...props }) => {
    return (
        <button
            className={`rounded-low transition hover:bg-green-active active:bg-green-active bg-green-main self-end px-7 py-1 ${className}`}
            onClick={onClick}
            {...props}
        >
            Apply
        </button>
    );
};

export default Button;
