var num = parseInt(prompt("输入一个偶数"));
    isTrue(num);
    // 判断一个数是否是质数
    function goldbach(a){
        var sum=0;
        for(var i=1;i<=a;i++){
            if(a % i ==0){
                sum++;
            }
        }
        if(sum==2){
            return true;
        }else{
            return false;
        }
    }
  // 判断用户输入的偶数是否可分为两个质数之和：

    function isTrue(a){
      for(var i=2;i<a-2;i++){
        var j = a -i;
        if(goldbach(i)&&goldbach(j)){
            console.log(a+"可以拆分为两个质数"+ i+"与"+j+"的和");
        }
      }
    }