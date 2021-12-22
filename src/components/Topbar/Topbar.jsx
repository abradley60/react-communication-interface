import "./topbar.scss"

export default function Topbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <div href="#intro" className="logo">
                        <img src="assets/eye-icon-white.png" alt="" />
                        <span>open-gaze.</span>
                    </div>
                    <div className="option">
                        <span>Home</span>
                    </div>
                    <div className="option">
                        <span>File</span>
                    </div>
                    <div className="option">
                        <span>New</span>
                    </div>
                    <div className="option">
                        <span>Settings</span>
                    </div>
                </div>
                <div className="right">
                    <div className="change-user">
                        <span>Profile</span>
                    </div>
                    <div className="user">
                        <span>AB</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
