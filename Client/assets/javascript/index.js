//Services
const SEARCH_SERVICE = `http://localhost:8093/query`;
const SUGGESTION_SERVICE = `http://localhost:8093/suggest`;
//DOM Elements
const SEARCH_INPUT = document.getElementById("SearchInput");
const SEARCH_BUTTON = document.getElementById("buttonSearch");
const CONTAINER_RESULTS = document.getElementById("results-container");
const CONTAINER_FACETS = document.getElementById("facets-container");
const CONATINER_SUGGESTION = document.getElementById("suggestion-container");
const CLEAN_FILTERS_BUTTON = document.getElementById("CleanFilter");
const SUGGESTION_TAG = document.getElementById("correction");

//Lists
var suggestions = [];
var docs = [];
var facets = {};
var correction = {};

//Functions
function autocomplete(inp, arr) {
  if (suggestions.length == 0) {
    return;
  }
  var currentFocus;
  inp.addEventListener("input", function (e) {
    var a,
      b,
      i,
      val = this.value;
    closeAllLists();
    if (!val) {
      return false;
    }
    currentFocus = -1;
    a = document.createElement("DIV");
    a.setAttribute("id", this.id + "autocomplete-list");
    a.setAttribute("class", "autocomplete-items");
    this.parentNode.appendChild(a);
    for (i = 0; i < suggestions.length; i++) {
      if (
        suggestions[i].substr(0, val.length).toUpperCase() == val.toUpperCase()
      ) {
        b = document.createElement("DIV");
        b.innerHTML =
          "<strong>" + suggestions[i].substr(0, val.length) + "</strong>";
        b.innerHTML += suggestions[i].substr(val.length);
        b.innerHTML += "<input type='hidden' value='" + suggestions[i] + "'>";
        b.addEventListener("click", function (e) {
          inp.value = this.getElementsByTagName("input")[0].value;
          closeAllLists();
        });
        a.appendChild(b);
      }
    }
  });
  function closeAllLists(elmnt) {
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  document.addEventListener("click", function (e) {
    closeAllLists(e.target);
  });
}

const generateResults = (docs, container) => {
  if (docs.length == 0) {
    container.innerHTML = "No se encontraron resultados";
    return;
  }

  let TemplateHTML = ``;
  docs.forEach((element) => {
    TemplateHTML += `<div>
        <h2>
          <a href="${element["url"]}"> ${element["title"]}</a>
        </h2>
        <p>${element["_snippet_"]}}...</p>
      </div>`;
  });
  container.innerHTML = TemplateHTML;
};

const generateFacets = (facets, container) => {
  if (facets["count"] == 0) {
    return;
  }
  let TemplateHTML = ``;
  facets.forEach((element) => {
    TemplateHTML += `<button id="${element["val"]}">${element["val"]}(${element["count"]})</button>`;
  });
  container.innerHTML = TemplateHTML;
};

const getResponse = async (direction) => {
  try {
    let Search = SEARCH_INPUT.value;
    const response = await fetch(direction + `?q=${Search}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    let data = await response.json();
    console.log(data);
    if (data!=0) {
      if (data["results"]['0']['responseHeader']['params']['json'].includes("~")) {
        alert('Fuzzy Search aplicado');
      }
      docs = data["results"]["0"]["response"]["docs"];
      facets = data["results"]["0"]["facets"]["url"]["buckets"];
      correction = [];
      if ('spellcheck' in data["results"]["0"]) {
      correction = data["results"]["0"]["spellcheck"]["suggestions"];
      }
      generateResults(docs, CONTAINER_RESULTS);
      generateFacets(facets, CONTAINER_FACETS);
      getCorrection(correction, CONATINER_SUGGESTION, SUGGESTION_TAG);
    }else{
      CONTAINER_RESULTS.innerHTML = "No se encontraron resultados";
    }
    console.log(data)
    
  } catch (error) {
    CONTAINER_RESULTS.innerHTML = "ocurrio un error indesperado";
    console.log(error)
  }
};

const getTitlesResponse = async (direction) => {
  try {
    let Search = SEARCH_INPUT.value;
    const response = await fetch(direction + `?q=${Search}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    
    let data = await response.json();
    console.log(data);
    keyWord = SEARCH_INPUT.value;
    if (keyWord == "") {
      return;
    }
    suggestionArray = data['results']['suggest']['mySuggester'][keyWord]['suggestions'];
    suggestions = getTitleByJSON(suggestionArray);
    autocomplete(SEARCH_INPUT, suggestions);
  } catch (error) {
    console.log(error);
  }
};

const getCorrection = (arrayConter, container, tag) => {
  if (arrayConter == 0) {
    return;
  }
  suggestion = arrayConter[1]["suggestion"][0];
  container.style.display = "block";
  tag.innerHTML = `${suggestion}`;
};

const CleanFilter = () => {
  if (docs.length == 0) {
    return;
  }
  generateResults(docs, CONTAINER_RESULTS);
};

const getTitle = (arrayTitles) => {
  let titles = [];
  if (arrayTitles == 0) {
    return titles;
  }
  arrayTitles.forEach((element) => {
    titles.push(element["title"][0]);
  });
  return titles;
};

const getTitleByJSON = (json) => {
  console.log(json)
  let titles = [];
  if (json == 0) {
    return titles;
  }
  json.forEach((element) => {
    titles.push(element["term"]);
  });
  return titles;
};

//Events
CONTAINER_FACETS.addEventListener("click", (e) => {
  id = e.target.getAttribute("id");
  const result = docs.filter((doc) => doc["base_url"][0] === id);
  generateResults(result, CONTAINER_RESULTS);
});

SUGGESTION_TAG.addEventListener("click", () => {
  SEARCH_INPUT.value = SUGGESTION_TAG.textContent;
  CONATINER_SUGGESTION.style.display = "none";
});

SEARCH_BUTTON.addEventListener("click", () => {
  CONATINER_SUGGESTION.style.display = "None";
  getResponse(SEARCH_SERVICE);
});

CLEAN_FILTERS_BUTTON.addEventListener("click", () => {
  CleanFilter();
});

SEARCH_INPUT.addEventListener("input", () => {
  getTitlesResponse(SUGGESTION_SERVICE)
});

//Functions excecution
autocomplete(SEARCH_INPUT, suggestions);
