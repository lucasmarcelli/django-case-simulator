function send_json(json_string) {
  $.ajax({
    url : "get_data/", // the endpoint
   type : "POST", // http method
   data : { json_string : json_string }, // data sent with the post request

      success : function(json) {
          console.log(json); // log the returned json to the console
          console.log("success"); // another sanity check
      },

      // handle a non-successful response
      error : function(xhr,errmsg,err) {
        console.log(xhr.status + ": " + xhr.responseText); // provide a bit more info about the error to the console
      }
  });
};
