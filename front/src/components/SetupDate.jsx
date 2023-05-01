import {useLocation, useNavigate} from "react-router-dom";
import {baseUrl} from "../api/Client";
import {incrementPopularity} from "../services/PetService";

const SetupDate = () => {
    const location = useLocation();
    const { name, image, profileText } = location.state.selectedPet;

    let navigate = useNavigate();
    const navigateHome = () => {
        const path = "/";
        navigate(path);
    }

    const letsPlayFunction = (event) => {
        event.preventDefault();
        incrementPopularity(name)
            .then(()=> console.log("popularity"))
            .then(() => navigateHome());
    }

    return (<div className="container modalPopup">
            <div className="row">
                <div className="col-md-8 col-md-offset-2">
                    <div className="big-dialog">
                        <div className="clearfix">
                            <div className="pull-left dialog-picture">
                                <img
                                    src={baseUrl + image}
                                    className="profile-picture"
                                    alt="pet"
                                />
                            </div>
                            <h3>{name}</h3>
                            <p>{profileText}</p>
                        </div>
                        <br />
                        <div className="clearfix">
                            <form onSubmit="play-function">
                                <button className="btn btn-primary pull-right" type="button" onClick={navigateHome}>Cancel</button>
                                <button className="btn btn-primary pull-right" type="submit" onSubmit={letsPlayFunction}>Let us Play</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SetupDate;