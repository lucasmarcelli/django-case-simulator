#Django case simulator for csgo

We decided to make a legit one that gets prices and real stats daily and updates. 

##To help dev:

get python3 and virtualenv

`git clone https://github.com/lucasmarcelli/django-case-simulator/`

`cd django-case-simulator`

`virtualenv env`

`source env/bin/activate`

You must do `source env/bin/activate` in order to enter the virtualenv when you are developing.

Then

`pip install -r "requirements.txt"`

`cd base`

then
`python manage.py makemigrations`

`python manage.py migrate`

`python manage.py runserver` starts the server.

go to localhost:8000

in addition to this you need to use `sass` to build the css. In another terminal or tab cd to `static/casesim/` and run

`sass --watch _sass/main.scss:c/style.css`


