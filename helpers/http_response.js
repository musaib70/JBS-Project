module.exports = {
    success: success,
    serverError: serverError,
    notFound: notFound,
    validationError: validationError,
    conflict: conflict,
    unauthorized: unauthorized,
    error: error,
    forbidden: forbidden,
    statusCode: statusCode,
}

function success(res, data = []) {
    return res.status(statusCode('success')).send(data)
}

function bodySuccess(res, data = [], message = '') {
    let success = {
        status: true,
        statusCode: statusCode('success'),
        message: message,
        data: data
    }
    return res.status(statusCode('success')).send(success)
}

function serverError(res, message = '') {
    return res.status(statusCode('serverError')).send({ message })
}

function bodyServerError(res, message = '') {
    let server_error = {
        status: false,
        statusCode: statusCode('serverError'),
        message: message
    }
    return res.status(statusCode('serverError')).send(server_error)
}

function notFound(res, message = '') {
    return res.status(statusCode('notFound')).send({ message })
}

function bodyNotFound(res, message = '') {
    let not_found = {
        status: false,
        statusCode: statusCode('notFound'),
        message: message
    }
    return res.status(statusCode('notFound')).send(not_found)
}

function conflict(res, message = '') {
    return res.status(statusCode('conflict')).send({ message })
}

function validationError(res, message = '') {
    return res.status(statusCode('validationError')).send({ message })
}

function unauthorized(res, message) {
    return res.status(statusCode('unauthorized')).send({ message })
}

function forbidden(res, message) {
    return res.status(statusCode('forbidden')).send({ message })
}

function error(res, message) {
    return res.status(statusCode('error')).send({ message })
}

function statusCode(key) {
    let status_code_list = {
        success: 200,
        notFound: 404,
        created: 201,
        accepted: 202,
        validationError: 422,
        conflict: 409,
        unauthorized: 401,
        forbidden: 403,
        serverError: 500,
        error: 500,
    }

    return status_code_list[key];
}