
//Name:  Ibrahim Kiceci
//Student Number: 300349623


// getting all li elements and storing in the arrayList so i can reach them with for loops;

var myContactList = Array.from(document.querySelectorAll("ul li"));

// all pages must include ten contacts so i need to find how many pages we need;

const pagesNumber = Math.ceil(myContactList.length/10); // using ceil method. For example if page number is 2.1, it is rounded 3;

//adding the buttons with for loop depends on the pages number;

for(var i = 0; i<pagesNumber; i++){

    document.querySelector(".pagination li").innerHTML += "<a href = '#' class = 'numbers'>" +(i+1) + "</a>";


}
/*
function pagination(
    pagesNumber: number,
    curPage: number = 1,
    pageSize: totalPages,
    maxPages: pagesNumber;
) {
    // taking totalpages
    var pagesNumber = Math.ceil(myContactList.length / pageSize);

    // current page can not be out;
    if (curPage < 1) {
        curPage = 1;
    } else if (curPage > totalPages) {
        curPage = totalPages;
    }


    var index_start = (currentPage - 1) * pageSize;
    var end_start = Math.min(startIndex + pageSize - 1, pageNumber - 1);

    */


// adding the addevent listener method for buttons so to reach them first i will use queryselector;

var pageButtons = document.querySelectorAll('.numbers'); // using the buttons class name;

for(var i = 0; i<pageButtons.length; i++){

    pageButtons[i].addEventListener('click', displayContact, false);

}

// getting the contact divs with their class name;

// the condition depends on the length of the contact div so i get them;
var contactDivs = document.getElementsByClassName("contact-item cf");

for(var i = 10; i < contactDivs.length; i++){
    contactDivs[i].style.display = "none" // this provides to hide entifre element,
}

// it is necessary to hide them because it hides every 10 contacts from the other ten contacts


function hideContacts(){

    for (var index = 0; index < contactDivs.length; index++) {
        contactDivs[index].style.display = "none";
        // This provides to pass every page 
    }
}


function displayContact(){

    hideContacts();
    // active page must be subtracted 1 thus it provides to avoid extra page 
    //and the last page should not be empty
    var contacts = ((this.innerText-1) * 10); // this is pageIndex *10


    // if my contacts less than 10
    if(myContactList.length-contacts<10){
        var storedContact = myContactList.length-contacts;
    }else{

        storedContact = 10;
   
    }
        // now, this provides to display properly all pages; thus last page can be only 10 people  
    for(var i = contacts; i<(contacts + storedContact); i++){
        contactDivs[i].style.display = "block";

    }
}







