let tabs = document.querySelectorAll(".tabs_simple");
let contents = document.querySelectorAll(".tabs_content");

tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
        contents.forEach((content) => {
            content.classList.remove("active");
        })
        tabs.forEach((el) => {
            el.classList.remove("active");
        });

        tabs[index].classList.add("active");
        contents[index].classList.add("active"); 
    });
});