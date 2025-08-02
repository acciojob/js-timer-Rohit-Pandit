// write js code here if required
const dt = document.getElementById("timer");
const date=new Date();
const day=String(date.getDate()).padStart(2, '0');
const month = String(date.getMonth()+1).padStart(2, '0');
const year = String(date.getFullYear());
const hr = String(date.getHours()).padStart(2, '0');
const min = String(date.getMinutes()).padStart(2, '0');
const sec =String(date.getSeconds()).padStart(2, '0');
dt.textContent = `${day}/${month}/${year}, ${hr}:${min}:${sec}`;