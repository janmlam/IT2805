// Common tab title for every page
const pages = document.getElementsByClassName('tabTitle');

for (let i=0; i < pages.length; i++) {
    const pageName = String(pages[i].innerText)
    const newTitle = pageName.concat(" | Hårfin")
    pages[i].innerText = newTitle
}