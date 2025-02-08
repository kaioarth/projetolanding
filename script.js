function toggleMode() {
  const html = document.documentElement
  // if(html.classList.contains('light')) {
  //  html.classList.remove('light')
  //  } else {
  //   html.classList.add('light')
  //  }

  html.classList.toggle("light")

  //pegar a tag da img
  const img = document.querySelector("#profile img")

  //substituir a img
  if (html.classList.contains("light")) {
    //se tiver light mode, pegar a light mode
    img.setAttribute("src", "assets/assets/avatar-light.png")
  } else {
    //se tiver sem light mode, manter padrão
    img.setAttribute("src", "./assets/assets/avatar.png")
  }
}