//  const heading = [
//       document.querySelector("#h1"),
//       document.querySelector("#h2"),
//       document.querySelector("#h3"),
//       document.querySelector("#h4"),
//       document.querySelector("#h5"),
//       document.querySelector("#h6"),
//       document.querySelector("#h7"),
//       document.querySelector("#h8"),
//       document.querySelector("#h9"),
//       document.querySelector("#h10")
//  ];
//  const buton1 =document.querySelector("#btnOne")
//  const buton2 =document.querySelector("#btnTwo")

//  let amounindex = 0;

//  function update(){
//      heading.forEach((el, index) => {
//      el.style.display = index === amounindex ? "block" : "none";
    
//    });
//  }

//  buton2.addEventListener("click", () => {
//    if (amounindex < heading.length - 1) {
//      amounindex++;
    
//      update();
//    }


//  });

 
//  buton1.addEventListener("click", () => {
//    if (amounindex > 0) {
//      amounindex--;
//      update();
//    }
//  });

const heading = [
  document.querySelector("#h1"),
  document.querySelector("#h2"),
  document.querySelector("#h3"),
  document.querySelector("#h4"),
  document.querySelector("#h5"),
  document.querySelector("#h6"),
  document.querySelector("#h7"),
  document.querySelector("#h8"),
  document.querySelector("#h9"),
  document.querySelector("#h10")
];

const button1 = document.querySelector("#btnOne");
const button2 = document.querySelector("#btnTwo");

// Paragraph cusub marka la gaaro h10
const extraPara = document.querySelector("#extraPara");


extraPara.style.fontWeight = "bold";
extraPara.style. = "";
extraPara.style.textAlign = "center";


// index
let amounindex = 0;

function update() {
  heading.forEach((el, index) => {
    // dhammaan qari marka hore
    el.style.display = "none";
    el.style.color = ""; // reset color
  });

  // muuji kaliya midka hadda jira
  const current = heading[amounindex];
  current.style.display = "block";

  // haddii index 4 = h5, u dhig red
  if (amounindex === 4) {
    current.style.color = "red";
  }

  // haddii uu yahay index-kii ugu dambeeyey (h10)
  if (amounindex === heading.length - 1) {
    // ha iska jirin in paragraph la galiyo markale
    if (!current.nextElementSibling || current.nextElementSibling !== extraPara) {
      current.insertAdjacentElement("afterend", extraPara);
    }
  } else {
    // haddii uu dhaqaaqo meel kale, ka saar p
    if (extraPara.parentNode) {
      extraPara.remove();
    }
  }
}

button2.addEventListener("click", () => {
  if (amounindex < heading.length - 1) {
    amounindex++;
    update();
  }
});

button1.addEventListener("click", () => {
  if (amounindex > 0) {
    amounindex--;
    update();
  }
});

// Bilow
update();




