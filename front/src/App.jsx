import './App.css';
import {Footer, Header} from "./components";
import Main from "./components/Main";
import SetupDate from "./components/SetupDate";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";

export default function App() {
    return (
        <div>
            <Header/>
            <div className="container-fluid">
                <div className="row">
                    <BrowserRouter>
                        <Routes>
                            <Route exact path="/" element={<Main/>}/>
                            <Route exact path="/setupDate" element={<SetupDate/>}/>
                            <Route path="*" element={<Navigate to="/"/>}/>
                        </Routes>
                    </BrowserRouter>
                </div>
            </div>
            <Footer/>
        </div>
    );
};
