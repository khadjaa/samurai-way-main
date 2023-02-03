import React from 'react';
import './App.css';
import Header from "./components/Header.";

function App() {
    return (
        <div className={"app-wrapper"}>
           <Header/>
            <nav className={"nav"}>
                <div><a href={"#"}>Profile</a></div>
                <div><a href={"#"}>Messages</a></div>
                <div><a href={"#"}>News</a></div>
                <div><a href={"#"}>Musics</a></div>
                <div><a href={"#"}>Settings</a></div>
            </nav>
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
