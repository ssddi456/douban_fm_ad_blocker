chrome.webRequest.onBeforeSendHeaders.addListener(
  function(details) {
    var url = details.url;
    if( !url.match (/mp3$/) ){return;}
    $.post('http://localhost:3304/xiami/checksong',details);
  },
  // filters
  {
    urls: [
      "http://*.xiami.net/*",
      "http://*.xiami.com/*"
    ]
  },
  // extraInfoSpec
  ["blocking", "requestHeaders"]);

chrome.webRequest.onBeforeSendHeaders.addListener(
  function( details ) {
    console.log( details );
    $.post('http://localhost:3304/xiami/doubanfm', details);
  },{
    urls : [
      'http://douban.fm/j/mine/playlist*'
    ]
  },
  // extraInfoSpec
  ["blocking",'requestHeaders']);

var rAd = /\d{12}\/[a-z0-9]{32}\/rda\//;
// block douban ads
chrome.webRequest.onBeforeSendHeaders.addListener(
  function( details ) {
    console.log( 'douban adds ', details.url );
    if( details.url.match(rAd) ){
      console.log( 'matched' );
    }
    return {
      cancel: true
    };
  },{
    urls : [
      'http://*.douban.com/*/*/rda/*'
    ]
  },
  ["blocking"]);

chrome.webRequest.on