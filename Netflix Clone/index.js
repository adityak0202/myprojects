// All the FAQs
let faqAnswers = ["<br> Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more on thousands of internet-connected devices.<br><br>You can watch as much as you want, whenever you want, without a single ad all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week! <br><br>", 
"<br>Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee.<br><br> Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts. <br><br>", 
"<br> Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.<br><br>You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.<br><br>",
"<br> Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. <br><br>There are no cancellation fees start or stop your account anytime. <br><br>",
"<br >Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more.<br><br> Watch as much as you want, anytime you want.<br><br>",
"<br> The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space. <br><br>Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don&apos;t want kids to see. <br><br>"]

var whichAnswer
var blank
function clearAll() {
    for( let i = 1 ; i < 7 ; i += 1) {
        blank = document.getElementById("button" + i)
        blank.textContent = ""
    }   
}
function displayAnswer(button) {
    clearAll()
    whichAnswer = document.getElementById(button)
    let n = 6
    button = button.substring(n)
    whichAnswer.innerHTML = faqAnswers[button - 1]
}
// --------------------------------------------------------------------------------------

var listOfEmails = []

var emailList = document.getElementById("email-list")


document.getElementById("email-submit-1").addEventListener("click", function () {
    console.log("Submit button clicked!!")
    listOfEmails.push(document.getElementById("email-textbox-1").value)
    for( let i = 0 ; i <= listOfEmails.length ; i += 1) {
        emailList.innerHTML += listOfEmails[i] + "<br>"
    }
    console.log(listOfEmails)
})

