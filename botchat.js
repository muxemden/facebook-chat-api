var login = require("facebook-chat-api");
 
var answeredThreads = {};
 
// Create simple echo bot
login({email: "htnkenji@gmail.com", password: "&lt;nguyen7gt;"}, function callback (err, api) {
    if(err) return console.error(err);
 
    api.listen(function callback(err, message) {
	var d = new Date();
	// var h = d.getHours();
	var h =d.getHours() + 7;
	var day = d.getDay();
	
	if(h >= 6 && h < 12 && !answeredThreads.hasOwnProperty(message.threadID)) {
		answeredThreads[message.threadID] = true;
        api.sendMessage("BOTCHAT: Hello, Chúc buổi sáng tốt lành :)", message.threadID);
	} else if( h >= 12 && h < 18 && !answeredThreads.hasOwnProperty(message.threadID)) {
		answeredThreads[message.threadID] = true;
        api.sendMessage("BOTCHAT: Yeah, Chúc buổi trưa tốt lành :D", message.threadID);
	} else if (h >= 18 && h < 23 && !answeredThreads.hasOwnProperty(message.threadID)) {
		answeredThreads[message.threadID] = true;
        api.sendMessage("BOTCHAT: Hello, 1 buổi tối nhiềm niềm vui ;)", message.threadID);
	} else if (h >= 0 && h < 6 && !answeredThreads.hasOwnProperty(message.threadID)) {
		answeredThreads[message.threadID] = true;
        api.sendMessage("BOTCHAT: Hmmm, Hãy đi ngủ để bảo đảm sức khỏe, mọi việc hãy để sáng mai giải quyết, chúc ngủ ngon!", message.threadID);
	}
});
});