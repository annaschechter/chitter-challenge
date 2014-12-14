Chitter v2.0
======================
Chitter v2.0 is the week six, individual challenge at Makers Academy. This challenge involves rebuilding Chitter v1.0 from week4 challenge using JavaScrip, jQuery and APIs to make it a single page, responsive app.
Specification
-------------
Chitter is a mini Twitter clone that allows users to post messages to a public stream.
Chitter has the following functionality:
* users can sign up for the service
* users can log in and log out
* users can post messages to chitter
* users can see all posts in chronological order

Languages and Tools
-------------------
* Ruby
* Sinatra
* PostgreSQL
* RSpec
* JavaScript
* jQuery
* APIs
* HTML
* CSS

How to use
----------
Clone the repository:
```
$ git clone git@github.com:annaschechter/chitter-v2.0.git
```
Install the gems:
```
$ bundle install
```
Create test and development databases:
```
$ psql
# create database chitter_test;
# create database chitter_development;
```
Run RSpec to see the unit tests:
```
$ rspec
```
Rackup:
```
$ rackup
```
In your browser visit http://localhost:9292/
