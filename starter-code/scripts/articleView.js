//  Configure a view object, to hold all our functions for dynamic updates and article-related event handlers.
var articleView = {};


articleView.populateFilters = function() {
  console.log('hello');
  $('article').not('.template').each(function() {
    var authorName, category, optionTag;
    authorName = $(this).find('address a').text();
    optionTag = '<option value="' + authorName + '">' + authorName + '</option>';
    $('#author-filter').append(optionTag);
    category = $(this).attr('data-category');
    optionTag = '<option value="' + category + '">' + category + '</option>';
    if ($('#category-filter option[value="' + category + '"]').length === 0) {
      $('#category-filter').append(optionTag);
    }
  });
};

articleView.handleAuthorFilter = function() {
  $('#author-filter').on('change', function() {
    if ($(this).val()) {
      /* TODO: If the slect box changes to an option that has a value, we should:
      1. Hide all of the articles
      2. Fade in only the articles that match based on on the author
      that was aselected. Hint: use an attribute selector to find
      those articles that match the value, and then fade them in.
      */
      // DONE
      $('article').hide();
      var $authorConnector = ($(this).val());
      console.log($authorConnector);
      $('article[data-author="'+$authorConnector+'"]').fadeIn();
    } else {
      /* Otherwise, we should:
      1. Show all the articles except the template */
      $('article').not('.template').show();
    }
    $('#category-filter').val('');
  });
};

articleView.handleCategoryFilter = function() {
  /* TODO: Just like we do for #author-filter above, we should also handle
  change events on the #category-filter element. Be sure to reset the
  #author-filter while you're at it! */
  // DONE
  $('#category-filter').on('change', function(){
    if ($(this).val()) {
      $('article').hide();
      var $categoryConnector = ($(this).val());
      $('article[data-category="'+$categoryConnector+'"]').fadeIn();
    }
    else {
      $('article').not('.template').show();
    }
    $('#author-filter').val('');
  });
};

articleView.handleMainNav = function () {
  $('.main-nav').on('click', '.tab', function() {
    /* TODO:
    1. Hide all of the .tab-content sections
    2. Fade in the single .tab-content section that is
    associated with the .tab element's data-content attribute.
    */
    // DONE
    $('.tab-content').hide();
    console.log($(this).attr('data-content'));
    var connector = $(this).attr('data-content');
    $('#' + connector).fadeIn();
  });
  $('.main-nav .tab:first').click();
};

articleView.setTeasers = function() {
  // Truncate logic to show only first two elements within the article body.
  $('.article-body *:nth-of-type(n+2)').hide();
  /* TODO: Add a delegated event handler to reveal the remaining paragraphs.
  // DONE

  When a .read-on link is clicked, we can:
  1. Prevent the default action of a link.
  2. Reveal everything in that particular article now.
  3. Hide that read-on link!
  // DONE!

  // STRETCH GOAl!: change the 'Read On' link to 'Show Less'
  */
  // DONE!

  $('#articles').on('click', 'a.read-on', function(event){
    event.preventDefault();
    // $('.article-body').show(); <--- We don't need this part for the article to show.
    console.log($(this));
    //if/else conditional statement after preventingDefault, to switch the text from read-on to show less after the article display logic.
    if ( $(this).text() === 'Read on →') {
      $(this).parent().find('*').fadeIn();
      $(this).html('Show Less');
    //else to set the teasers. Swtich the text to Read on.
    } else {
      $('.article-body *:nth-of-type(n+2)').hide();
      $(this).html('Read on →');
    }
  });
};

// TODO: Invoke all of the above functions (I mean, methods!):

articleView.populateFilters();
articleView.handleAuthorFilter();
articleView.handleCategoryFilter();
articleView.handleMainNav();
articleView.setTeasers();
