import React from "react";

const HomeView = () => {
    return(
        <div>
            <h1>Welcome to the Idea case!</h1>
            <dl>
                <dt>Date:</dt>
                <dd>{(new Date()).toLocaleDateString()}</dd>
                <dt>Time:</dt>
                <dd>{(new Date()).toLocaleTimeString()}</dd>
            </dl>
        </div>
    );
}

export default HomeView;