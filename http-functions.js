
// import {ok, badRequest} from 'wix-http-functions'; // ORIGINAL
import {ok, notFound, serverError} from 'wix-http-functions'; //YOUTUBE:v=4yCBplV3MPQ&t=1s
// URL to call this HTTP function from your published site looks like:
// Premium site - https://mysite.com/_functions/example/multiply?leftOperand=3&rightOperand=4
// Free site - https://username.wixsite.com/mysite/_functions/example/multiply?leftOperand=3&rightOperand=4
// Free site - https://brad7390.wixsite.com/my-site-2/_functions/freeLessonRequest/multiply?leftOperand=3&rightOperand=4
// Free site - https://brad7390.wixsite.com/my-site-2/_functions/freeLessonRequest
            // https://brad7390.wixsite.com/my-site-2/

// URL to test this HTTP function from your saved site looks like:
// Premium site - https://mysite.com/_functions-dev/example/multiply?leftOperand=3&rightOperand=4
// Free site - https://username.wixsite.com/mysite/_functions-dev/example/multiply?leftOperand=3&rightOperand=4
// Free site - https://brad7390.wixsite.com/my-site-2/_functions-dev/freeLessonRequest/multiply?leftOperand=3&rightOperand=4
// Free site - https://brad7390.wixsite.com/my-site-2/_functions-dev/freeLessonRequest

// export function get_freeLessonRequest(request) {
export function post_freeLessonRequest(request) {
	// const response = {
	// 	"headers": {
	// 		"Content-Type": "application/json"
	// 	}
	// };
	let options = {
		"headers": {
			"Content-Type": "application/json"
		}
	};


	const idFormStack = 'free_lesson_request';
	// Perform the requested operation and return an OK response
	// with the answer in the response body
	switch (idFormStack) {
	case 'free_lesson_request':
		// response.body = {
		// 	"success": "got it FormStack"
		// };
		return request.body.json()
		.then( (body) => {
			// insert the item in a collection

    	console.log('free_lesson_request Received');
		console.log(body);
		// console.log(request.payload);
		return ok(options);
  	} )
	case 'multiply':
		// response.body = {
		// 	"product": leftOperand * rightOperand
		// };
		// return ok(response);
		return ok(options);
	default:
		// If the requested operation was not found, return a Bad Request
		// response with an error message in the response body
		// response.body = {
		// 	"error": "something went wrong FormStack"
		// };
		// return serverError(response);
		console.warn('free_lesson_request Failed');
		return notFound(options);
	}
}