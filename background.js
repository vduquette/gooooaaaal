

function onInstalled(details) {


  var pusher = new Pusher('a4a908844cd829fa1fe0', {
    wsHost: 'ws.pusherapp.com',
    httpHost: 'sockjs.pusher.com',
    encrypted: true,
    disableState: true
  });

  var channel = pusher.subscribe('my-channel');
  channel.bind('my-event', function(data) {


    browser.notifications.create('onInstalled', {
      title: data.title,
      message: data.message,
      iconUrl: data.icon,
      type: 'basic'
    });

  });




}

function onClick() {


  fetch('https://pvvwc.herokuapp.com/scores.json')
      .then(response => response.json())
      .then(response => {
          console.log(response);

          browser.notifications.create('onInstalled', {
            title: response.title,
            message: response.message,
            iconUrl: response.icon,
            type: 'basic'
          });



       })
       .catch(error => console.log(error));



}



browser.browserAction.onClicked.addListener(onClick);
browser.runtime.onInstalled.addListener(onInstalled);