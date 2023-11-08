import { useState } from 'react';
import Poster from './Poster';
import axios from 'axios';
import './Sign-register.css';
import { useNavigate } from 'react-router-dom';

function SignIn(sign) {
    const navigate = useNavigate();
    const [username, SetUsername] = useState("");
    const [Password, SetPassword] = useState("");
    const handelSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("username", username);
        formData.append("password", Password);
        axios.post("http://localhost:5000/login", formData)
            .then((res) => {
                console.log(res);
                localStorage.setItem("loginToken", res.data.token)
                window.alert("login Sucessful");
                // 
                navigate("/");
            }).catch((err) => {
                console.log(err)
                window.alert("invalid credential")
            })
    }
    return (<>
        <main className="sr_main">
            <Poster />
            <section className="signin">
                <form onSubmit={handelSubmit}>
                    <h1 style={{ marginTop: "180px", fontSize: "45px" }}>Sign In</h1>
                    <div style={{ margin: "3%", fontSize: "17px" }}>Sign in to continue access pages</div><br />
                    <input type="text" placeholder="Email" name='username' onChange={(e) => { SetUsername(e.target.value) }} value={username} /><br />
                    <input type="password" placeholder="Password" name='password' onChange={(e) => { SetPassword(e.target.value) }} value={Password} /><br />
                    <button id="signin_btn" type="submit">Sign in</button>
                </form>
            </section>
        </main>
    </>);
}
export default SignIn;