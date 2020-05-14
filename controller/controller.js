
//create a othercontrib 
const Othercontribs = require('../models/other');

//post
//save to database
exports.create = (req,res) => {
    console.log(req.body.name)
    console.log('entr createlooop');
    Othercontribs.Othercontrib.create({
        name:req.body.name,
        description:req.body.description,
        amount:req.body.amount
    }).then(results => {
        console.log(results);
        res.send(results.toJSON());
    }).catch(err => {
        res.status(500).send('Error'+err);
    })
}
//fetch
exports.getall = (req,res) => {
    console.log('entering find all');
    Othercontribs.Othercontrib.findAll({}).then(results => {
 
       console.log(results) 
    //send all table data to client
    res.send(results.toJSON())

}).catch(err => {
    res.status(500).send('error ->'+err);
})
};

//delete
exports.delete = (req,res) => {
    const name =req.params.Othercontrib.name;
    Othercontrib.destroy({
        where:{name:name}
    }).then(() => {
        res.status(200).send('customer has been deleted')
    })
}















