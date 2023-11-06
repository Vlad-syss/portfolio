document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    const scrollMe = document.querySelector(".simplebar-content-wrapper");
    let animItems = document.querySelectorAll("._anim-items");

    if (animItems.length > 0, 500) {
      scrollMe.addEventListener("scroll", animOnScroll);

      function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {
          const animItem = animItems[index];
          const animItemHeight = animItem.offsetHeight;
          const animItemOffset = offset(animItem);
          const animStart = 4;

          let animItemPoint = scrollMe.clientHeight - animItemHeight / animStart;

          if (animItemHeight > scrollMe.clientHeight) {
            animItemPoint = scrollMe.clientHeight - scrollMe.clientHeight / animStart;
          }

          if (
            scrollMe.scrollTop > animItemOffset.top - animItemPoint &&
            scrollMe.scrollTop < animItemOffset.top + animItemHeight
          ) {
            animItem.classList.add("_active");
          } else {
            if (!animItem.classList.contains("_anim-no-hide")) {
              animItem.classList.remove("_active");
            }
          }
        }
      }

      function offset(el) {
        const rect = el.getBoundingClientRect();
        const scrollLeft = scrollMe.scrollLeft;
        const scrollTop = scrollMe.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
      }

      animOnScroll();
    }
  }, 500)
});
