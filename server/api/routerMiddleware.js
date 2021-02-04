const Board = require('../db/models/board')
const Task = require('../db/models/task')

//checks if current in user logged in
//checks if current user is the same one making the http request
const isLoggedInUser = async (req, res, next) => {
  if (req.user) {
    const userId = req.user.id
    // console.log(Object.keys(Task.prototype));
    const {boardId, taskId} = req.params
    if (boardId) {
      const board = await Board.findByPk(boardId)
      if (board.hasUser(userId)) {
        next()
      }
    } else if (taskId) {
      const task = await Task.findByPk(taskId)
      if (task.hasUser(userId)) {
        next()
      }
    }
  } else {
    const err = new Error('Access Denied.')
    err.status = 401
    next(err)
  }
}

//checks if current user is admin
const isAdmin = (req, res, next) => {
  const currentUser = req.user
  if (currentUser && currentUser.isAdmin) {
    next()
  } else {
    const err = new Error('Credentials Denied.')
    err.status = 403
    next(err)
  }
}

module.exports = {isLoggedInUser, isAdmin}