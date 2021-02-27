
import { ok, notFound, serverError } from 'wix-http-functions'; //YOUTUBE:v=4yCBplV3MPQ&t=1s
import wixData from 'wix-data';

// URL to call this HTTP function from your published site looks like:
// Premium site - https://mysite.com/_functions/example/multiply?leftOperand=3&rightOperand=4
// Free site - https://brad7390.wixsite.com/my-site-2/_functions/freeLessonRequest

// URL to test this HTTP function from your saved site looks like:
// Premium site - https://mysite.com/_functions-dev/example/multiply?leftOperand=3&rightOperand=4
// Free site - https://brad7390.wixsite.com/my-site-2/_functions-dev/freeLessonRequest

/**
 * @TODO: make this a YAML File somewhere
 * @TABLE: webhookPayload
 * @ATTRIBUTES:
 * 	title: some meaningful and short concatenation of other attributes
 * 	payload: the (almost always) JSON Payload (the point of the webHook in the first place)
 * 	payloadId: the _source_ ID for this Instance
 * 	webhookStamp: either now.toISOStamp() or best from root.recievedTimestamp
 * 	webhookId: the _source_ ID for the webHook itself, for freeLessonRequest it's '4262311'
 * 	currentStatus: depending on Handshake confirmed type, for freeLessonRequest 'PENDING' (leave as last before Resolved)
 * 	currentStamp: updated as currentStatus changes (leave as last before Resolved)
 * 	resolvedStatus: null until Resolved
 * 	resolvedStamp: null until Resolved
 */

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
				let titleThis = title;
				let thisPayload = JSON.stringify(JSON.parse(body));
				let thisWebhookStamp = new Date();
				thisWebhookStamp = thisWebhookStamp.toISOString();
				let thisCurrentStatusStamp = new Date();

				let thisCurrentStatus = 'PENDING';//for this form
				let recordInsert = {
					"title": titleThis,
					"payload": thisPayload,
					"payloadId": body.UniqueID,
					"webhookStamp": thisWebhookStamp,
					"webhookId": body.FormID,
					"currentStatus": thisCurrentStatus,
					"currentStatusStamp": thisCurrentStatusStamp,
					"resolvedStatus": null,
					"resolvedStatusStamp": null,
				}
				wixData.insert("webhookPayload", recordInsert);
				console.log('free_lesson_request Received');
				// console.log(body);
				// console.log(recordInsert);
				// console.log(body.HandshakeKey);
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
	const insertFieldNames = ['title', 'payload', 'payloadId', 'webhookStamp', 'webhookId', 'currentStatus', 'currentStatusStamp', 'resolvedStatus', 'resolvedStatusStamp'];
	let payload = body;
	let webhookStamp = new Date();
	webhookStamp = webhookStamp.toISOString();
	let webhookId = body.FormID;

}