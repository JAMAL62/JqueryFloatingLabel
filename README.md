# JqueryFloatingLabel
## Usage       
```html
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>FloatingLabel</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js" ></script>
    <script src="floatinglabel.js"></script>
    	
</head>
<body>
     <div class="floatingName">
        <input type="text">
        <label>FirstName</label>
      </div>

</body>
</html>
```
#### Step: 1 EndUser to be add any ClassName to DivTag
```html
<div class="floatingName">
        <input type="text">
        <label>FirstName</label>
 </div>
```
#### Step: 2  Add this jscode to the scriptTag
```javascript
 <script type = "text/javascript" >
    $(document).ready(function() {
       $('.floatingName').floatingLabel();
     }); 
 </script>	
```	 
## Props
| Name          | optional        | Default |
| :------------ |:---------------:| -----:  |
| fontSize	    | yes             | inherit |
| id            | no              |         |
| label         | yes             |         |
| blur          | yes             |         |
| focus         | yes             |         |
| type          | yes             |         |
| div           | yes             |         |
| className     | yes             |         | 

## Using NPM
####  To install using the `npm` package manager run

####  `npm install floatlabel`

## License
MIT
