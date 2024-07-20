const accountSid = "YOUR ACCOUNT SID";
const authToken = "YOUR AUTH TOKEN";
const client = require("twilio")(accountSid, authToken);

client.messages
  .create({
    body: "kdkdkkd",
    from: "+16204459253",

    to: "+923432883393",
  })
  .then((message) => console.log(message.sid));
