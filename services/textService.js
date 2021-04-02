const textModel = require('../models/textModel')
/**
 * Добавление текста
 * @param {OBJECT} text 
 * @returns true or false
 */
async function addText(text) {
    //Проверка что объект пришел
    if (!text) return false
    //Проверка на наличие текста в БД
    let result = await textModel.find({title : text.title})
    if (result.length > 0) return false
    //Добавление текста
    await textModel.create(text)
    return true
}
/**
 * Получение текста по залоголовку
 * @param {STRING} title 
 * @returns {OBJECT} OR false
 */
async function getText(title) {
    //Проверка что объект пришел
    if (!title) return false
    //Получение пользователя
    let result = await textModel.findOne({title : title})
    if (!result) return false
    else return result
}
/**
 * Получение текста по залоголовку
 * @param {NUMBER} id 
 * @returns {OBJECT} OR false
 */
 async function getTextById(id) {
    //Проверка что объект пришел
    if (!id) return false
    //Получение пользователя
    let result = await textModel.findOne({_id : id})
    if (!result) return false
    else return result
}
/**
 * Выбор всех текстов
 */
async function listTexts() {
    try{
        let result = await textModel.find({})
        if (!result) return []
        else return result
    }catch(error){
        return []
    }
}
/**
 * Обновление текста
 * @param {OBJECT} text 
 * @returns true or false
 */
async function updateText(text) {
    //Проверка что объект пришел
    if (!text) return false
    //Получение текста
    let result = await textModel.findOne({_id : text._id})
    if (!result) return false
    //Обновление
    await textModel.updateOne({_id : text._id}, text)
    return true
}/**
 * Получение рандомного текста
 * @returns {OBJECT}
 */
async function randomText() {
    try{
        let result = await textModel.aggregate(
            [ { $sample: { size: 1 } } ]
        )
        console.log(result);
        return result
    }catch(error) {
        return []
    }
}
/**
 * Поиск по слову
 * @param {STRING} text 
 * @returns {OBJECT} 
 */
async function searchText(text) {
    try{
        let result  = await textModel.find({$text: {$search: text}})
        return result
    }catch(error){ 
        return []
    }
}

module.exports = {
    addText,
    updateText,
    listTexts,
    getText,
    searchText,
    randomText,
    getTextById
}
