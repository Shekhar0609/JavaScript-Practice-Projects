const endDate = "31 Mar 2024 11:59 PM";
document.querySelector(".end-date").innerText = endDate;
const inputs = document.getElementsByTagName("input");

function clock() {
  const end = new Date(endDate);
  const start = new Date();
  const diff = (end - start) / 1000;

  if(diff<0) return;

  //converting into days
  inputs[0].value = Math.floor(diff / 3600 / 24);
  //convering into hours
  inputs[1].value = Math.floor(diff / 3600) % 60;
  //convering into minuts
  inputs[2].value = Math.floor(diff / 60) % 60;
  //converting into seconds
  inputs[3].value = Math.floor(diff % 60);
}

setInterval(() => {
  clock();
}, 1000);

/*1day = 24hrs
1hr = 60min
60min = 3600sec
*/
