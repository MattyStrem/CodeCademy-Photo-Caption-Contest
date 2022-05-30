module.exports = {

    list(req, res) {
        return Photo
            .findAll({
                order: [
                    ['createdAt', 'ASC'],
                ],
            })
            .then((photos) => res.status(200).send(photos))
            .catch((error) => { res.status(400).send(error)}) 
    },

    
}