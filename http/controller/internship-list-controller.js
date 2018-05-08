
exports.getListPENDING = function (request, response, next) {
    request.app.get('internshipRegistration.provider').getListPENDING(request.params.id).then(result => {
        response.json(result);
    });
};

exports.getListCONFIRMED = function (request, response, next) {
    request.app.get('internshipRegistration.provider').getCONFIRMED(request.params.id).then(result => {
        response.json(result);
    });
};