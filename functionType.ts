function logInUser(email: string, password: string):void {
}

function salary(sal : number):boolean  {
    if(sal > 5){
        return true;
    }
    return false;

}
const array = ["thor","spiderman","hulk","ironman"];
array.map((hero:string)=>{
    return `hero is ${hero}`;

})
function consoleError(errmsg:string):void{
    console.log(errmsg);

}
function handleError(errmsg:string):void{
    throw new Error(errmsg);
}