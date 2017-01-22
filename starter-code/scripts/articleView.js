//  Configure a view object, to hold all our functions for dynamic updates and article-related event handlers.
var articleView = {};


articleView.populateFilters = function() {
  $('article').not('.template').each(function() {
    var authorName, category, optionTag;
    authorName = $(this).find('address a').text();
    optionTag = '<option value="' + authorName + '">' + authorName + '</option>';
    $('#author-filter').append(optionTag);
    category = $(this).attr('data-category');
    optionTag = '<option value="' + category + '">' + category + '</option>';
    if ($('#category-filter option[value="' + category + '"]').length === 0) {
      $('#category-filter').append(optionTag);
    };
  });
};

articleView.handleAuthorFilter = function() {
  $('#author-filter').on('change', function() {
    if ($(this).val()) {
      /* DONE: If the slect box changes to an option that has a value, we should:
          1. Hide all of the articles
          2. Fade in only the articles that match based on on the author
            that was aselected. Hint: use an attribute selector to find
            those articles that match the value, and then fade them in.
        */
      $('article').hide();
      $('#about').hide();
      var $selectedAuthor = ($(this).val());

      $('article[data-author="' + $selectedAuthor + '"]').fadeIn();
    } else {
      $('article').not('.template');
    }
    $('#category-filter').val('');
  });
};

articleView.handleCategoryFilter = function() {
  /* DONE: Just like we do for #author-filter above, we should also handle
  change events on the #category-filter element. Be sure to reset the
  #author-filter while you're at it! */
  $('#category-filter').on('change', function() {
    if ($(this).val()) {

      $('article').hide();
      $('#about').hide();
      var $selectedCategory = ($(this).val());

      $('article[data-category="' + $selectedCategory + '"]').fadeIn();
    } else {
      $('article').not('.template');
    }
    $('#author-filter').val('');
  });
};

articleView.handleMainNav = function () {
  $('.main-nav').on('click', '.tab', function(e) {
    /* DONE:
      1. Hide all of the .tab-content sections
      2. Fade in the single .tab-content section that is
        associated with the .tab element's data-content attribute.
    */
    e.preventDefault();
    $('.tab-content').hide();

    var currentTabContent = $(this).attr('data-content');

    if (currentTabContent === 'articles') {
      $('#articles').fadeIn();
    }
    if (currentTabContent === 'about') {
      $('#about').fadeIn();
    }
  });
  // $('.main-nav .tab:first').click();
};

articleView.setTeasers = function() {
  // Truncate logic to show only first two elements within the article body.
  $('.article-body *:nth-of-type(n+2)').hide();
  //  TODO: Add a delegated event handler to reveal the remaining paragraphs.
  $('.read-on').on('click', function(e) {
    // When a .read-on link is clicked, we can:
    // 1. Prevent the default action of a link.
    e.preventDefault();
    // 2. Reveal everything in that particular article now.
    $('.article-body *:nth-of-type(n+2)').show();
    // 3. Hide that read-on link!
    $('.read-on').hide();
    // STRETCH GOAl!: change the 'Read On' link to 'Show Less'
    // $('.article-body > a').
  });
};



// TODO: Invoke all of the above functions (I mean, methods!):
articleView.populateFilters();
articleView.handleAuthorFilter();
articleView.handleCategoryFilter();
articleView.handleMainNav();
articleView.setTeasers();
