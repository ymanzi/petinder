import pic from "../assets/images/heart.png";
const Header = () => {
    const title = "Petinder";

    return (<header className="colored-background header">
        <img className="logo" src={pic} alt="heart" />
        {title}
    </header>);
}

export default Header;