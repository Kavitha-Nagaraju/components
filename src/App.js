import './App.css';
import dhoni from "./images/dhoni-w.webp";
import abdhu from "./images/abdhu-b.webp";
import PlayersTeam from './components/PlayersTeam';


function App() {
  return (
    <div className="App">
      <div className="Players">
      <img src={abdhu}></img>
      <h2>Name:Abdhul</h2>
      <h2>Role:Batter</h2>
      <h2>Team:CSK</h2>
      </div>
      <div className="Players">
      <img src={dhoni}></img>
      <h2>Name:Dhoni</h2>
      <h2>Role:WicketKeeper</h2>
      <h2>Team:CSK</h2>
      </div>
      
      <PlayersTeam  id="Rajat" Name="Rajit" Role="Bouler" Team="CSK" img="./images/rajat-b.webp"></PlayersTeam>
      <PlayersTeam Name="Jitesh" Role="WicketKeeper" Team="RCB" img="./images/jitesh-w.webp"></PlayersTeam>
      <PlayersTeam Name="Rahul" Role="WicketKeeper" Team="Mumbai" img="./images/rahul-w.webp"></PlayersTeam>
      <PlayersTeam Name="Rishabh" Role="WicketKeeper" Team="CSK" img="./images/rishabh-w.webp"></PlayersTeam>
      <PlayersTeam Name="Rohit" Role="Batter" Team="CSK" img="./images/rohit-batter.webp"></PlayersTeam>
      <PlayersTeam Name="Shamir" Role="Batter" Team="Mumbai" img="./images/shamir-b.webp"></PlayersTeam>
      <PlayersTeam Name="Sivam" Role="All Rounder" Team="RCB" img="./images/sivam-all.webp"></PlayersTeam>
      <PlayersTeam Name="Subman" Role="Batter" Team="CSK" img="./images/subman-b.webp"></PlayersTeam>
      <PlayersTeam Name="SuryaKumar" Role="Batter" Team="Mumbai" img="./images/suryakumar-b.webp"></PlayersTeam>
      <PlayersTeam Name="Upendhra" Role="WicketKeeper" Team="CSK" img="./images/upendhra-w.webp"></PlayersTeam>
      <PlayersTeam Name="Virat" Role="Batter" Team="CSK" img="./images/virat-b.webp"></PlayersTeam>

    </div>
  );
}

export default App;
