import React from 'react';
import './App.css';
import Header from "./components/Header.";
import Navbar from "./components/Navbar";

function App() {
    return (
        <div className={"app-wrapper"}>
            <Header/>
            <Navbar/>
            <main className={"main"}>
                <div>
                    <img
                        src="https://wallup.net/wp-content/uploads/2018/09/30/912666-quotes-typography-text-quote-motivational-inspirational.jpg"
                        alt="main_img"/>
                </div>
                <div>ava + description</div>
                <div>
                    My Posts
                    <div>
                        New Posts
                    </div>
                </div>
                <div>
                    <div>Post 1</div>
                    <div>Post 2</div>
                </div>
            </main>
        </div>
    );
}

export default App;
