import React, { useState } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import './style.scss'

TodoList.propTypes = {
    todoList: PropTypes.array,
    onClickTodo: PropTypes.func,
}

TodoList.defaultProps = {
    todoList: [],
    onClickTodo: null,
}

function TodoList({ todoList, onClickTodo }) {
    return (
        <div>
            <ul className='list-task'>
                {todoList.map((item, index) => (
                    <li
                        key={index}
                        onClick={() => onClickTodo(item, index)}
                        className={classnames({
                            complete: item.status === 'completed',
                        })}
                    >
                        {item.title}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TodoList
