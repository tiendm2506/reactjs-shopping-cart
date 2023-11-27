/* eslint-disable no-restricted-globals */
import React, { useEffect, useState } from 'react'
import { useNavigate, useMatches, useLocation } from 'react-router-dom'
import queryString from 'query-string'

import TodoList from './../../components/TodoList'

ListPage.propTypes = {}

function ListPage(props) {
    const navigate = useNavigate()
    const location = useLocation()
    // console.log("history: ", history);
    // console.log("location: ", location);
    const initTodoList = [
        { id: 1, title: 'Eat', status: 'new' },
        { id: 2, title: 'Sleep', status: 'completed' },
        { id: 3, title: 'Code', status: 'new' },
    ]
    const [todoList, settodoList] = useState(initTodoList)
    const handleClickTodoItem = (todo, index) => {
        const newTodoList = [...todoList]
        newTodoList[index] = {
            ...newTodoList[index],
            status: todo.status === 'new' ? 'completed' : 'new',
        }
        settodoList(newTodoList)
    }
    const [filterStataus, setFilterStataus] = useState(() => {
        const params = queryString.parse(location.search)
        return params.status || 'all'
    })
    const handleShowFilter = (status) => {
        // setFilterStataus(status);
        navigate(`/todos?status=${status}`)
    }
    const todoListFilter = todoList.filter((todo) => {
        return filterStataus === 'all' || todo.status === filterStataus
    })
    useEffect(() => {
        const params = queryString.parse(location.search)
        const status = params.status
        setFilterStataus(status || 'all')
    }, [location.search])
    return (
        <div>
            <h3>Todo list</h3>
            <TodoList todoList={todoListFilter} onClickTodo={handleClickTodoItem} />
            <ul className='list-btn'>
                <li>
                    <button onClick={() => handleShowFilter('all')}>Show All</button>
                </li>
                <li>
                    <button onClick={() => handleShowFilter('completed')}>Show Completed</button>
                </li>
                <li>
                    <button onClick={() => handleShowFilter('new')}>Show New</button>
                </li>
            </ul>
        </div>
    )
}

export default ListPage
