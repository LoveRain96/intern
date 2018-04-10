$(document).ready(function () {
    $('#addInternship').click(function () {
        $.post('/internship').then(()=>{
            alert('success');
            $('#startDateInternship').val('');
            $('#endDateInternship').val('');
        })
    })
});