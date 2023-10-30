
function Header(){
    return(
        <div>
            <input class="Button" type="button" value="Click Me" onClick={() => { 
                var f=true;
                do{
                var s=prompt("Enter Something"); 
                var temp="";
                for(var e=s.length-1; e>=0; e--){
                temp=temp+s.charAt(e);
                 }
                alert(temp);
                var y=prompt("DO YOU WANT TO TRY AGAIN TYPE 'Y' or 'N' 🎶🎶🎶🎶🎶");
                if(y=="N"){
                f=false;
                }
                }while(f);
            }}/>
               var
        </div>
    );
}
export default Header;
