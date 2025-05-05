//declare variables
const cards = ['angelsShare.jpg', 'bacarratRouge.jpg', 'cocoMademoiselle.jpg', 'delinaExclusif.jpg', 'libre.jpg', 'lostCherry.jpg','angelsShare.jpg', 'bacarratRouge.jpg', 'cocoMademoiselle.jpg', 'delinaExclusif.jpg', 'libre.jpg', 'lostCherry.jpg']

function shuffleCards(){
  let newArray = document.querySelectorAll('.front')
  for(let i = 0; i < cards.length; i++){
    let j = Math.floor(Math.random() * 12)
        let temp = cards[i]
        cards[i] = cards[j]
        cards[j] = temp
  }
  for(let c= 0; c < cards.length; c++){
    newArray[c].src = `images/${cards[c]}`
    newArray[c].classList.remove('flip')
    newArray[c].classList.remove('match')
    newArray[c].parentElement.querySelector('.back').classList.remove('hidden')
  }
}

shuffleCards()
document.querySelector('#resetBtn').addEventListener('click', shuffleCards)



document.querySelector('#gameBoard').addEventListener('click', flipCard)

function flipCard(e){
  if(e.target.classList.contains('front')){
  return  
  }
 let back = e.target
 let front = back.parentElement.querySelector('.front')

 let firstCard = document.querySelector('.flip')
 front.classList.add('flip')
 back.classList.add('hidden')
 console.log(front)
 if(firstCard !== null){
  isMatch(firstCard, front )
 }
}

//function isMatch() check if front[1] == front[2]
function isMatch(firstCard, secondCard){
  console.log(firstCard, secondCard)
  if(firstCard.src == secondCard.src){
    firstCard.classList.add('match')
    firstCard.classList.remove('flip')

    secondCard.classList.add('match')
    secondCard.classList.remove('flip')
    endGame()
  }else{
    document.querySelector('#gameBoard').inert = true //inert disabless
    setTimeout(() => {
      firstCard.classList.toggle('flip')
      firstCard.parentElement.querySelector('.back').classList.remove('hidden')
      secondCard.classList.toggle('flip')
      secondCard.parentElement.querySelector('.back').classList.remove('hidden')
      document.querySelector('#gameBoard').inert = false
    },1000)
  }
  console.log(firstCard, secondCard)
}

function endGame(){
  if(document.querySelectorAll('.match').length == 12){
    document.querySelector('#result').innerText = "You win!"
  }

}
