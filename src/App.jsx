import "./app.scss"
import { useState } from "react"
import React from "react";

import Topbar from "./components/Topbar/Topbar";
import ReactGridLayout from "./components/Grid/BasicGrid"
import Speechbar from "./components/Speechbar/Speechbar";
import Provider from "./components/Provider/Provider"

function App() {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <div className="app">
            <Provider>
                <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                <Speechbar></Speechbar>
                <div className="main">
                    <ReactGridLayout />
                </div>
            </Provider>
        </div>
    );
}

export default App;
