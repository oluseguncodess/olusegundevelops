/* eslint-disable react/prop-types */
export default function Socials(props) {
    let coverImg;
    if (props.parentTheme === 'light') {
        coverImg = props.imgDark;
    } else {
        coverImg = props.imgLight;
    }
    return(
        <div className="socials h-6 w-6">
            <img src={coverImg} alt="social-links" className="h-full w-full object-cover" />
        </div>
    );
}