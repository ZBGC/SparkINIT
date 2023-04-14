export default function Leaderboard() {
    return (
        <>
            <h1 className="text-center" id="leaderboard-navbar">Leaderboard</h1>
            <div class=" text-center bg-white rounded overflow-hidden shadow-lg hover:shadow-2xl text-black border-red-200 p-50" id="aComp">
                <h3>Please verify your email and input your score to be on the leaderboard!</h3>
                <form className="block p-50">
                    <label>Email</label>
                    <div className="">
                        <input type="email" className="bg-transparent rounded-md" required></input>
                    </div>
                    <br></br>
                    <br></br>
                    <label>Score</label>
                    <div className="bg-transparent">
                        <input type="text" className="bg-transparent rounded-md" required></input>
                    </div>
                </form>
            </div>
        </>
    );
}

const Board_Table = () => {

}