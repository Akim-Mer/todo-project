import { Component } from "react";
import './todoInput.scss'

class TodoInput extends Component {
	constructor(props) {
		super(props);
		this.state = {
			todos : [],
			value: '',
		}

	}

	//!TODO
	onValueChange = (e) => {
		this.setState({
			value: e.target.value
		})
	}

	onAddTask = () => {
		const obj = {
			name : this.state.value,
			id: Date.now(),
		}

		if (this.state.value !== '') {
			this.setState({
				todos: this.state.todos.concat(obj),	
			})

			this.setState({value : ''})
		}
	}

	onSub = (e) => {
		e.preventDefault(); 
		const obj = {
			name : this.state.value,
			id: Date.now(),
		}

		if (this.state.value !== '') {
			this.setState({
				todos: this.state.todos.concat(obj)
			})

			this.setState({value : ''})
		}
	}

	onDeleteTask = (itemId) => {
		this.setState({
			todos: [...this.state.todos].filter(item => item.id !== itemId),
			
		});
	};

	
	render () {
		const myList = this.state.todos.map(todo => {
			return (
				<li key={todo.id} className="todo__item">
					<input type="text" className="todo__intent" defaultValue={todo.name}/>
					<div className="todo__item-box">
						<button onClick={() => this.onDeleteTask(todo.id)} className="todo__item-btn">
							<span className="sr-only">Удалить</span>
						</button>
					</div>
				</li>
			)
		});

		// const myPerform;
		return (
			<>
				<section className="todo">
					<div className="todo__content">
						<h1 className="todo__titel">TODO</h1>
						<form  
							onSubmit={this.onSub}
							className="todo__form">
							<label className="todo__label" htmlFor="">Введите цель</label>
							<div className="todo__input-box">
								<input 
									className="todo__input" type="text" placeholder="Ваша цель" 
									value={this.state.value} 
									onChange={this.onValueChange}/>
									
								<button onClick={this.onAddTask} className="todo__input-btn" type="button">Добавить</button>
							</div>
						</form>
						<span className="todo__text">Ваши цели</span>
						<ul className="todo__list">
							{myList}
							
						</ul> 
					</div>
				</section>
			
			</>
		)
	}
}





export default TodoInput;