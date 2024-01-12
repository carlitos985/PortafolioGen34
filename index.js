/*Skills*/
const skillsTech=document.querySelector('.skills-tech')
const skills = [
  {
    path: "Imagenes/bash.svg",
    name: 'Bash'
  },
  {
    path:'Imagenes/vsc.svg',
    name:'VS COde'
  },
  {
  path: 'Img/html.svg',
    name: 'HTML',
  },
  {
    path: 'Img/css.svg',
    name: 'CSS',
  },
  {
    path: 'Img/javascript.svg',
    name: 'JavaScript',
  }
]

let str = ''

for(const skill of skills){
    
    html += `
  <div class='skill'>
    <img src='${skill.path}' alt='${skill.name}'>
    <h3>${skill.name}</h3>
  </div>
`
}
