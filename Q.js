/**
 * Lib Q
 * For easliy manage event listener
 * v0.0.1
 */

(function(w){

  function Q(){
    var elements = [];
    var listeners = [];

    var addListener = function(element, eventType, funcs){
      var EVENT_SCROLL = 'scroll';
        
      if(element == document.body && eventType === SCROLL){
        document.onscroll = function(e){
          funcs.forEach(function(func){
            func && func(e);
          })
        }
      }else {
        var listener = function(e){
          e = e || window.event;
          e.target = e.target || e.srcElement;
          funcs.forEach(function(func){
            (typeof func !== 'undefined') && func(e);
          })
        }
      }

      if(element.addEventListener){
        element.addEventListener(eventType, listener);
      }else{
        element.attachEvent('on' + eventType, listener);
      }
    }
      
    if(typeof Q._initialized == 'undefined'){
        
      Q.prototype.bind = (function(element, eventType, func){
        var funcs;
        
        if(elements.indexOf(element) < 0){
          elements.push(element);
          listeners.push({});
          funcs = listeners[listeners.length - 1];
        }else{
          funcs = listeners[elements.indexOf(element)];
        }

        var eventFuncs;
        if(!funcs[eventType]){
          //Initialize event listeners
          funcs[eventType] = [];
          //Bind to the element once
          addListener(element, eventType, funcs[eventType]);
        }
        eventFuncs = funcs[eventType];
        eventFuncs.push(func);

      }).bind(this);

      Q.prototype.unbind = (function(element, eventType, func){
        var funcs;
        
        if(elements.indexOf(element) < 0){
          console.warn('There are no listener could be removed.');
          return 1;
        }else{
          funcs = listeners[elements.indexOf(element)];
        }

        var eventFuncs;
        if(!funcs[eventType] || (eventFuncs = funcs[eventType]).indexOf(func) < 0){
          console.warn('There are no listener could be removed.');
          return;
        }
        eventFuncs.splice(eventFuncs.indexOf(func), 1);
        console.log('A event listener is removed successfully');
      }).bind(this);

      Q._initialized = true;
    }
  }


  var q = new Q();
  if(typeof w.q === 'undefined'){
    w.q = q;
  }else{
    alert('Property q is defined under window, try to provide an alise');
  }

})
(window)

