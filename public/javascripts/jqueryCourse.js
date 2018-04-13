$(document).ready(function () {
    $('#course').click(function () {
        let id = $('#course').val();
        $.get("/course/search-service/".concat(id)).then(template)
    })
});
function template(internships) {
    let template = $('#internshipTemplate').html();
    let resultHTML = internships.map(function (internship) {
        return template.replace(':id:',internship.id).replace(':company:', internship.company.name)
            .replace(':startDate:', internship.duration.startDate).replace(':endDate:', internship.duration.endDate)
            .replace(':id:', internship.id);
    }).join('');
    $('#viewsInternship').html(resultHTML);
}
$(document).ready(function () {
    $('#addCourse').click(function () {
        $.post('/course').then(()=>{
            alert('success');
            $('#nameCourse').val('');
            $('#startDateCourse').val('');
            $('#endDateCourse').val('');
        })
    })
});