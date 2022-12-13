document.addEventListener("DOMContentLoaded", () => {
  let state = 'before';

  let montereyPine = document.querySelector('.montereypine');
  let showText = (e)=> { //function to show the div

    console.log(e);
    let beachStrawberry = document.querySelector(".beachstrawberry"); //selects the beach strawberry div in the html
    let coyoteBrush = document.querySelector(".coyotebrush");
    let mpTitle = document.querySelector(".mptitle"); //selects the title of the plant
    let mpText = document.querySelector(".mpfacts"); //selects the paragraph text of the plant
    if (state === 'before') { //event occurs if the page is in the original state

      console.log(mpText);
      mpText.innerHTML = "Can peek to 200ft tall (about 18 stories)! <br> Has a life spine to 80-90 years!"; //changes the paragraph text under the plant

      console.log(mpTitle);
      mpTitle.textContent = "MONTEREY PINE"; //changes the title above the plant

      document.querySelector(".pine1").src="img/picture2.jpeg"; //changes the plant image

      coyoteBrush.style.display = 'none'; //removes the div from the display

      console.log(coyoteBrush);
      beachStrawberry.style.display = 'none'; //removes the div from the display
      console.log(beachStrawberry);
      state = 'after'; //page updates after the plant image is clicked
    } else {
      state = 'before'; //page goes back to it's original state
      console.log('show the hidden plants');
      document.querySelector(".pine1").src="img/picture1.jpeg"; //changes the plant image back to the previous
      beachStrawberry.style.display = 'block'; //shows the div on the display
      coyoteBrush.style.display = 'block'; //shows the div on the display
      mpText.textContent = ''; //removes the paragraph text from the display
      mpTitle.textContent = ''; //removes the title text from the display
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
      cbText.innerHTML = "Can live up to 10-15 years! <br> Moderately fire resistant when young and green!";

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

  let mpHover = (e) => {
    let montereyPine = document.querySelector('.montereypine');
    let coyoteBrush = document.querySelector('.cb1');
    let beachStrawberry = document.querySelector('.bs1');
    coyoteBrush.classList.add('endAnimation', 'fadeAnimation');
    beachStrawberry.classList.add('endAnimation', 'fadeAnimation');
  }

  let cbHover = (e) => {
    let montereyPine = document.querySelector('.pine1');
    let coyoteBrush = document.querySelector('.coyotebrush');
    let beachStrawberry = document.querySelector('.bs1');
    montereyPine.classList.add('endAnimation', 'fadeAnimation');
    beachStrawberry.classList.add('endAnimation', 'fadeAnimation');
  }

  let bsHover = (e) => {
    let montereyPine = document.querySelector('.pine1');
    let coyoteBrush = document.querySelector('.cb1');
    let beachStrawberry = document.querySelector('.beachstrawberry');
    coyoteBrush.classList.add('endAnimation', 'fadeAnimation');
    montereyPine.classList.add('endAnimation', 'fadeAnimation');
  }

  let mpOut = (e) => {
    let montereyPine = document.querySelector('.montereypine');
    let coyoteBrush = document.querySelector('.cb1');
    let beachStrawberry = document.querySelector('.bs1');
    coyoteBrush.classList.remove('endAnimation', 'fadeAnimation');
    beachStrawberry.classList.remove('endAnimation', 'fadeAnimation');
  }

  let cbOut = (e) => {
    let montereyPine = document.querySelector('.pine1');
    let coyoteBrush = document.querySelector('.coyotebrush');
    let beachStrawberry = document.querySelector('.bs1');
    montereyPine.classList.remove('endAnimation', 'fadeAnimation');
    beachStrawberry.classList.remove('endAnimation', 'fadeAnimation');
  }

  let bsOut = (e) => {
    let montereyPine = document.querySelector('.pine1');
    let coyoteBrush = document.querySelector('.cb1');
    let beachStrawberry = document.querySelector('.beachstrawberry');
    coyoteBrush.classList.remove('endAnimation', 'fadeAnimation');
    montereyPine.classList.remove('endAnimation', 'fadeAnimation');
  }

  montereyPine.addEventListener('mouseover',mpHover);
  montereyPine.addEventListener('mouseout',mpOut);
  coyoteBrush.addEventListener('mouseover',cbHover);
  coyoteBrush.addEventListener('mouseout',cbOut);
  beachStrawberry.addEventListener('mouseover',bsHover);
  beachStrawberry.addEventListener('mouseout',bsOut);
  beachStrawberry.addEventListener('click',showbsText); //causes the event to occur when the plant divs are clicked
  coyoteBrush.addEventListener('click',showcbText); //causes the event to occur when the plant divs are clicked
  montereyPine.addEventListener('click',showText); //causes the event to occur when the plant divs are clicked

})
