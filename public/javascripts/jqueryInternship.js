$(document).ready(function () {
    $('#addInternship').click(function () {
        $.post('/search-service').then(()=>{
            alert('success');
            $('#startDateInternship').val('');
            $('#endDateInternship').val('');
        })
    })
});