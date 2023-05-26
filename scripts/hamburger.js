/**
 * Toggles the sidebar
 * 
 * @function
 * @param {boolean} show - Whether to show or hide the sidebar
 * @returns {void}
 * @example
 * toggleSidebar(true)
 * toggleSidebar(false)
 */
let sidebarIsVisible = false

const toggleSidebar = (show = true) => {
  $('#sidebarNav').toggleClass('sticky', show)
  $('#stickyNavbarOverlay').toggleClass('active', show)
  $('#hamburger').toggleClass('is-active')
  sidebarIsVisible = show
}


$().ready(() => {
  $('#hamburger').click(() => {
    toggleSidebar(!sidebarIsVisible)
  })

  $('#stickyNavbarOverlay').click(() => {
    if(sidebarIsVisible){
      toggleSidebar(false)
    }
  })
})