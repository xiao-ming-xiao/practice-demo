const formidable = require('formidable');
const date = require('joi/lib/types/date');
const path = require('path');
const { Goods } = require('../../models/goods');
module.exports = (req, res) => {

    const form = new formidable.IncomingForm();
    form.uploadDir = path.join(__dirname, '../', '../', 'public', 'home', 'upload');
    form.keepExtensions = true;
    form.parse(req, async(err, fields, files) => {
        // res.send();
        await Goods.create({
            id: Math.floor(Math.random() * 500),
            title: fields.title,
            description: fields.description,
            picture: files.picture.path.split('public')[1],
            category: fields.category,
            price: fields.price,
            seller: fields.seller,
            contact: fields.contact,
            contactNumber: fields.contactNumber,
            releaseTime: new Date()
        });
        res.redirect('/home/index');
    });
}