
        
    var arr = [4,4,4,3,3,1,1,2,2];

    var cnt = 0;
    var answer = [];


    for (let i = 0; i < arr.length; i++) {
        if (i == arr.length) {
            break;
        } else {
            if (arr[i] === arr[i+1]) {
                continue;
            } else {
                
                answer[cnt] = arr[i];
                cnt++;
            } 
        }
        
    }
    console.log(arr);
    console.log(answer);
