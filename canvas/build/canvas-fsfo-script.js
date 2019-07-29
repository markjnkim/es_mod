$(document).ready(function() {
  // find all learning blocks
  $(".markdown-body blockquote").each((function() {
    // get title element
    var title = $(this).find("strong:first");
    title.text(title.text().replace(":", ""));

    // create easy name
    var type = title.text().replace(/ /g, "-").toLowerCase();

    // apply class to parent block
    $(this).addClass(type);

    // remove dangling span next to title
    title.next("span").remove();

    // move title outside of paragraph
    title.prependTo($(this));

    // add additional class for special types
    if (type === "hint" || type === "pause") {
      $(this).addClass("collapse");

      // remove class once clicked
      $(this).one("click", () => {
        $(this).removeClass("collapse");
      });
    }
  }));
});