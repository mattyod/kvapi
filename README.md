# kvapi
Key Value API endpoint example

##

Try:

```
http://localhost:1337/documents/
```
or
```
http://localhost:1337/documents/id/123
```
or
```
http://localhost:1337/documents/id/123/category/foo
```
or
```
http://localhost:1337/documents/category/foo/id/123
```
or
```
http://localhost:1337/documents/id/124/category/foo/addword/bar/addnumber/4
```
Or put the key value pairs in any order you like:

Path keys are:

    id :uuid
    category :category
    addword :word
    addnumber :number
