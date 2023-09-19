    var yourName = prompt("Hãy cho tôi biết tên của bạn:");

    var checkName = alert(`Xin gửi riêng ${yourName} một chiếc thiệp cưới siu iu ❤️ vì lí do không thể gặp mặt trực tiếp. Rất vui và cảm ơn bạn khi nhận được chiếc thiệp này và đến tham dự với chúng tôi`);


    // scroll
    const scrollElements = document.querySelectorAll(".js-scroll");

    const elementInView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top;

    return (
        elementTop <=
        (window.innerHeight || document.documentElement.clientHeight) / dividend
    );
    };

    const elementOutofView = (el) => {
    const elementTop = el.getBoundingClientRect().top;

    return (
        elementTop > (window.innerHeight || document.documentElement.clientHeight)
    );
    };

    const displayScrollElement = (element) => {
    element.classList.add("scrolled");
    };

    const hideScrollElement = (element) => {
    element.classList.remove("scrolled");
    };

    const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
        if (elementInView(el, 1.25)) {
        displayScrollElement(el);
        } else if (elementOutofView(el)) {
        hideScrollElement(el)
        }
    })
    }

    window.addEventListener("scroll", () => { 
    handleScrollAnimation();
    });
