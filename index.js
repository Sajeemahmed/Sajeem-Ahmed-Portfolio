// -------------------------for about section skills-expericen-eduction--------------------------------
var tablinks = document.getElementsByClassName("tab-links")
var tabcontents = document.getElementsByClassName("tab-contents")
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link")
    }
    for(tabcontent of  tabcontents){
        tabcontent.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

// -----------------------------------for contact-message - link to google sheet-section-------------------------------------------------
const msg = document.getElementById("msg")

  const scriptURL = 'https://script.google.com/macros/s/AKfycbzWesJ1oEfMaSmeazeIkJNHl4lI6JMy0pnChm0LG5KKWdYidTlG3C8U4_HA8wxbzUJYmA/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
 msg.innerHTML = "Message sent successfully"
 setTimeout(function(){
    msg.innerHTML = ""
 },5000)
 form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })
