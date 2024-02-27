import { connection as db } from '../config/index.js';

class Product {
    fetchProduct(req, res){
        let id = req.params.id;

        const qry = `SELECT * FROM Products WHERE prodID = ${id};`;

        if( isNaN(id) ){
            res.json({
                status: 500,
                msg: `Internal Server Error, perhaps you using the wrong method.`
            })
            return;
        }

        db.query(qry, (err, result)=>{
            if(err) throw err;
            res.json({
                status: res.statusCode,
                result
            })
        })
    }
    fetchProducts(req, res){
        const qry = `SELECT * FROM Products;`;

        db.query(qry, (err, result)=>{
            if(err) throw err;
            res.json({
                status: res.statusCode,
                result
            })
        })
    }
    newProduct(req, res){
        let data = req.body;

        const qry = `INSERT INTO Products SET ?`

        db.query(qry, [data], (err)=>{
            if(err){
                if( err.errno == 1062 ){
                    res.status(403).send({
                        status: 403,
                        msg: "Product already exists"
                    })
                    return;
                }
            };
            res.json({
                status: res.statusCode,
                msg: "Added new product"
            })
        })
    }
    deleteProduct(req, res){
        let prodID = +req.params.id;

        if( isNaN(prodID) ){
            res.json({
                status: 500,
                msg: `Internal Server Error, Either your using the wrong method or product id is incorrect.`
            })
            return;
        }

        const qry = `DELETE FROM Products WHERE prodID = ${prodID};`;

        db.query(qry, (err, result)=>{
            if(err) throw err
            if(result.affectedRows > 0) {
                res.json({
                    status: res.statusCode,
                    msg: "Product removed"
                })
            } else {
                res.status(404).json({
                    status: 404,
                    msg: "Product does not exist"
                })
            }
        })
    }
    editProduct(req, res){
        let data = req.body;

        if( !data.prodID  ){
            res.status(403).send({
                status: 403,
                msg: "Please make sure you select a existing product"
            });
            return;
        }

        const qry = `UPDATE Products SET ? WHERE prodID = ${data.prodID};`;

        db.query(qry, [data], (err)=>{
            if(err) throw err;
            res.json({
                status: res.statusCode,
                msg: "Product updated"
            })
        })
    }
}

export {
    Product
}