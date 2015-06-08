# kvapi
Key Value API endpoint example

##

Try:

```
http://localhost:1337/documents/
```
or
```
http://localhost:1337/documents/date/2015-10-10
```
or
```
http://localhost:1337/documents/date/2015-10-10/category/foo
```
or
```
http://localhost:1337/documents/category/foo/date/2015-10-10
```
or
```
http://localhost:1337/documents/date/2015-10-10/category/foo/addword/bar/addnumber/4
```
or
```
http://localhost:1337/documents/category/foo/date/2015-10-10&addword=bar&addnumber=123
```

Or put the key value pairs in any order you like:

Path keys are:

    date :date
    category :category
    addword :word
    addnumber :number
