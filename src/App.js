import react from 'react';
import './App.css';
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import Home from "./components/home";
import DottedLine from "./components/dottedLine";

function App() {
	return (
		<div className = 'portfolio'>
			<Navbar/>
			<Sidebar/>
			<Home/>
			<DottedLine/>

		</div>
	)
};

export default App;
