type Props = {
    imageUrl: string
};
function Image({imageUrl}: Props){
    return (
        <div>
             <img src={imageUrl} alt="Image" />
        </div>
    );
}
export default Image;