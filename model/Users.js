import { connection as db } from '../config/index.js';
import { hash, hashSync, compare } from "bcrypt";
import { createToken, verifyAToken } from '../middleware/UserAuthentication.js';
import { handleConnectionError, handleTokenError } from '../middleware/ErrorHandling.js';

class User {
    fetchUser(req, res){
        let userID = +req.params.id;

        if( isNaN(userID) ){
            res.json({
                status: 500,
                msg: `Internal Server Error, Either your using the wrong method or userID is incorrect.`
            })
            return;
        }

        const qry = `SELECT userID, firstName, lastName, userAge, Gender, userRole, emailAdd, userProfile FROM Users WHERE userID = ${userID};`;

        db.query( qry, (err, result)=>{
            if(err){
                handleConnectionError(err, req, res);
                return;
            };
            res.json({
                status: res.statusCode,
                result
            })
        } )
    }
    fetchUsers(req, res){
        const qry = `SELECT userID, firstName, lastName, userAge, Gender, userRole, emailAdd, userProfile FROM Users;`;

        db.query(qry, (err, result)=>{
            if(err){
                console.log(err)
                handleConnectionError(err, req, res);
                return;
            }
            res.json({
                status: res.statusCode,
                result
            })
        })
    }
    async signup(req, res){
        let data = req.body;
        //check if valid data exists
        
        if( !data.emailAdd || !data.userPass ) { 
            res.status(401).send({
                status: 401,
                msg: "Invalid email or password"
            });
            return;
        };

        let user = {
            emailAdd: data.emailAdd,
            userPass: data.userPass
        }
        
        const qry = `INSERT INTO Users SET ?`;
        data.userPass = await hash(data.userPass, 8);
        let token = createToken(user);
        
        db.query(qry, [data], (err)=>{
            if(err){
                handleConnectionError(err, req, res);
                return;
            };
            res.json({
                status: res.statusCode,
                token,
                msg: "Account Created"
            })
        })
    }
    deleteUser(req, res){
        let userID = +req.params.id;

        if( isNaN(userID) ){
            res.json({
                status: 500,
                msg: `Internal Server Error, Either your using the wrong method or user id is incorrect.`
            })
            return;
        }

        const qry = `DELETE FROM Users WHERE userID = ${userID}`;

        db.query(qry, (err, result)=>{
            if(err) {
                handleConnectionError(err, req, res);
                return;
            }
            if(result.affectedRows > 0) {
                res.json({
                    status: res.statusCode,
                    msg: "Account Deleted"
                })
            } else {
                res.status(404).json({
                    status: 404,
                    msg: "Account does not exist"
                })
            }
        })
    }
    updateUser(req, res){
        let data = req.body;
        let userID = req.params.id;

        if( !userID  ){
            res.status(401).send({
                status: 401,
                msg: "Please make sure you select a vaild user"
            });
            return;
        }

        const qry = `UPDATE Users SET ? WHERE userID = ${userID}`;
        // this.fetchUser(req, res)

        db.query(qry, [data], (err, result)=>{
            if(err){
                console.log(err);
                handleConnectionError(err, req, res);
                return;
            }
            res.json({
                status: res.statusCode,
                msg: "Account updated"
            })
        });
    }
    async login(req, res, next){
        let data = req.body;

        if( !data.emailAdd || !data.userPass ) {
            res.json({
                status: 401,
                msg: "UNAUTHORIZED"
            })
            return;
        }

        let authToken = req.headers['authorization'];

        const qry = `SELECT * FROM Users WHERE emailAdd = "${data.emailAdd}";`;

        if( !authToken ){
            db.query(qry, async (err, result)=>{
                if(err){
                    handleConnectionError(err, req, res);
                    return;
                }
                if( result.length <= 0 ){
                    res.json({
                        status: 401,
                        msg: "Account does not exist"
                    })
                    return;
                }
                let emailAdd = result[0].emailAdd;
                let userPass = result[0].userPass;
                let firstName = result[0].firstName;
                let token = createToken({emailAdd, userPass});
                if( await compare( data.userPass, userPass ) ){
                    res.json({
                        status: res.statusCode,
                        token,
                        msg: `Welcome ${firstName}`
                    })
                    return;
                } else {
                    res.json({
                        status: 401,
                        msg: "Incorrect Credentials"
                    })
                    return;
                }
            })
        } else { 
            try {
                let valid = verifyAToken(authToken.split(' ').at(-1));
                if( valid ){
                    res.json({
                        status: res.statusCode,
                        msg: `Welcome user`
                    })
                } else {
                    res.json(valid)
                }
            } catch (e) {
                handleTokenError(e, req, res);
                return;
            }
            
            
        }
    }
}

export {
    User
}