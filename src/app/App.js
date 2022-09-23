import { Component } from "react";
import TodoInput from "../todoInput/TodoInput";
import '../style/style.scss';
import '../style/reset.scss';


class App extends Component {
	render() {
		

		return(
			<div className="app">
				<main>
					<TodoInput/>
				</main>
			</div>
		)
	}
}

export default App;
