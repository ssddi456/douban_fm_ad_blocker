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