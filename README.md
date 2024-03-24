# The News!

install: npm i  
run: npm start
test: npm run test

## Prologue

News aggregator. In short - it downloads data from 'https://newsapi.org/s/poland-news-api' and serves it in a tastier version than dry json.

Features and stack:
React Router | Redux | API | pagination | list/tiles view | bookmarks |

By clicking on the link you navigate to the mockup of the application. The API is blocked with 'cors', so I only simulate that everything works by randomly picking 1 out of 10 search results saved from the 'assets' folder. Getting mock articles insteap of using API is handled via .env variable.

## The core

The engine of the app is a 'loader' function (react router 6.4+), providing data to the main component.
Each time you click on the link, the URL is built. It consists of country / current article / page / number of results / keyword (optional for search method). For example - '/country/pl/-mortal-after-ar-w-t?page=1? results =10'.
The loader reads the URL, extracts the information it needs, submits the request, and feeds the app with articles.

## Header:

The header consists of the logo with links to the main page, a list/tiles view switch button, a popup button, and PL/EN languages switch. All 3 change the Redux state. There is also a link to bookmarks here.

## Sidebar:

Sidebar contains a list of countries. Each country is a link to the articles from this country.
The list is downloaded from one free API with countries. in order to handle 2 languages of interface I mapped it to country names only -> translated the names to PL -> added Polish names back to the original objects.
In the config file there is a list of countries available in API which is used to filter the countries.

## Main content:

There is a search bar on the homepage. After entering the keyword and submitting brings it to the URL. The loader function takes it from there and takes care of loading the appropriate data.
We can click on the search for all articles, or choose one of the countries from the sidebar.
The articles are displayed as a list or tiles. There is also a pagination component (antd) - the info about the page and the number of results lands in the URL and then, the loader function makes sure that everything is fine.
In the case of bookmarks, articles are downloaded from local storage.

## Footer.

The footer contains a custom-built clock, and an articles counter displaying how many of them are currently displayed. That piece of state is handled via Redux.

## Internationalization.

The internationalization is handled by keeping the entire prose of the interface in two objects - pl and en. The 'useText' custom hook takes care of selecting the proper one and supplying the interface with texts in a good language.

## RWD.

The interface behaves well up to tablet screen widths, so it was enough to add support for the phone. Besides making the font smaller, I'm changing a few things in the header, 3 tiles in a row to 2, and most of all I'm building a retractable sidebar whose state I keep in redux.

## Afterword

I tried to describe my thought process in code. I hope everything will be clear to you - watcher.
