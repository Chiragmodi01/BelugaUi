const btnShowCode = document.querySelectorAll(".btn-show-code");
const codeDisplayWrapper = document.querySelectorAll(".code-display-wrapper");
const markdown = document.querySelectorAll(".markdown-display");

// showing the code snippet
btnShowCode.forEach((btn, idx) => {
    btn.addEventListener("click", function () {
        if(btn.innerText === "Show me the code") {
                markdown[idx].innerHTML = markdown[idx].innerHTML.replace(/</g, '&lt;');
                codeDisplayWrapper[idx].style.display = "flex";
                btn.innerText = "Hide the code";;
        } else {
                markdown[idx].innerHTML = markdown[idx].innerHTML.replace(/>/g, '&gt;'); 
                codeDisplayWrapper[idx].style.display = "none";
                btn.innerText = "Show me the code";
        }
    });
}
)


// auto clicking the `getting-started` list item
const gettingStartedTitle = document.querySelector('#getting-started-title');

function activeGetStarted() {
    gettingStartedTitle.click();
}

// adding active class to clicked item and removing from previous one, if any
const docsiteSectionAside = document.querySelector('.docsite_section_aside');
docsiteSectionAside.addEventListener('click', addActiveState);
function addActiveState(e) {
    const listItemActive = document.querySelector('.list-item-active');
    if(listItemActive !==null) {
        listItemActive.classList.remove("list-item-active");
    }
    e.target.classList.add('list-item-active');

}

// getting href of clicked item and putting it to the src of `iFrame`, which shows comp file
const listItem = document.querySelector('.list-item');
document.addEventListener("click", showComp);
function showComp(e) {
    const output = document.querySelector('.output');
    let anchorSrc = e.target.getAttribute("href"); //Avatar.html
    output.setAttribute('src', anchorSrc);
    if (anchorSrc === null) {
        anchorSrc = "GettingStarted.html";
        output.setAttribute('src', anchorSrc);
    }
}


//open aside arrow menu
const arrowMenu = document.querySelector('.arrow-menu');
const docsideAside = document.querySelector('.docsite_section_aside');
const navAsideWrapper = document.querySelector('.nav-aside-wrapper');

arrowMenu.addEventListener('click', openLeftNav);
function openLeftNav() {
    if(docsideAside.style.display = 'none') {
        console.log('clicked!')
        docsideAside.style.display = 'flex';
        docsideAside.style.width = '100vw';
        navAsideWrapper.style.width = '100vw';
        arrowMenu.innerText = '<';
    } else if(docsideAside.style.display = 'flex') {
        docsideAside.style.display = 'none';
        docsideAside.style.width = '0vw';
        navAsideWrapper.style.width = '0vw';
    }
}