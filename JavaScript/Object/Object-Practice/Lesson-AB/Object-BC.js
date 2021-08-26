///// OBJECTS ACCESSORS ////////////////////////////////////////////////////////
// 1. javascript object accessors
// 2. javascript accessors (getters and setters)
// 3. javascript getter (the get keyword)
// 4. javascript setter (the set keyword)
// 5. javascript function or getter
// 6. data quality
// 7. why using getters and setters
// 8. Object.defineProperty()

////////////////////////////////////////////////////////////////////////////////
var outBC = document.createElement('div');
outBC.setAttribute('id', 'styleOne');
document.body.appendChild(outBC);

////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
outBC.innerHTML += 'ex-ca : display object | dispaly object-properties';
outBC.innerHTML += '<hr >'; ExCA();
outBC.innerHTML += '<br >ex-cb : display object in (for..in) loop';
outBC.innerHTML += '<hr >'; ExCB();
outBC.innerHTML += '<br >using (Object.values()) | (JSON.stringify())';
outBC.innerHTML += '<hr >'; ExCC();
outBC.innerHTML += '<br >stringify dates | stringify functions | stringify arrays';
outBC.innerHTML += '<hr >'; EXCD();
