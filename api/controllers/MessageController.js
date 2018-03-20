/**
 * @module MessageController
 * @description Receives the plain text to classify.
 */
module.exports = class MessageController extends Controller {
  input(request, res){
    const response = res.response('all ok')
    return response
  }
}
