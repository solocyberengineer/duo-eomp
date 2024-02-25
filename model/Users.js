import { connection as db } from '../config/index.js';
import { hash, hashSync, compare } from "bcrypt";
import { createToken, verifyAToken } from '../middleware/UserAuthentication.js';

class User {
    fetchUser(req, res){
        let userID = +req.params.id;

        let endpoint = req.path.split('/').at(-1);
        if( isNaN(userID) ){
            res.json({
                status: 500,
                msg: `Internal Server Error, perhaps you using the wrong method.`
            })
            return;
        }

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
        console.log(req.body)
        console.log(req.params)
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

        
        let user = {
            emailAdd: data.emailAdd,
            userPass: data.userPass
        }
        
        const qry = `INSERT INTO Users SET ?`;
        data.userPass = await hash(data.userPass, 8);
        let token = createToken(user);
        res.cookie('authToken', token, { maxAge: '1h', httpOnly: true });
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
    async login(req, res){
        let data = req.body;

        if( !data.emailAdd || !data.userPass ) {
            res.json({
                status: 401,
                msg: "UNAUTHORIZED"
            })
            return;
        }

        let authToken = req.headers['Authorization'];
        console.log(authToken)

        const qry = `SELECT * FROM Users WHERE emailAdd = "${data.emailAdd}";`;

        if( !authToken ){
            db.query(qry, async (err, result)=>{
                if(err){
                    throw err;
                };
                if( result.length <= 0 ){
                    res.json({
                        status: 401,
                        msg: "Account does not exist"
                    })
                    return;
                }
                // console.log(result)
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
            verifyAToken(authToken);
        }
    }
}

export {
    User
}