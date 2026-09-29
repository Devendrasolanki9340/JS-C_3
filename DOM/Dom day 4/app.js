
// const btn  = document.querySelector("button")
// const div = document.querySelector("div")
// const main = document.querySelector("main")
// const body = document.querySelector("body")

// click
// dblclick
// keypress
// mouseover
// keydown
// keydown

// btn.addEventListener("click",(events)=>{
//     console.log("button trigered")
// })

// div.addEventListener("click",(events)=>{
//     console.log("div trigered")
// })

// main.addEventListener("click",(events)=>{
//     console.log("main trigered")
// })

// body.addEventListener("click",(events)=>{
//     console.log("body trigered")
// })




//  form 

const form = document.querySelector("form")
const inp1 =document.querySelector("#name")
const inp2 = document.querySelector("#email")
const users =document.querySelector(".users")
const url =document.querySelector("#url")
const submitBtn = form.querySelector('button')

let editingId = null

let usersData = [
  {
    "id": 1,
    "name": "Aarav Sharma",
    "email": "aarav.sharma@example.com",
    "image": "https://randomuser.me/api/portraits/men/11.jpg",
    "birthDate": "1999-03-15"
  },
  {
    "id": 2,
    "name": "Priya Verma",
    "email": "priya.verma@example.com",
    "image": "https://randomuser.me/api/portraits/women/22.jpg",
    "birthDate": "2001-08-27"
  },
  {
    "id": 3,
    "name": "Rohan Patel",
    "email": "rohan.patel@example.com",
    "image": "https://randomuser.me/api/portraits/men/35.jpg",
    "birthDate": "1998-12-10"
  },
  {
    "id": 4,
    "name": "Sneha Gupta",
    "email": "sneha.gupta@example.com",
    "image": "https://randomuser.me/api/portraits/women/48.jpg",
    "birthDate": "2002-05-19"
  },
  {
    "id": 5,
    "name": "Kabir Singh",
    "email": "kabir.singh@example.com",
    "image": "https://randomuser.me/api/portraits/men/56.jpg",
    "birthDate": "2000-11-02"
  }
]


const ui = ()=>{
  users.innerHTML =""
  usersData.forEach((elem)=>{
  const img = elem.image && elem.image.trim() !== '' ? elem.image : 'https://via.placeholder.com/600x360?text=No+Image'
  users.innerHTML += `<div class="user_card" data-id="${elem.id}">
      <div class="img_box">
        <img src="${img}" alt="${elem.name}">
      </div>
      <div class="text">
        <h3>Name-${elem.name}</h3>
        <p>Email-${elem.email}</p>
        <div class="actions">
          <button class="edit" data-id="${elem.id}">Edit</button>
          <button class="delete" data-id="${elem.id}">Delete</button>
        </div>
      </div>
    </div>`
})
}
ui()


form.addEventListener("submit",(events)=>{
    events.preventDefault()           //form relod nehi hoga
    
    const name = inp1.value.trim();
    const email = inp2.value.trim();
    const image = url.value.trim();

    if (name === "" || email === "") return;

    if (editingId) {
      // update existing
      const idx = usersData.findIndex(u => u.id === editingId)
      if (idx > -1) {
        usersData[idx].name = name
        usersData[idx].email = email
        usersData[idx].image = image || usersData[idx].image
      }
      editingId = null
      submitBtn.textContent = 'submit'
    } else {
      // add new with stable id
      const nextId = usersData.length ? Math.max(...usersData.map(u => u.id)) + 1 : 1
      usersData.push({
        id: nextId,
        name,
        email,
        image,
      })
    }

    ui()

    form.reset()

}
)

// Event delegation for edit/delete
users.addEventListener('click', (e) => {
  const target = e.target
  const id = target.dataset.id ? Number(target.dataset.id) : null
  if (!id) return

  if (target.classList.contains('delete')) {
    usersData = usersData.filter(u => u.id !== id)
    ui()
    return
  }

  if (target.classList.contains('edit')) {
    const user = usersData.find(u => u.id === id)
    if (!user) return
    inp1.value = user.name
    inp2.value = user.email
    url.value = user.image || ''
    editingId = id
    submitBtn.textContent = 'Update'
  }
})