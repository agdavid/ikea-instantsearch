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

// search.addWidget(
//   instantsearch.widgets.refinementList({
//     container: '#refinement-list',
//     attributeName: 'categories.lvl0',
//     collapsible: true,
//     templates: {
//       header: 'Categories'
//     }
//   })
// );

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
