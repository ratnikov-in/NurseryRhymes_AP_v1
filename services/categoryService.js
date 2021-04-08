const categoryModel = require('../models/categoryModel')
/**
 * Добавление категории
 * @param {OBJECT} category 
 * @returns true or false
 */
async function addCategory(category) {
    //Проверка что объект пришел
    if (!Category) return false
    //Проверка на наличие категории в БД
    let result = await categoryModel.find({name : category.name})
    if (result.length > 0) return false
    //Добавление категории
    await categoryModel.create(category)
    return true
}
/**
 * Получение категории по наименованию
 * @param {STRING} name 
 * @returns {OBJECT} OR false
 */
async function getCategory(name) {
    //Проверка что объект пришел
    if (!telegramId) return false
    //Получение категории
    let result = await categoryModel.findOne({name : name})
    if (!result) return false
    else return result
}
/**
 * Выбор всех категорий
 */
async function listCategories() {
    let result = await categoryModel.find({})
    if (!result) return false
    else return result
}
/**
 * Обновление категории
 * @param {OBJECT} Category 
 * @returns true or false
 */
async function updateCategory(category) {
    //Проверка что объект пришел
    if (!Category) return false
    //Получение категории
    let result = await categoryModel.findOne({_id : category._id})
    if (!result) return false
    //Обновление
    await categoryModel.updateOne({_id : category._id}, Category)
    return true
}
module.exports = {
    addCategory,
    updateCategory,
    listCategories,
    getCategory
}