type Props = {
    title: string
};
function Header({title}: Props){
    return (
        <div>
            <h1>{title}</h1>
        </div>
    );
}
export default Header;