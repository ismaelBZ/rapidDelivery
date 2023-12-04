/*

https://reqbin.com/req/yjok4snr/post-html-form-example

Submitting HTML Forms in JSON Format
HTML does not have native methods for converting forms to JSON objects. If you want to convert form data to JSON, you need to use JavaScript to:

Collect form data from a DOM object into a JavaScript object. If you are using jQuery, you can convert your HTML form into a JavaScript object with a single line using the $("#form").serializeArray() jQuery method.
Convert the JavaScript object to JSON string using JSON.stringify() method.

*/