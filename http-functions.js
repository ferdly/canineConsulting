
import { ok, notFound, serverError } from 'wix-http-functions'; //YOUTUBE:v=4yCBplV3MPQ&t=1s
// URL to call this HTTP function from your published site looks like:
// Premium site - https://mysite.com/_functions/example/multiply?leftOperand=3&rightOperand=4
// Free site - https://brad7390.wixsite.com/my-site-2/_functions/freeLessonRequest

// URL to test this HTTP function from your saved site looks like:
// Premium site - https://mysite.com/_functions-dev/example/multiply?leftOperand=3&rightOperand=4
// Free site - https://brad7390.wixsite.com/my-site-2/_functions-dev/freeLessonRequest

// export function get_freeLessonRequest(request) {
export function post_freeLessonRequest(request) {
	let options = {
		"headers": {
			"Content-Type": "application/json"
		}
	};


	const title = 'freeLessonRequest';
	const fsFormId = '4262311';
	const manualHandshake = '8FD7E76007870C3F4352D478B19E5AE6E61672918EBDEADC023491A7ABBE8197';
	const verifyHandshake = '8FD7E76007870C3F4352D478B19E5AE6E61672918EBDEADC023491A7ABBE8197';
	const handshakeMatch = manualHandshake === verifyHandshake ? true : false;
	// Perform the requested operation and return an OK response
	// with the answer in the response body
	if (handshakeMatch) {
		// response.body = {
		// 	"success": "got it FormStack"
		// };
		return request.body.json()
			.then((body) => {
				// insert the item in a collection

				console.log('free_lesson_request Received');
				console.log(body);
				console.log(body.HandshakeKey);
				return ok(options);
			})
	} else {
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

export function webhookPayload_INSERT(title, body, timestamp) {
	const insertTableName = 'webhookPayload';
	const insertFieldNames = ['title', 'payload', 'webhookStamp', 'webhookId', 'currentStatus', 'currentStatusStamp', 'resolvedStatus', 'resolvedStatusStamp'];
	let payload = body;

}