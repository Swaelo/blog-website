$(document).on('keyup',function(evt) {
    if (evt.keyCode == 27) {
       unityInstance.SendMessage('System', 'HitEscape');
    }
});