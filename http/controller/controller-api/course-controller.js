class CourseController {
    all(request, response, next) {
        request.app.get('course.repository').all().then(function (results) {
            response.json(results)
        }).catch(next);
    }
    get(request, response, next) {
        request.app.get('course.repository').get(request.params.id).then(result =>
            response.json(result)
        ).catch(next);
    }
    create(request, response, next) {
        request.app.get('course.repository').create(request.course).then(result => {
            response.json(result)
        })
    }
    update(request, response, next) {
        request.app.get('course.repository').update(request.course).then(result => {
            response.json(result)
        })
    }
    remove(request, response, next) {
        request.app.get('course.repository').remove(request.params.id).then(()=> {
            response.json('success')
        })
    }
}
module.exports = CourseController;