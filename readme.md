Welcome file
Welcome file
▲
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
filter unwanted word on string
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
Return
ipsum lorem d***r sit a**t
Markdown 402 bytes 49 words 24 lines Ln 23, Col 26HTML 322 characters 43 words 18 paragraphs
