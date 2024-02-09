type Props = {
    title: string
};
function Button({title}: Props){
    return (
        <div>
            <button>{title}</button>
        </div>
    );
}
export default Button;