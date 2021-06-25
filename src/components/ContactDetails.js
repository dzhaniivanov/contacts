import { Link } from "react-router-dom";
import user from '../images/user.png';

const ContactDetails = (props) => {
    console.log(props);
    return (
        <div className="main">
            <div className="ui card centered">
                <div className="image">
                    <img src={user} alt="user" />
                </div>
                <div className="content">
                    <div className="header">Musaka</div>
                    <div className="description">mazna</div>
                </div>
            </div>
        </div>
    )
}

export default ContactDetails;