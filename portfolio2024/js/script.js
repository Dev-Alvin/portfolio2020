window.addEventListener("load", function() {
    setTimeout(function(){
        document.querySelector(".preloader").classList.add("opacity-0");
        document.querySelector(".preloader").style.display = "none";
    },1000);
});

// Portfolio Item Filter
const filterContainer = document.querySelector(".portfolio-filter"),
    filterBtn = filterContainer.children,
    totalFilterBtn = filterBtn.length,
    portfolioItems = document.querySelectorAll(".portfolio-item"),
    totalPortfolioItem = portfolioItems.length;
    // Add & remove active
    for (let i = 0; i < totalFilterBtn; i++) {
        filterBtn[i].addEventListener("click", function() {
            filterContainer.querySelector(".active").classList.remove("active");
            this.classList.add("active");
            // Filter container
            const filterValue = this.getAttribute("data-filter");
            // Compare btn(filterValue) with portfolioItem(data-category)
            for(let k=0; k < totalPortfolioItem; k++) {
                // filterValue === portfolioItem : web-design = web=design = true
                if(filterValue === portfolioItems[k].getAttribute("data-category")) {
                    portfolioItems[k].classList.remove("hide");
                    portfolioItems[k].classList.add("show");
                } else {
                    portfolioItems[k].classList.remove("show");
                    portfolioItems[k].classList.add("hide");
                }
                // Show All Items
                if(filterValue === "all"){
                    portfolioItems[k].classList.remove("hide");
                    portfolioItems[k].classList.add("show");
                }
            }
        })
    }

    // Portfolio Lightbox
    const lightBox = document.querySelector(".lightbox"),
        lightboxImg = lightBox.querySelector(".lightbox-img"),
        lightboxClose = lightBox.querySelector(".lightbox-close"),
        lightboxText = lightBox.querySelector(".caption-text"),
        lightboxCounter = lightBox.querySelector(".caption-counter"),
        liveSite = lightBox.querySelector(".icon-site").href,
        liveCode = lightBox.querySelector(".icon-code").getAttribute("href"),
        infoBox = lightBox.querySelector(".info-box");
        
        let itemIndex = 0;

    // Website Info
    const siteInfo = [
        {
            live: "http://gyopainting.com/",
            code: "#",
            text: "I created this Wordpress site for a local painter using Astra, Elementor, and Form Ninja."
        },
        {
            live: "https://dev-alvin.github.io/Cloud-Station/",
            code: "https://github.com/Dev-Alvin/Cloud-Station",
            text: "This landing form is craeted with bootstrap 4. It's user friendly to signup for email subscription."
        },
        {
            live: "https://dev-alvin.github.io/DIJOUX-Secrets/",
            code: "https://github.com/Dev-Alvin/DIJOUX-Secrets",
            text: "This landing page was created with HTML and CSS Grid. Also, containing vivid animation."
        },
        {
            live: "https://dev-alvin.github.io/bmw2023/",
            code: "https://github.com/Dev-Alvin/bmw2023/blob/main/index.html",
            text: "This email template is created with HTML, CSS, and Outlook conditional. In addition, it contains dark mode that is utilizes on modern email clients."
        },
        {
            live: "https://dev-alvin.github.io/email-national-mountain/",
            code: "https://github.com/Dev-Alvin/email-national-mountain/blob/main/index.html",
            text: "This email template is created with a gif banner. It updates the user with weekly news letter."
        },
        {
            live: "https://dev-alvin.github.io/Email-Deluxe/",
            code: "https://github.com/Dev-Alvin/Email-Deluxe/blob/main/index.html",
            text: "I created this Email with HTML and inline CSS. It's supports Outlook conditional for all versions."
        },
        {
            live: "https://dev-alvin.github.io/jack.github.io/",
            code: "https://github.com/Dev-Alvin/jack.github.io",
            text: "I created this Email with HTML and inline CSS. I design this theme to give the user and easy shopping experience. Also, providing discounts for a better bargain."
        },
        {
            live: "https://dev-alvin.github.io/Home-Hunters/",
            code: "https://github.com/Dev-Alvin/Home-Hunters",
            text: "I used Zurb Foundation to create a responsive email. The email was created to find bargains for getaway vacations."
        },
        {
            live: "https://dev-alvin.github.io/css-email.github.io/",
            code: "https://github.com/Dev-Alvin/css-email.github.io",
            text: "I created this Email with HTML and inline CSS. I design this e-commerce email to find sells, goods, and services."
        },
        {
            live: "https://dev-alvin.github.io/paypal-email/",
            code: "https://github.com/Dev-Alvin/paypal-email/blob/master/index.html",
            text: "I created this Email with HTML and inline CSS. I design a Paypal recipient for transaction."
        }
    ];

        for(let i=0; i < totalPortfolioItem; i++) {
            portfolioItems[i].addEventListener("click", function() {
                itemIndex = i;
                changeItem();
                toggleLightbox();
            });
        }

        function showSite() {
            const item = siteInfo[itemIndex];
            liveSite.href = window.open(item.live);
        }
        function showCode() {
            const item = siteInfo[itemIndex];
            if(liveCode.href = item.code === "#") {
                lightBox.querySelector(".icon-code").classList.add("open");
                console.log(lightBox)
            } else {
                liveCode.href = window.open(item.code)
            }
        }
        function nextItem() {
            if(itemIndex === totalPortfolioItem-1){
                itemIndex = 0;
            } else {
                itemIndex++;
                lightBox.querySelector(".icon-code").classList.remove("open");
            }
            changeItem()
        }
        function prevItem() {
            if(itemIndex === 0){
                itemIndex = totalPortfolioItem-1
                lightBox.querySelector(".icon-code").classList.remove("open");
            } else {
                itemIndex--;
            }
            changeItem()
        }
        function toggleLightbox() {
            lightBox.classList.toggle("open");
        }
        function changeItem() {
            imgSrc = portfolioItems[itemIndex].querySelector(".portfolio-img img").getAttribute("src");
            item = siteInfo[itemIndex];
            lightboxImg.src=imgSrc;
            lightboxText.innerHTML = portfolioItems[itemIndex].querySelector("h4").innerHTML;
            lightboxCounter.innerHTML = (itemIndex +1) + " of " + totalPortfolioItem;
            infoBox.textContent = item.text;

        }

        // Close Lightbox
        lightBox.addEventListener("click", function(event) {
            if(event.target === lightboxClose || event.target === lightBox){
                toggleLightbox()
            }
        });

        // Aside Navbar
        const nav = document.querySelector(".nav"),
        navList = nav.querySelectorAll("li"),
        totalNavList = navList.length,
        allSection = document.querySelectorAll(".section"),
        totalSection = allSection.length;
        
        for(let i=0; i < totalNavList; i++){
            const a = navList[i].querySelector("a");
            a.addEventListener("click", function() {
                // Remove back section
                removeBackSectionClass();
                for (let i=0; i<totalSection; i++) {
                    allSection[i].classList.remove("back-section");
                }

                for(let j=0; j < totalNavList; j++){
                    if(navList[j].querySelector("a").classList.contains("active")){
                    // add back section
                    addBackSectionClass(j);
                    }
                    navList[j].querySelector("a").classList.remove("active");
                }

                this.classList.add("active");
                showSection(this);

                if(window.innerWidth < 1200) {
                    asideSectionTogglerBtn()
                }
            });
        }
        function removeBackSectionClass(){
            for(let i=0; i <totalSection; i++){
                allSection[i].classList.remove("back-section");
            }
        }
        function addBackSectionClass(num){
            allSection[num].classList.add("back-section");
        }
        function showSection(element){
            // remove class active from all section
            for (let i=0; i< totalSection; i++) {
                allSection[i].classList.remove("active");
            }
            const target = element.getAttribute("href").split("#")[1];
            document.querySelector("#"+target).classList.add("active");
        }

        function updateNav(element){
            for(let i=0; i < totalNavList; i++){
                navList[i].querySelector("a").classList.remove("active");
                const target = element.getAttribute("href").split("#")[1];
                if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1]){
                    navList[i].querySelector("a").classList.add("active");
                }
            }
            
        }

        document.querySelector(".hire-me").addEventListener("click", function(){
            const sectionIndex = this.getAttribute("data-section-index");
            // console.log(sectionIndex)
            showSection(this);
            updateNav(this);
            removeBackSectionClass();
            addBackSectionClass(sectionIndex);
        });

        const navTogglerBtn = document.querySelector(".nav-toggler"),
            aside = document.querySelector(".aside");

        navTogglerBtn.addEventListener("click", asideSectionTogglerBtn);

        function asideSectionTogglerBtn() {
            aside.classList.toggle("open");
            navTogglerBtn.classList.toggle("open");
            for (let i=0; i<totalSection; i++) {
                allSection[i].classList.toggle("open");
            }
        }