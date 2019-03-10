// api{
//  	      productid string //your product identificator
//   	    id string//user identificator
//  	      event string//event type e.g. click,withdraw
//  	      group string//marks to user, which group
//   	    data string//other data
//         time int64
// }
var Altum=function altum() {
}
var CurrentPID = ""
var Host = 'http://altumanalytics.com:9800/'
//var Host = 'http://localhost:9800/'
Altum.loglong = function loglong(pid,idp,eventtype,groupJson,aditiondata) {
      (async () => {
        fetch(Host, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({productid: pid, id: idp,count:1,event: eventtype,group: groupJson,data: aditiondata})
        });
      })();
    }
Altum.init = function init(pid) {
  CurrentPID=pid
}
Altum.log = function log(idp, eventtype, aditiondata) {
  (async () => {
    fetch(Host, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ productid: CurrentPID, id: idp, count: 1, event: eventtype, group: "", data: aditiondata })
    });
  })();
}
