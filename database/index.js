const logger = require('../logger/index')
const userDB = require('./3rdParty/users.js')

class DatabaseModel {
    constructor(){
        logger.log(` A new db instance has been initiated`)
    }
    
     registerUser(payload) {
         return new Promise((resolve, reject) => {
            return userDB.insert(payload, (err, newUser) => {
                if(err) return reject(err)
                return resolve(newUser)
            })
         })
     }

     updateUser(ID, payload,) {
       return new Promise((resolve, reject) => {
        return  userDB.find({_id:ID}, (err, existingUser) => {
            if(err) return reject(err)
            let user = {...existingUser, ...payload}
          return userDB.update({_id:ID}, {user}, (err, updatedUser) => {
                if(err) return reject(err)
                return resolve(updatedUser)
            })
        })
       })
     }
     deleteUser(ID) {
            return new Promise((resolve,reject) => {
                return userDB.remove({_id:ID}, {},(err, deletedUser) => {
                    if(err) return reject(err)
                    return resolve(deletedUser)
                })
            })
     }
     fetchUser(ID) {
         
     }
     
     createBudget() {}
     updateBudget() {}
     deleteBudget() {}
     fetchBudget() {}


}

const db = new DatabaseModel()
module.exports = db