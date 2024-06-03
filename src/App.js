import React, {lazy, Suspense} from "react";
import {HashRouter, Route, Routes} from 'react-router-dom';

const One = lazy(() => import("./One"));
const Two = lazy(() => import("./Two"));

function App() {
    return (
        <div>
            <Suspense fallback={<div>Loading.....</div>}>
                <HashRouter>
                    <Routes>
                        <Route path="/" element={<One/>}/>
                        <Route path="/two" element={<Two/>}/>
                    </Routes>
                </HashRouter>
            </Suspense>
        </div>
    );
}

export default App;
