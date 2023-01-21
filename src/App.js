import react from 'react';
import './App.css';
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import Profile from "./components/profile";

function App() {
	return (
		<div className = 'portfolio'>
			<Navbar/>
			<Sidebar/>
			<Profile/>
		</div>
	)
};

export default App;
