const express = require('express')
const route = express.Router()
const models = require('../models')
const upload = require('../midleware/multerUpload')
var fs = require('fs');
var path = require('path');

//// ORIGINAL GET ALL FILMS
route.get('', (req,res)=>{
    models.Film.findAll({attributes : ['id','film', 'acteurs', 'duree','annee','imageURL']})
    .then((data)=>{res.json(data)})
    .catch((error)=>{res.json(error)})
})


//// GET ON FILM
route.get('/film/:id', (req,res)=>{
    const id= req.params.id
    models.Film.findOne({attributes : ['film', 'acteurs', 'duree','annee','imageURL'] , where : {id:id}})
    .then((data)=>{res.json(data)})
    .catch((error)=>{res.json(error)})
})

//// AJOUTER UN FILM
route.post('', upload.single('image'), (req,res)=>{
    const film = req.body.film
    const annee=req.body.annee
    const acteurs = req.body.acteurs
    const duree = req.body.duree
    const imageURL = nameIamge
    console.log("Nom de l'image" + nameIamge)
    models.Film.create({
        film:film,
        acteurs:acteurs,
        duree:duree,
        annee:annee,
        imageURL:imageURL
    })
    .then(()=>{res.json("Film ajouté")})
    .catch((error)=>{res.json(error)})
})

//// MODIFIER LES INFORMATIONS DU FILM
route.put('/:id', (req,res)=>{
    const id = req.params.id
    const film = req.body.film
    const acteurs = req.body.acteurs
    const duree = req.body.duree
    const annee = req.body.annee
    models.Film.update({
        film:film,
        acteurs:acteurs,
        duree:duree,
        annee:annee
    }, {where:{id:id}})
    .then(()=>{res.json("Film Modifié")})
    .catch((error)=>{res.json(error)})
})

//// MODIFIER L'IMAGE DU FILM
route.put('/image/:id',upload.single('image'), (req,res)=>{
    const id = req.params.id

    models.Film.findOne({attributes : ['imageURL'], where : {id : id}})
    .then((data)=>{
        var image = path.join(__dirname, '..', 'images', data.imageURL)
        res.json(image)
        fs.unlink(image, ()=> {});
    })

    const imageURL = nameIamge
    models.Film.update({
        imageURL:imageURL
    }, {where:{id:id}})
    .then(()=>{res.json("Image de FILM Modifiée")})
    .catch((error)=>{res.json(error)})
})

//// SUPPRIMER UN FILM
route.delete('/:id', (req,res)=>{
    const id = req.params.id
    models.Film.destroy({where : {id:id}})
    .then(()=>{res.json("Film supprimé")})
    .catch((error)=>{res.json(error)})
})

module.exports=route