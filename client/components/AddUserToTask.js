import React, {useState} from 'react'
import {assignUserToTask} from '../store/tasks'
import {getAllTasks} from '../store/all-tasks'
import {connect} from 'react-redux'
import {UserAvatar} from './index'

// Material UI
import PersonAddIcon from '@material-ui/icons/PersonAdd'
import IconButton from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'

const AddUserToTask = props => {
  const taskId = props.task.id
  const board = props.board
  const boardUsers = board.users
  const [anchorEl, setAnchorEl] = useState(null)

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleAdd = async userId => {
    try {
      await props.addUserToTask(taskId, board.id, userId)
      await props.fetchTasks(board.id)
      setAnchorEl(null)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <IconButton onClick={handleClick}>
        <PersonAddIcon />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {boardUsers.map(user => (
          <MenuItem key={user.id} onClick={() => handleAdd(user.id)}>
            {`${user.firstName} ${user.lastName}`}
          </MenuItem>
        ))}
      </Menu>
      <UserAvatar users={props.task.users} taskId={taskId} boardId={board.id} />
    </>
  )
}

const mapDispatch = dispatch => {
  return {
    fetchTasks: boardId => dispatch(getAllTasks(boardId)),
    addUserToTask: (taskId, boardId, userId) =>
      dispatch(assignUserToTask(taskId, boardId, userId))
  }
}

export default connect(null, mapDispatch)(AddUserToTask)
