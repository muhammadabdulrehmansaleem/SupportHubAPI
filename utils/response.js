class Response {
    constructor(statusCode, message, data) {
        this.statusCode = statusCode;
        this.message = message;
        this.data = data;
    }
    static success(data, message = 'Request was successful') {
        return new Response(200, message, data);
      }
    
      static error(message = 'Internal Server Error', data = null, statusCode = 500) {
        return new Response(statusCode, message, data);
      }
    
      static validationError(message = 'Validation error', data = null) {
        return new Response(400, message, data);
    }
    
}
module.exports = Response;