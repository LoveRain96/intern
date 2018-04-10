class CourseController {
    all(request, response, next) {
        request.app.get('course.repository').all().then(function (results) {
            response.json(results)
        }).catch(next);
    }

    get(request, response, next) {
        request.app.get('course.repository').get(request.params.id).then(course =>
            response.render('detail-course.njk', {course : course })
        ).catch(next);
    }

    create(request, response, next) {
        request.app.get('course.repository').create(request.course).then(() => {
            response.redirect('course/add')
        })
    }

    update(request, response, next) {
        request.app.get('course.repository').update(request.course).then(() => {
            response.redirect('/course')
        })
    }

    remove(request, response, next) {
        request.app.get('course.repository').remove(request.params.id).then(()=> {
            response.redirect('/course')
        })
    }
}
module.exports = CourseController;