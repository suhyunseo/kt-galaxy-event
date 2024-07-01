$(document).ready(function () {
    $('.cont .tab > button').click(function () {
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
    });

    $('.nav-item > a').click(function (e) {
        var subNav = $(this).siblings('.sub-nav');
        if (subNav.length > 0) {
            $(this).parent().toggleClass('active');
            e.preventDefault();
            subNav.slideToggle(200);
        } else {

        }
    });

    if (typeof pageName !== 'undefined') {
        console.log(pageName);
        $('.nav-item.' + pageName).addClass('active');
    }

    //삭제가능 start
    $('#header').load('aside.html');

    $('.logout button').click(function () {
        location.href = 'login.html';
    })
    //삭제가능 end
});

$(function () {
    $("#datepicker, #datepicker2").datepicker({
        closeText: "닫기",
        prevText: "이전달",
        nextText: "다음달",
        currentText: "오늘",
        monthNames: ["1월", "2월", "3월", "4월", "5월", "6월",
            "7월", "8월", "9월", "10월", "11월", "12월"
        ],
        monthNamesShort: ["1월", "2월", "3월", "4월", "5월", "6월",
            "7월", "8월", "9월", "10월", "11월", "12월"
        ],
        dayNames: ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"],
        dayNamesShort: ["일", "월", "화", "수", "목", "금", "토"],
        dayNamesMin: ["일", "월", "화", "수", "목", "금", "토"],
        weekHeader: "주",
        dateFormat: "yy.m.d", // 날짜형태 예)yy년 m월 d일
        firstDay: 0,
        isRTL: false,
        showMonthAfterYear: true,
        yearSuffix: "년"
    });
});

//로그인 유효성 검사
$(document).ready(function () {
    $('#login-form').on('submit', function (event) {
        event.preventDefault();

        var username = $('#adminId').val().trim();
        var password = $('#password').val().trim();
        var errorMessage = '';

        if (username === '') {
            errorMessage = '아이디를 입력해주세요.';
        } else if (password === '') {
            errorMessage = '비밀번호를 입력해주세요.';
        }

        if (errorMessage !== '') {
            $('.login-error').text(errorMessage).show();
        } else {
            // 로그인 처리 로직 추가
            $('.login-error').hide();
            alert('로그인 성공!');

            //삭제가능 start
            location.href = 'index.html';
            //삭제가능 end
        }
    });
});