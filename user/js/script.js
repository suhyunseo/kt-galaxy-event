//응모하기 폼 유효성 검사
$(document).ready(function () {
    $('#entry-form').on('submit', function (event) {
        event.preventDefault();

        var name = $('#name').val().trim();
        var phone = $('#phone').val().trim();
        var add = $('#address').val().trim();
        var add2 = $('#address2').val().trim();
        var spot = $('#spot').val().trim();
        var priv = $('#privacy').prop('checked')
        var errorMessage = '';

        console.log(priv);

        if (name === '') {
            errorMessage = '이름을 입력해주세요.';
        } else if (phone === '') {
            errorMessage = '전화번호를 입력해주세요.';
        } else if (add === '') {
            errorMessage = '주소를 검색해주세요.';
        } else if (add2 === '') {
            errorMessage = '상세주소를 입력해주세요.';
        } else if (spot === '') {
            errorMessage = '매장명을 입력해주세요.';
        } else if (priv === false) {
            errorMessage = '개인정보 활용에 동의해주세요.';
        }

        if (errorMessage !== '') {
            $('.error').text(errorMessage).show();
        } else {
            $('.error').hide();
        }
    });
});