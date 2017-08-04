// The Form Data
let formData = [
  // For demonstration purposes,
  // the first form element has been added to the HTML file as a comment
  // compare the input in the HTML file with the contents of this first object
  {
    "type": "text",
    "label": "First Name",
    "id": "user-first-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "text",
    "label": "Last Name",
    "id": "user-last-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "email",
    "label": "Email Address",
    "id": "user-email",
    "icon": "fa-envelope",
    "options": []
  },
  {
    "type": "text",
    "label": "Current Website URL",
    "id": "user-website",
    "icon": "fa-globe",
    "options": []
  },
  {
    "type": "select",
    "label": "Select Language",
    "id": "user-language",
    "icon": "",
    "options": [
      {
        "label": "English",
        "value": "EN"
      },
      {
        "label": "French",
        "value": "FR"
      },
      {
        "label": "Spanish",
        "value": "SP"
      },
      {
        "label": "Chinese",
        "value": "CH"
      },
      {
        "label": "Japanese",
        "value": "JP"
      }
    ]
  },
  {
    "type": "textarea",
    "label": "Your Comment",
    "id": "user-comment",
    "icon": "fa-comments",
    "options": []
  },
  {
    "type": "tel",
    "label": "Mobile Number",
    "id": "user-mobile",
    "icon": "fa-mobile-phone",
    "options": []
  },
  {
    "type": "tel",
    "label": "Home Number",
    "id": "user-phone",
    "icon": "fa-phone",
    "options": []
  }
];



// HINTS:
// As you can see, we access the first element in the array
// with [0] and then grab the property "label" using the "." operator
( function(){
  // Select the first element from the array
  let first = formData[ 0 ];
  // Log the first object
  console.log( first );
  // Log the string "First Name"
  console.log( first.label );
} )();


// -------- Your Code Goes Below this Line --------




// let form = document.createElement("form");
// let inputFirstName = document.createElement("input");
//
// inputFirstName.setAttribute('type', 'text');
// inputFirstName.setAttribute('name', 'user-first-name');
// inputFirstName.setAttribute('placeholder', 'First Name')
//
//
// fields.append(inputFirstName);
//
//
// document.getElementById('id')



// let inputFirstName = document.createElement("input");
// let inputLastName = document.createElement("input");
// let inputEmailAddress = document.createElement("email");
// let inputWebsite = document.createElement("input");
// let inputSelectLanguage = document.createElement("select");
// let inputComments = document.createElement("textarea");
// let inputMobileNumber = document.createElement("tel");
// let inputHomeNumber = document.createElement("tel");


  // let formList = document.querySelector("#fields");



for (var i = 0; i < formData.length; i++) {

  let input = document.createElement("input");
  let textArea = document.createElement("textArea");
  let select = document.createElement("select");


  if (formData[i].type === "text" || formData[i].type === "email" || formData[i].type === "tel"){

  input.setAttribute('type', formData[i].type);
  input.setAttribute('id', formData[i].id);
  input.setAttribute('placeholder', formData[i].label);

  fields.append(input);


  // document.getElementById('id');
}

  else if(formData[i].type === "textarea"){

    textArea.setAttribute('type', formData[i].type);
    textArea.setAttribute('id', formData[i].id);
    textArea.setAttribute('placeholder', formData[i].label);

      fields.append(textArea);


    // document.getElementById('id');

    // input.setAttribute('rows', '30');
    //
    // fields.append("textArea");
    //
    // document.getElementById('id');
  }
  else if(formData[i].type === "select"){



    select.setAttribute('type', formData[i].type);
    select.setAttribute('id', formData[i].id);
    select.setAttribute('placeholder', formData[i].label);

    // let spanish = document.createTextNode("Spanish");
    fields.append(select);

    // select.appendChild(option);
    for (var j = 0; j < formData[i].options.length; j++) {

      let option = document.createElement("option");
      option.setAttribute('label', formData[i].options[j].label)
      select.append(option);

    }

    // select.innerHTML=`
    // <option>English</option>
    // <option>Spanish</option>
    // <option>French</option>
    // <option>Japanese</option>
    // <option>Chinese</option>
    // `;

    // option.appendChild(spanish);



    // option.setAttribute('label', 'spanish');


    // let spanish = document.createTextNode("English");
    // let spanish = document.createTextNode("Spanish");
    // let spanish = document.createTextNode("French");
    // let spanish = document.createTextNode("Chinese");
    // let spanish = document.createTextNode("Japanese");
    //
    // fields.append(select);
    //
    // select.appendChild(option);
    // option.appendChild(spanish);
    // option.appendChild(spanish);
    // option.appendChild(spanish);
    // option.appendChild(spanish);



    // document.getElementById('id');
  }
}




//
// function(){
//   let second = formData[ 1 ];
//   let input =  document.createElement( "input");
//
//
//   input.setAttribute("type", second.type, "id", second.id);
//
//   // input.appendChild(input);
//
//   console.log(second.label);
//
// };
//
//
//
//
// let formInput = document.querySelector("#fields")
//
//
// for( let i = 0; i < formData.length; i++){
//
//
// }
