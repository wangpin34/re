  var init = function(){
    var backspaceCode = 8;
    var workaround = document.getElementById("workaround");
    workaround.focus();

    var dashboard = document.getElementById("dashboard");
    var btnBox = document.getElementById('btns');
    var fontNameSelect = document.querySelector('select[title=fontname]');
    var fontSizeSelect = document.querySelector('select[title=fontsize]');
    var foreColorSelect = document.querySelector('select[title=foreColor]');
    var hiliteColorSelect = document.querySelector('select[title=hiliteColor]');

    var performUI = function(command, arg){
      var showDefaultUI = false; // Not works in chrome, I guess
      var result = document.execCommand(command, showDefaultUI, arg);  
      if(!result){
        alert('Basic function - execCommand is not supported on your browser');
      }
    }

    q.bind(dashboard, 'selectstart', function(e){
      e.preventDefault();
      e.returnValue = false
      return false
    })

    q.bind(btnBox, 'click', function(e){
      var btn = e.target;
      var command = btn.getAttribute('title');
      var showDefaultUI = false; // Not works in chrome, I guess
      var arg = '';
      performUI(command, arg);
    })

    q.bind(fontNameSelect, 'change', function(e){
      var command = 'fontName';
      var name = e.target.value;
      performUI(command, name);
    })

    q.bind(fontSizeSelect, 'change', function(e){
      var command = 'fontSize';
      var size = e.target.value;
      performUI(command, size);
    })

    q.bind(foreColorSelect, 'change', function(e){
      var command = 'foreColor';
      var color = e.target.value;
      performUI(command, color);
    })

    q.bind(hiliteColorSelect, 'change', function(e){
      var command = 'hiliteColor';
      var color = e.target.value;
      performUI(command, color);
    })
    
  }

  document.addEventListener('DOMContentLoaded', init);