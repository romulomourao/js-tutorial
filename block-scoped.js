
// 
function foo(){
  var a = 20;
  if(a) {
    var b = 30;
    console.log(a);
    a++;
  }
  console.log(a);
  console.log(b);
}

function bar(){
  let a = 20;
  if(a) {
    let b = 30;
    console.log(a);
    a++;
  }
  console.log(a);
  console.log(b);
}

foo();
console.log("------");
bar();