const search = instantsearch({
  appId: 'ZSL0RJTCOE',
  apiKey: '3f46604e5ceef1479ae2ca58ae4f0a71',
  indexName: 'ikea',
  routing: true,
  searchParameters: {
    hitsPerPage: 10
  }
});

search.addWidget(
  instantsearch.widgets.searchBox({
    container: '#search-input',
    placeholder: 'Search for products',
    poweredBy: true
  })
);

search.addWidget(
  instantsearch.widgets.currentRefinedValues({
    container: '#current-refined-values',
    clearAll: false
  })
);

search.addWidget(
  instantsearch.widgets.clearAll({
    container: '#clear-all',
    templates: {
      link: 'Clear All'
    },
    autoHideContainer: false
  })
);

search.addWidget(
  instantsearch.widgets.menu({
      container: '#menu',
      attributeName: 'materials',
      collapsible: true,
      sortBy: ['count'],
      templates: {
        header: 'Materials'
      }
  })
);

search.addWidget(
  instantsearch.widgets.priceRanges({
    container: '#price-ranges',
    attributeName: 'rounded_price',
    collapsible: true,
    labels: {
      currency: '$',
      separator: 'to',
      button: 'Find'
    },
    templates: {
      header: 'Price'
    }
  })
);

search.addWidget(
  instantsearch.widgets.starRating({
    container: '#star-rating',
    attributeName: 'rating',
    labels: {
      header: 'Rating',
      andUp: '& Up'
    }
  })
);

search.addWidget(
  instantsearch.widgets.hierarchicalMenu({
    container: '#hierarchical-menu',
    collapsible: true,
    attributes: ['categories.lvl0', 'categories.lvl1'],
    templates: {
      header: 'Hierarchical categories'
    }
  })
);

search.addWidget(
  instantsearch.widgets.refinementList({
    container: '#refinement-list',
    attributeName: 'colors',
    sortBy: ['name:asc'],
    collapsible: true,
    templates: {
      header: 'Colors'
    }
  })
);

search.addWidget(
  instantsearch.widgets.hits({
      container: '#hits',
      templates: {
        empty: "We didn't find any results for the search <em>\"{{query}}\"</em>",
        item: document.getElementById('hit-template').innerHTML
      }
  })
);

search.addWidget(
  instantsearch.widgets.pagination({
    container: '#pagination',
    maxPages: 20,
    scrollTo: false
  })
);

search.addWidget(
  instantsearch.widgets.numericRefinementList({
    container: '#numeric-refinement-list',
    attributeName: 'share_count',
    templates: {
      header: 'Share Count'
    },
    options: [
      {name: 'All'},
      {end: 1000, name: 'less than 1000'},
      {start: 1000, end: 5000, name: 'between 1000 and 5000'},
      {start: 5000, end: 15000, name: 'between 5000 and 15000'},
      {start: 15000, end: 30000, name: 'between 15000 and 30000'},
      {start: 30000, name: 'more than 30000'}
    ],
    collapsible: true
  })
)

// search.addWidget(
//   instantsearch.widgets.infiniteHits({
//     container: '#infinite-hits',
//     templates: {
//       empty: 'No results',
//       item: '<em>Product: {{name}}</em> {{type}} - {{price}}'
//     },
//     showMoreLabel: 'Show me more'
//   })
// )

search.start();
