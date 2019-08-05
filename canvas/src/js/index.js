// prism highlighting
import Prism from "prismjs";
import  "prismjs/components/prism-bash";

// style sheets
import "../css/main.scss";

$(document).ready(function() {
  // add custom wrapper if not already there
  if ($("#bootcamp").length == 0) {
    $('#wiki_page_show .user_content').wrapInner("<div id='bootcamp'>");
  }

  // find crappy tables
  $("#bootcamp table").each(function() {

    $(this)
      .find("[id*=gdc]")
      .remove();

    var type = $(this).find("td:first").text().trim()
    var content = $(this).find("td:last").html();

    // fixing spacing issue
    if (type === "Technical OverviewVideo") {
      type = "Technical Overview Video";
    }

    if (type === "Context OverviewVideo") {
      type = "Context Overview Video";
    }

    // and convert to blockquotes
    var block = $("<blockquote>").append(`<strong>${type}</strong>`).append(content);

    $(this).replaceWith(block);
  });

  // find all learning blocks
  $("#bootcamp blockquote").each(function() {
    // get title element
    var title = $(this).find("strong:first");
    title.addClass("title").text(title.text().replace(":", ""));

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
  });

  // make sure code snippets are formatted for prism
  $("pre:not(:has(>code))").wrapInner("<code class='language-bash'>");
  Prism.highlightAll();
});