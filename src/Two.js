import {Link} from "react-router-dom";
import {lazy, Suspense} from "react";

const SharedComponent = lazy(() => import("./SharedComponent"));

function Two() {
    return (
        <div className="Two">
            <h1>Page Two</h1>

            <Suspense fallback={<div>Loading....</div>}>
                <SharedComponent/>
            </Suspense>

            <Link to="/">
                One
            </Link>

        </div>
    );
}

export default Two;
