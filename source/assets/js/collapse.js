function collapseText($target) {
  const parent = $target.parent();
  const dots = $(parent).find(".dots");
  const collapse = $(parent).find(".collapse");
  collapse.collapse();
  // Hide elements
  $(dots).hide();
  $($target).hide();
}

const termsButtonHTML =
  '<svg class="mr-1" viewBox="0 0 18 18" role="presentation" aria-hidden="true" focusable="false"><path d="m17 9c0-4.42-3.58-8-8-8s-8 3.58-8 8 3.58 8 8 8 8-3.58 8-8m1 0c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9m-9-5.25c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25m0 4.25c.55 0 1 .45 1 1v5c0 .55-.45 1-1 1s-1-.45-1-1v-5c0-.55.45-1 1-1" fill-rule="evenodd"></path></svg>Terms, Privacy & More';

const closeButtonHTML =
  '<svg viewBox="0 0 12 12" role="presentation" aria-hidden="true" focusable="false" style="height: 15px; width: 15px; display: block; fill: currentcolor;"><path d="m11.5 10.5c.3.3.3.8 0 1.1s-.8.3-1.1 0l-4.4-4.5-4.5 4.5c-.3.3-.8.3-1.1 0s-.3-.8 0-1.1l4.5-4.5-4.4-4.5c-.3-.3-.3-.8 0-1.1s.8-.3 1.1 0l4.4 4.5 4.5-4.5c.3-.3.8-.3 1.1 0s .3.8 0 1.1l-4.5 4.5z" fill-rule="evenodd"></path></svg>Close';

function toggleFooter($button, $footer) {
  this.$footer = $.find($footer);
  if ($(this.$footer).hasClass("closed")) {
    openFooter($button, this.$footer);
  } else {
    closeFooter($button, this.$footer);
  }
}

function openFooter($button, $footer) {
  $($button).html(closeButtonHTML);
  $($footer).removeClass("closed");
}
function closeFooter($button, $footer) {
  $($button).html(termsButtonHTML);
  $($footer).addClass("closed");
}
