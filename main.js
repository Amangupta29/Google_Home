const searchInput = document.querySelector("#search-input");

searchInput.addEventListener("keydown",function(event){
   if(event.code === "Enter") {
    search(); 
   }
   });

function search(){
    const input = searchInput.value;

    window.location.href = "https://www.google.com/search?q=" + input + "hello&rlz=1C1SQJL_enIN948IN948&oq=hello&aqs=chrome.0.0i355i433i512j46i433i512j46i131i433i512j0i131i433i512j46i433i512j46i512j0i131i433i512j0i433i512j46i131i433i512j0i433i512.985j0j15&sourceid=chrome&ie=UTF-8"
}