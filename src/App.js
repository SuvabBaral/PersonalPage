import react from 'react';
import './App.css';
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import Profile from "./components/profile";
import {ContactMe} from "./components/contactMe";

function App() {
	return (
		<div className = 'portfolio'>
			<Navbar/>
			<Sidebar/>
			<Profile/>
			<ContactMe/>
		</div>
	)
};

export default App;
