// function updateOutput() {
//     var inputText = document.getElementById("textInput").value;
//     document.getElementById("output").innerText = inputText;
// }

const search=() => {
    const searchBox = document.getElementById("search-item").value.toUpperCase();
    const storeitems=document.getElementsByTagName("product-list");
    const product=document.querySelectorAll(".product");
    const pname=document.getElementsByTagName("h2");
  
    for(var i=0; i<pname.length; i++) {
      let match=product[i].getElementsByTagName("h2")[0];
      if(match){
        let textvalue=match.textContent||match.innerHTML;
        if(textvalue.toUpperCase().indexOf(searchBox)>-1){
            product[i].style.display="";
        }
        else {
            product[i].style.display="none";

        }
      }
    }
}