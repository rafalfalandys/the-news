# The News

## Epilog

Agregator newsów. Pobiera dane z API 'https://newsapi.org/s/poland-news-api' i podaje je w smaczniejszej wersji niz suchy json.

React Router | Redux | API | Pagination | list/grid layout |

Klikając w link ze stroną przechodzisz do mockapu aplikacji. API jest zblokowane ‘cors’em, więc na stronie tylko symuluję, że wszystko działa wybierając losowo 1 z 10 wyników wyszukiwania zapisanych w folderze ‘assets’.

## Szkielet

Silnikiem aplikacji jest funkcja ‘loader’ (react router 6.4+), zasilająca komponent z artykułami. Z każdym kliknięciem linku, buduję URL składający się z: kraju / aktualnego artykułu / strony / liczby wyników i dodatkowo ze słowem kluczowym w przypadku wyszukiwania (np. ‘/country/pl/-miertelny-po-ar-w-t?page=1?results=10’). Loader czyta ten url, wyciąga intersujące go informacje i wysyła odpowiedni request. I w gruncie rzeczy to jest najważniejsze co można powiedzieć o szkielecie tej apki.

## Header:

Header to logo z linkiem do głównej strony, przyciski zmiany layoutu, przycisk odpalający popup i switch do języków PL/EN. Wszystkie 3 zmieniają w reduxie stan UI.

## Sidebar:

Tu się trochę pobawiłem. Z jednego darmowego API z krajami ściągnąłem dane wszystkich krajów razem z flagami. Następnie zmapowałem je wszystkie do samych nazw. Arraya z nazwami wrzuciłem do google translate i dostałem polskie nazwy. ForEachem dodałem je wszystkie z powrotem do obiektów z krajami i w takiej formie zapisałem je wszystkie w pliku .json. Następnie z API z newsami ściągnąłem listę dostępnych krajów, wkleiłem taką listę w plik konfiguracyjny i przy pomocy tych danych wybieram kraje dla których dostępne są newsy.
W obiektach z krajami jest dostępny dwuliterowy kod każdego z nich, który można użyć 1:1 w requeście do pobrania odpowiednich danych.

## Główny content:

Na stronie głównej wyświetlam pasek wyszukiwania. Po wpisaniu słowa kluczowego, submit wrzuca go do url i stamtąd przejmuje go loader function i dba o załadowanie odpowiednich danych.
Poza tym bez niespodzianek - możemy kliknąć na wyszukiwanie wszystkich artykułów, lub wybrać jeden z krajów z sidebara.
Nie mogąc psychicznie wytrzymać tego że nie mogę zobaczyć wszystkich wyników, dodałem paginację. I znowu info o stronie i liczbie wyników ląduje w URL i stamtąd loader function dba, żeby wszystko było dobrze.

## Footer.

Zegarek chciałem wziąć z jakiejś biblioteki, ale żaden mi nie pasował, więc zbudowałem sobie swój własny. Liczba artykułów aktualnie i na stronie jest przerzucona do footera przez reduxa.

## 2 języki.

Dwujęzyczność obsługuję trzymając całą prozę interfejsu w dwóch obiektach - pl i en. Custom hook ‘useText’ zajmuje się wybraniem tego odpowiedniego i zasileniem interfejsu w odpowiednie teksty.

## RWD.

Interfejs zachowuje się sensownie aż do tabletowych szerokości ekranu, więc wystarczyło dodać obsługę telefonu. Oprócz zmniejszenia czcionki, zmieniam kilka rzeczy w nagłówku, zmieniam 3 kafelki w rzędzie na 2 i przede wszystkim buduję chowany sidebar, którego stan trzymam w reduxie.

## Posłowie

No i to w sumie tyle. Starałem się jak mogłem opisać swój tok myślenia w kodzie. Mam nadzieję, że wszystko będzie tam jasne.
