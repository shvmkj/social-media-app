$('.navbar-brand').click((event)=>{
    let componentUrl = `/components/${$(event.target).attr('data-component')}.html`
    $('#content').load(componentUrl)
})
let navlinks = $('.navbar .nav-link')
navlinks.click((event)=>{
    let componentUrl = `/components/${$(event.target).attr('data-component')}.html`
    $('#content').load(componentUrl)
})