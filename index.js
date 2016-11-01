function fib(n) {
  var f1=1;
  var f2=1;
  var x=0;
  if(n<0){
    return 0;
  }else if(n>0&&n<=3){
    return 1;
  }
  for(var i=3;i<n;i++){
    x=f2+f1;
    f1=f2;
    f2=x;
  }
  return x;
}

var testCases = [10, 20, 30, 100, -1, 0];
var $resultEle = document.getElementById('result');
testCases.forEach(function (n) {
  var result = fib(n);
  var $ele = document.createElement('p');
  $ele.innerHTML = '第' + n + '个数是：' + result;
  $resultEle.appendChild($ele);
});