/* var div = document.createElement('div');
div.className = 'fb-customerchat';
div.setAttribute('page_id', '2231622190389650');
div.setAttribute('ref', 'b64:bGl2ZS1jaGF0');
div.setAttribute('theme_color', '#0082A5');
document.body.appendChild(div); */
window.fbMessengerPlugins = window.fbMessengerPlugins || {
    init: function () {
        FB.init({
            appId: '1678638095724206',
            autoLogAppEvents: true,
            xfbml: true,
            version: 'v3.0'
        });
    }, callable: []
};
window.fbAsyncInit = window.fbAsyncInit || function () {
    window.fbMessengerPlugins.callable.forEach(function (item) { item(); });
    window.fbMessengerPlugins.init();
};
setTimeout(function () {
    (function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) { return; }
        js = d.createElement(s);
        js.id = id;
        js.src = "//connect.facebook.net/es_LA/sdk/xfbml.customerchat.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
}, 0);