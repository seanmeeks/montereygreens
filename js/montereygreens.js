document.addEventListener("DOMContentLoaded", () => {
  let state = 'before';

  let montereyPine = document.querySelector('.montereypine');
  let showText = (e)=> {
    console.log(e);
    let beachStrawberry = document.querySelector(".beachstrawberry");
    let coyoteBrush = document.querySelector(".coyotebrush");
    let mpTitle = document.querySelector(".mptitle");
    let mpText = document.querySelector(".mpfacts");
    if (state === 'before') {

      console.log(mpText);
      mpText.innerHTML = "Can peek to 200ft tall (about 18 stories)! <br> Has a life spine to 80-90 years!";

      //give paragraphs a class
      // use querySelectorAll to get everything in the array

      console.log(mpTitle);
      mpTitle.textContent = "MONTEREY PINE";

      document.querySelector(".pine1").src="img/picture2.jpeg";

      console.log(coyoteBrush);
      coyoteBrush.style.display = 'none';

      console.log(coyoteBrush);
      beachStrawberry.style.display = 'none';
      console.log(beachStrawberry);
      state = 'after';
    } else {
      state = 'before';
      console.log('show the hidden plants');
      document.querySelector(".pine1").src="img/picture1.jpeg";
      beachStrawberry.style.display = 'block';
      coyoteBrush.style.display = 'block';
      mpText.textContent = '';
      mpTitle.textContent = '';
    }


  }

  montereyPine.addEventListener('click',showText);

})
