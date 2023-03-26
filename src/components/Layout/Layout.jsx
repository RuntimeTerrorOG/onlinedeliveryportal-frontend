import React from "react";
import Content from "../Content/content";
import TopNav from "../TopNav/TopNav";

const Layout = () => {
    return  (
        <div className="main__layout">
            <TopNav/>
            <div className="content">
                <Content/>
            </div>
        </div>
    );
};

export default Layout;