class ApiResponce {
    constructor(
        statusCode, data,message = "Success"
        ){
            this.data = data
            this.message = message
            this.success = statusCode < 400

    }
}