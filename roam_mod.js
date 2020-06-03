const DOMMutationListener = _.throttle(modRoam, 200)
const observer = new MutationObserver(DOMMutationListener)
observer.observe(document, { childList: true, subtree: true })

function modRoam() {
    applyAnnotationStyle()
}

function applyAnnotationStyle() {
    const annotationTags = document.querySelectorAll('span.rm-page-ref[data-tag="n"]')
    Array.from(annotationTags).forEach(tag => {
        const parentDiv = tag.parentElement.parentElement.parentElement.parentElement.parentElement
        parentDiv.style.backgroundColor = '#fff4d0'
        parentDiv.style.color = '#555'
    })
}
