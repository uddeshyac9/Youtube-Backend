class ApiError extends Error {
 constructor(
    statusCode,
    message = "Something went Wrong",
    errors = [],
    stacks = ""
 ) {
    super(message)
    this.statusCode = statusCode
    this.data = null
    this.message = message
    this.success= false;
    this.errors = errors

    if (stacks) {
        this.stack = stacks
    } else {
        Error.captureStackTrace(this, this.constructor)
    }

 }
} 
export {ApiError}