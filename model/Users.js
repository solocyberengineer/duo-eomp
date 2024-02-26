import { connection as db } from '../config/index.js';
import { hash, hashSync, compare } from "bcrypt";
import { createToken, verifyAToken } from '../middleware/UserAuthentication.js';

class User {
    fetchUser(req, res){
        let userID = +req.params.id;

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
        const qry = `SELECT userID, firstName, lastName, userAge, Gender, userRole, emailAdd, userProfile FROM Users;`;

        db.query(qry, (err, results)=>{
            if(err) throw err;
            res.json({
                status: res.statusCode,
                results
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
                if(err.errno == 1062){
                    res.status(403).send({
                        status: 403,
                        msg: "Account already exists"
                    })
                    return;
                }
            };
            res.json({
                status: res.statusCode,
                token,
                msg: "Account Created"
            })
        })
    }
    async deleteUser(req, res){
        let data = req.body;
        let userID = req.params.id;

        const qry2 = `DELETE FROM Users WHERE userID = ${userID}`;

        db.query(qry2, (err, result)=>{
            if(err) throw err;
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

        if( !data.userID || !data.userPass  ){
            res.status(401).send({
                status: 401,
                msg: "Please make sure your user password is correct"
            });
            return;
        }

        const qry = `UPDATE Users SET ? WHERE userID = ${data.userID}`;
        // this.fetchUser(req, res)

        db.query(qry, [data], (err, result)=>{
            if(err) throw err;
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
        console.log(authToken)

        console.log("Auth: ", authToken);

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
            console.log('Token Detected!');
            let vaild = verifyAToken(authToken.split(' ').at(-1));
            if( vaild ){
                res.json({
                    status: res.statusCode,
                    msg: `Welcome user`
                })
            } else {
                res.json(valid)
            }
            
        }
    }
}

export {
    User
}