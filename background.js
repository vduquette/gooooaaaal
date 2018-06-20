

function onInstalled(details) {


  var pusher = new Pusher('a4a908844cd829fa1fe0', {
    wsHost: 'ws.pusherapp.com',
    httpHost: 'sockjs.pusher.com',
    encrypted: true
  });

  var channel = pusher.subscribe('my-channel');
  channel.bind('my-event', function(data) {
    console.log(data.message);


    browser.notifications.create('onInstalled', {
      title: data.title,
      message: data.message,
      iconUrl: data.icon,
      type: 'basic'
    });

  });




}

function onClick() {
 //nothing

}



browser.browserAction.onClicked.addListener(onClick);
browser.runtime.onInstalled.addListener(onInstalled);