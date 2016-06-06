$(document).ready(function() {
  var footnotesElements = $("li[id^='fn:fn']");

  footnotesElements.each( function (index) {
    // Get the footnote content
    var footnoteElement = $(this).clone();
    footnoteElement.children("p").children("a.reversefootnote").remove();
    var footnoteHTML = footnoteElement.children("p").html();    
    
    // Get the footnote id
    var footnoteId = footnoteElement.attr("id");
    
    // Find the referencing link
    var refLink = $("a[href$='" + footnoteId + "']");
    
    // Set the data-toggle attributes
    var attributes = {
      "data-toggle": "tooltip",
      "title": footnoteHTML
    };
    refLink.attr(attributes);
    
    // Initialize tooltips with options
    var tooltipOptions = {
      "html": true,
      "placement": "auto",
      "container": refLink,
      "delay": {hide:200}
    };
    refLink.tooltip(tooltipOptions);
  });
});
