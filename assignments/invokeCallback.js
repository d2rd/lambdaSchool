//Invoke the callback function that is passed into invokeCallback.

function invokeCallback(cb) {
  cb(
    console.log("Callback invoked, Captain")
  );
return cb;
  
}
