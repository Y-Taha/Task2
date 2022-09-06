import './style.scss'
// import { setupCounter } from './counter'
var submit=document.getElementById('signin') as HTMLInputElement | null;
const rememberMe=document.getElementById('rememberMe') as HTMLInputElement | null;
const toggleShow=document.getElementById('hide') as HTMLInputElement;
toggleShow?.addEventListener('click',function(){
    hide();
});
if(localStorage.getItem("remember")=="true"){
    window.location.href="secondpage.html";
}else{
    submit?.addEventListener('click',function(){
        signin();
    });
}
var toggle=document.getElementById('mode');
toggle?.addEventListener('click',function(){
    if(document.documentElement.getAttribute('data-theme')=='light'){
        trans();
        document.documentElement.setAttribute('data-theme','dark');
    }else{
        trans();
        document.documentElement.setAttribute('data-theme','light');

    }
});
let trans=() =>{
    document.documentElement.classList.add('transition');
    window.setTimeout(()=>{
        document.documentElement.classList.remove('transition');
    },1000);
}
function hide(){
    const password = document.getElementById('password') as HTMLInputElement;
    if(toggleShow.getAttribute('src')=="eye.png"){
        password.type="text";
        toggleShow.src="private.png";
    }else{
        password.type="password";

        toggleShow.src="eye.png"
    }
}
function isEmail(search:string | null | undefined):boolean
    {
        var  serchfind:boolean;

        var regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        serchfind = regexp.test(String(search));
        return serchfind
    }
function signin(){
    var flag=true;
    const email = document.getElementById('email') as HTMLInputElement;
    const emailvalue = email?.value;
    const password = document.getElementById('password') as HTMLInputElement;
    const passwordvalue = password?.value;
    const passLabel=document.getElementById('passLabel') as HTMLInputElement;
    const emailLabel=document.getElementById('emailLabel') as HTMLInputElement;
    if(password.value.length<8){
        alert("Password at least 8 charachters");
        flag=false;
        passLabel.style.color="#B90000";
        password.style.borderColor="#B90000";
    }if(emailvalue.length==0||!isEmail(emailvalue)){
        flag=false;
        emailLabel.style.color="#B90000";

        email.style.borderColor="#B90000";
    }if(flag){
        if(isEmail(emailvalue)){
            if(rememberMe?.checked){
                localStorage.setItem("email", String(emailvalue));
                localStorage.setItem("password", String(passwordvalue));
                localStorage.setItem("remember","true");
            }
            window.location.href="secondpage.html";
        }else{
            emailLabel.style.color="#B90000";
            email.style.borderColor="#B90000";
        }
    }
}


// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
