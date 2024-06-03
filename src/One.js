import {Link} from "react-router-dom";

function One() {
    return (
        <div className="One">
            <h2>Page One</h2>

            <Link to="/two">
                Two
            </Link>

        </div>
    );
}

export default One;
