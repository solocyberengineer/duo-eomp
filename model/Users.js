import { connection as db } from '../config/index.js';
import { hash, hashSync, compare } from "bcrypt";
import { createToken } from '../middleware/UserAuthentication.js';

class User {
    fetchUser(req, res){
        let userID = req.params.id;

        const qry = `SELECT userID, firstName, lastName, userAge, Gender, userRole, emailAdd, userProfile FROM Users WHERE userID = ${userID};`;

        db.query( qry, (err, result)=>{
            if(err) throw err;
            res.json({
                status: res.statusCode,
                result
            })
        } )
    }
    fetchUsers(req, res){
        const qry = `SELECT userID, firstName, lastName, userAge, Gender, userRole, emailAdd, userProfile FROM Users;`;

        db.query(qry, (err, results)=>{
            if(err){
                console.log(err)
                res.json({
                    status: 500,
                    msg: "Internal Server Error"
                })
            } else {
                res.json({
                    status: res.statusCode,
                    results
                })
            }
        })
    }
    async createUser(req, res){
        let data = req.body;

        data.userPass = await hash(data.userPass, 8);

        const qry = `INSERT INTO Users SET ?`;

        let user = {
            emailAddress: data.emailAddress,
            userPass: data.userPass
        }

        let token = createToken(user);

        db.query(qry, [data], (err)=>{
            if(err) throw err;
            res.json({
                status: res.statusCode,
                token,
                msg: "Account Created"
            })
        })
    }
    deleteUser(req, res){
        let data = req.body;

        const qry = `DELETE FROM Users WHERE userID = ${data.userID} AND userPass = ${data.userPass};`;

        db.query(qry, (err)=>{
            if(err) throw err;
            res.json({
                status: res.statusCode,
                msg: "Account Deleted"
            })
        })
    }
    updateUser(req, res){
        let data = req.body;

        const qry = `UPDATE Users SET ? WHERE userID = ${data.userID} AND userPass = ${data.userPass};`;

        db.query(qry, (err, result)=>{
            if(err) throw err;
            res.json({
                status: res.statusCode,
                result
            })
        });
    }
    login(req, res){
        let data = req.body;

        const qry = `SELECT * FROM AccountLogins WHERE emailAdd = ${data.emailAddress};`;

        db.query(qry, (err, result)=>{
            if(err) throw err;
            res.json({
                status: res.statusCode,
                msg: "An Error Occurred"
            })
        })
    }
}

export {
    User
}