const router = require('express').Router()
const {ChecklistItem, User} = require('../db/models')
module.exports = router

// api/checklist  ---gets checklist tied to logged in user
router.get('/', async (req, res, next) => {
  try {
    const userId = req.user.id
    const checklist = await ChecklistItem.findAll({
      where: {
        userId: userId
      }
    })
    res.json(checklist)
  } catch (err) {
    next(err)
  }
})

// api/checklist  --adds new item to checklist
router.post('/', async (req, res, next) => {
  try {
    const userId = req.user.id
    const currentUser = await User.findOne({
      where: {
        id: userId
      }
    })
    const newItem = await ChecklistItem.create({
      description: req.body.description
    })
    await newItem.setUser(currentUser)
    res.json(newItem)
  } catch (err) {
    next(err)
  }
})

// api/checklist/:itemId  --update item in checklist
router.put('/:itemId', async (req, res, next) => {
  try {
    const currentItemId = req.params.itemId
    const updatedItem = await ChecklistItem.findByPk(currentItemId)
    await updatedItem.update(req.body)
    res.send(204).end()
  } catch (err) {
    next(err)
  }
})

// api/checklist/:itemId/delete  --delete item in checklist
router.delete('/:itemId/delete', async (req, res, next) => {
  try {
    const currentItemId = req.params.itemId
    await ChecklistItem.destroy({
      where: {
        id: currentItemId
      }
    })
    res.send(204).end()
  } catch (err) {
    next(err)
  }
})
