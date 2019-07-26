$(document).ready(function() {
  // find all learning blocks
  $(".markdown-body blockquote").each((function() {
    var title = $(this).find("strong:first");

    // pull out type of learning block
    var type = title.text().replace(":", "").replace(/ /g, "-").toLowerCase();

    // apply class to parent block
    $(this).addClass(type);

    // move title outside of paragraph
    title.prependTo($(this));

    // remove bad span
    $(this).find("span:first").remove();
  }));
});