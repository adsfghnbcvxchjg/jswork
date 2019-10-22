function goldbach(){
    var value=parseInt(document.getElementById('odd').value)
    var str=[]
    if(value<=2||(value%2!= 0) )
    {
        alert('请输入一个大于2的偶数')
        return false
    }
    for(let i=2;i<=value/2;i++)
    {
        for(j=2;j<i;j++)
        {
            if(i%j==0){
                break;
            }
        }
        if(j == i){
            var s= value-i;
            for(k=2; k<s;++k)
            {
                if(s%k==0){
                    break;
                }
            }
            if(k==s){
                str+=value+"可以被拆分为两个素数"+i+"和"+s+"的和\n"
            }
        }
    }
    document.getElementById('goldbach').innerText=str
}