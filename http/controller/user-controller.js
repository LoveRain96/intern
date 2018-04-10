class UserController {

    create(req, res, next) {
        let repo = req.app.get('users.repo');
        return repo.add(req.user).then( () => {
            res.send({message: 'success..!'});
        }).catch(next);
    }

    update(req, res, next) {
        let repo = req.app.get('users.repo');
        return repo.edit(req.user).then( () => {
            res.send({message: 'success..!'});
        }).catch(next);
    }

    remove(req, res, next) {
        let repo = req.app.get('users.repo');
        repo.remove(req.body.user_name).then( () => {
            res.send({message: 'success'});
        }).catch(next);
    }
}

module.exports =UserController;