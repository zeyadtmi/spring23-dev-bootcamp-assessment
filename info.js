function editInfo() {
    var name = document.getElementById("name");
    var major = document.getElementById("major");
    var year = document.getElementById("year");
    var passion = document.getElementById("passion");
    var location = document.getElementById("location");
  
    name.innerHTML = "<input type='text' id='name-input' value='" + name.innerHTML + "'>";
    major.innerHTML = "<input type='text' id='major-input' value='" + major.innerHTML + "'>";
    year.innerHTML = "<input type='text' id='year-input' value='" + year.innerHTML + "'>";
    passion.innerHTML = "<input type='text' id='passion-input' value='" + passion.innerHTML + "'>
}  