document.addEventListener("DOMContentLoaded", () => {
  let montereyPine = document.querySelector('.montereypine');
  let showText = (e)=> {
    console.log(e);

    let mpText = document.querySelector(".mpfacts");
    console.log(mpText);
    mpText.innerHTML = "Can peek to 200ft tall (about 18 stories)! <br> Has a life spine to 80-90 years!";

    //give paragraphs a class
    // use querySelectorAll to get everything in the array

    let mpTitle = document.querySelector(".mptitle");
    console.log(mpTitle);
    mpTitle.textContent = "MONTEREY PINE";

    document.querySelector(".pine1").src="img/picture2.jpeg";

    let coyoteBrush = document.querySelector(".coyotebrush");
    console.log(coyoteBrush);
    coyoteBrush.style.display = 'none';

    let beachStrawberry = document.querySelector(".beachstrawberry");
    console.log(coyoteBrush);
    beachStrawberry.style.display = 'none';
  }

  montereyPine.addEventListener('click',showText);

  let hideText = (e) => {
    console.log(e);

    let mpText = document.querySelector(".mpfacts");
    console.log(mpText);
    mpText.textContent = 'none';
  }
  mpText.addEventListener('click', hideText);

})
