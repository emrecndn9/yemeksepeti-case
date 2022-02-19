# yemeksepeti-case

"cypress:gui": "cypress open" -> run test on gui
"cypress:headless": "cypress run" -> run test headles
"cypress:chrome": "cypress run --browser chrome" -> run tests on chrome
"cypress:firefox": "cypress run --browser firefox" -> run test on firefox

I used github actions for parallel running.

Test Scenarios:

Login test Scenarios  :

1. User try to login without both email and password 

2. User try to login without email this test will fail

3. User try to login without password

4. User try to login with invalid credentials

5. User try to login with valid credentials

Add restaurant to favs tests Scenarios :

1. Search restaurants and add  a restaurants to favourites

2. Remove fav from favourites tab on home page

3. Remove fav from favourites page
