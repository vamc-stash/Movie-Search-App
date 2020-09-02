import React, {useState} from 'react';
import {Input} from './Styled';

const SearchBox = (props) => {

	const [userInput, setUserInput] = useState('')

	const handleChange = (e) => {
		setUserInput(e.target.value)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		const {value} = e.target.searchValue
		setUserInput(value)
		props.search(value)
	}

	return(
		<div className="m-4">
			<form onSubmit={(e) => handleSubmit(e)} >
				<Input type="text" name="searchValue" value={userInput} className="" placeholder="search for movies..."
				onChange={(e) => handleChange(e)}/>
			</form>
		</div>
	)
} 

export default SearchBox;