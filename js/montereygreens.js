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

  let coyoteBrush = document.querySelector(".coyotebrush");
  let showcbText = (e)=> {
    console.log(e);
    let montereyPine = document.querySelector('.montereypine');
    let beachStrawberry = document.querySelector(".beachstrawberry");
    let cbTitle = document.querySelector(".cbtitle");
    let cbText = document.querySelector(".cbfacts");
    if (state === 'before') {

      console.log(cbText);
      cbText.innerHTML = "Live up to 10-15 years! <br> Moderately fire resistant when young and green!";

      console.log(cbTitle);
      cbTitle.textContent = "COYOTE BRUSH";

      document.querySelector(".cb1").src="img/picture4.jpeg";

      montereyPine.style.display = 'none';
      console.log(montereyPine);
      beachStrawberry.style.display = 'none';
      console.log(beachStrawberry);
      state = 'after';
    } else {
      state = 'before';
      console.log('show the hidden plants');
      document.querySelector(".cb1").src="img/picture3.jpeg";
      beachStrawberry.style.display = 'block';
      montereyPine.style.display = 'block';
      cbText.textContent = '';
      cbTitle.textContent = '';
    }
  }

  let beachStrawberry = document.querySelector(".beachstrawberry");
  let showbsText = (e)=> {
    console.log(e);
    let montereyPine = document.querySelector('.montereypine');
    let coyoteBrush = document.querySelector(".coyotebrush");
    let bsTitle = document.querySelector(".bstitle");
    let bsText = document.querySelector(".bsfacts");
    if (state === 'before') {

      console.log(bsText);
      bsText.innerHTML = "Produced in spring and early summer! <br> Fruit is edible, red on the surface and white on the inside!";

      console.log(bsTitle);
      bsTitle.textContent = "BEACH STRAWBERRY";

      document.querySelector(".bs1").src="img/picture6.jpeg";

      montereyPine.style.display = 'none';
      console.log(montereyPine);
      coyoteBrush.style.display = 'none';
      console.log(coyoteBrush);
      state = 'after';
    } else {
      state = 'before';
      console.log('show the hidden plants');
      document.querySelector(".bs1").src="img/picture5.jpeg";
      coyoteBrush.style.display = 'block';
      montereyPine.style.display = 'block';
      bsText.textContent = '';
      bsTitle.textContent = '';
    }
  }

  beachStrawberry.addEventListener('click',showbsText);
  coyoteBrush.addEventListener('click',showcbText);
  montereyPine.addEventListener('click',showText);

})
