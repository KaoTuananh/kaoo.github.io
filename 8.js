$(document).ready(function () {
    //������ PopUp ��� �������� ��������    
    PopUpHide();
});
//������� ����������� PopUp
function PopUpShow() {
    $("#popup1").show();
    window.history.pushState("8", null, ' ')
}
//������� ������� PopUp
function PopUpHide() {
    $("#popup1").hide();
}
$(window).on('popstate', function () {
    PopUpHide();
});