// will need to import functions from the SDK's we need
import { initializeApp } from "firebase/app";
import { getAuth, sendSignInLinkToEmail } from "firebase/auth";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCZxZatLIKL7IsuWdaj8ePsXPYGA4iN2CY",
    authDomain: "jumpin-it-marketing-website.firebaseapp.com",
    projectId: "jumpin-it-marketing-website",
    storageBucket: "jumpin-it-marketing-website.appspot.com",
    messagingSenderId: "959120951886",
    appId: "1:959120951886:web:fdb9ca8baa998480dc111f",
    measurementId: "G-P8HCX1C5VQ"
};
  


export default function Leaderboard() {
    return (
        <>
            <h1 className="text-center" id="leaderboard-navbar">Leaderboard</h1>
            <div class=" text-center bg-white rounded overflow-hidden shadow-lg hover:shadow-2xl text-black border-red-200" id="aComp">
                <h3>Please verify your email and input your score to be on the leaderboard!</h3>
                <form className="block">
                    <label>Email</label>
                    <input type="email" className=" rounded-md ml-4" required></input>
                    <br></br>
                    <br></br>
                    <label>Score</label>
                    <input type="text" className=" rounded-md ml-4 mb-7" required></input>
                    <br></br>
                    <button type="submit" className="radius-full bg-red-200">Submit</button>
                </form>
            </div>
        </>
    );
}

const Regex_Email_Pattern = () => {
    // regex pattern for email validation
    let regex = "\^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$\g";
}

const Board_Table = () => {

}