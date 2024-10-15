document.addEventListener('DOMContentLoaded', function() {
    const sidebarLinks = document.querySelectorAll('.sidebar a');

    sidebarLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            // 부드러운 스크롤
            targetSection.scrollIntoView({ behavior: 'smooth' });

            // 강조 효과 추가 및 제거
            targetSection.classList.add('highlight');
            setTimeout(() => {
                targetSection.classList.remove('highlight');
            }, 2000); // 2초 후 강조 효과 제거
        });
    });
});

// 스크롤 이벤트 리스너 추가
window.addEventListener('scroll', function() {
    // 사이드바 선택
    var sidebar = document.querySelector('.sidebar');

    // 스크롤 위치가 100px 이상인 경우
    if (window.pageYOffset > 100) {
        sidebar.style.top = '10px';
    } else {
        // 스크롤 위치가 100px 미만인 경우
        sidebar.style.top = '20px';
    }
});