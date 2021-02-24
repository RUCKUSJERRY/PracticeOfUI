
function makeTable(elem) {
    // elem은 지금 empRowList의 파라미터 값을 받았다.
    //$변수 는 var가 생략된건데, 이건 전역변수로 들어가진다.
    $table = $("<table border=1>");
    // 데이터 항목 넣어주는거
    // 테이블 보더를 1로해서 테이블을 생성
    for (var i = 0; i < 1; i++) {
        $tr = $("<tr>");
        // tr 태그를 1개 생성
        for (var j = 0; j < elem.eq(0).children().length; j++) {
            // elem.eq(0) : 맨 처음의 ROW태그
            // children() : 그 안의 태그들 EMPLOYEE_ID, LASTNAME 등등
            // children().length : 안의 태그들의 개수 (총 5개)
            // 그래서 5번 포문이 동작한다.
            $td = $("<td>").append(elem.eq(0).children().eq(j).prop("tagName"));
            // td 태그를 생성해서 맨처음 ROW태그의 자식 태그중에 j번째의 태그네임을 td에 담아주자.
            $tr.append($td);
            // 담아진 td태그를 tr에 어펜드 
        }
        $table.append($tr);
        // 완성된 tr한줄을 테이블 태그에 어팬드
    }

    // 이부분은 
    
    // 여기는 데이터 넣어주는거
    for (var i = 0; i < elem.length; i++) {
        $tr = $("<tr>");
        for (var j = 0; j < elem.eq(i).children().length; j++) {
            $td = $("<td>").append(elem.eq(i).children().eq(j).text());
            $tr.append($td);
            
        }
        $table.append($tr); 
    }

    return $table;

}

