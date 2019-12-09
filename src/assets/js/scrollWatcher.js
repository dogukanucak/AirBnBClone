scrollWatcher = function() {
  self = this;
  // Events to be triggered
  observers = [];
  attach = function(event, scrollPosition, compareMethod) {
    observers.push({
      event: event,
      scrollPosition: scrollPosition,
      compareMethod: compareMethod
    });
  };
  activate = function() {
    $(window).scroll(function() {
      const currentPosition = $(window).scrollTop();
      if (self.observers.length > 0) {
        self.observers.map(function(observer) {
          _notify(observer, currentPosition);
        });
      }
    });
  };

  _notify = function(observer, currentPosition) {
    if (observer.compareMethod === 0) {
      if (observer.scrollPosition <= currentPosition) {
        observer.event();
      }
    } else if (observer.compareMethod === 1) {
      if (observer.scrollPosition > currentPosition) {
        observer.event();
      }
    }
  };

  return {
    attach: attach,
    activate: activate,
    compareMethod: { greater: 0, less: 1 }
  };
};

// Scroll Events
enableAttentionSection = function() {
  const attention = $(".attention");
  $(attention).show();
};
disableAttentionSection = function() {
  const attention = $(".attention");
  $(attention).hide();
};

enableNavBar = function() {
  const navBar = $(".navbar-featured");
  $(navBar).css("display", "flex");
};
disabledNavBar = function() {
  const navBar = $(".navbar-featured");
  $(navBar).hide();
};

watcher = scrollWatcher();
watcher.activate();
watcher.attach(enableAttentionSection, 800, watcher.compareMethod.greater);
watcher.attach(disableAttentionSection, 800, watcher.compareMethod.less);
watcher.attach(enableNavBar, 800, watcher.compareMethod.greater);
watcher.attach(disabledNavBar, 800, watcher.compareMethod.less);

$(document).ready(function() {
  $("#imagelist").carousel();
});
