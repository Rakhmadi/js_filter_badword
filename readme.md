## filter unwanted word on string

```html
<html  lang="en">
<body>
<p  id="text">
	ipsum lorem dolor sit amet
</p>
<script  src="./dist/index.js" ></script>
<script>
window.onload = ()=>{
	let el = document.getElementById("text").innerHTML
	let arrUnwantedWordList = ["dolor","amet"]
	
	filterText(el,arrUnwantedWordList )
}
</script>
</body>
</html>
```
### Return
```
ipsum lorem d***r sit a**t
```
