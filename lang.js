const flagsElement = document.getElementById("flags");


const textsToChange= document.querySelectorAll('[data-section]');



const changeLanguage = async (language)=>{
  const requestJson= await fetch(`${language}.json` )
  const texts= await requestJson.json()
  
  
  /* localizar y  modificar textos: */
  for (const textToChange of textsToChange){
    const section = textToChange.dataset.section
    const value= textToChange.dataset.value;

    console.log(section, value);
    textToChange.innerHTML = texts[section][value];
  }
};


flagsElement.addEventListener("click", (e) => {
  changeLanguage(e.target.parentElement.dataset.language);
});



