// select necessary element

const getDob = document.querySelector(".get-dob");
const dobInput = document.querySelector(".dob-input");

const yearEl = document.querySelector(".years");
const monthEl = document.querySelector(".months");
const dayEl = document.querySelector(".days");

getDob.addEventListener("submit", (e) => {
  e.preventDefault();

  //   user dob
  const dateOfBirth = new Date(dobInput.value);
  let year1 = dateOfBirth.getFullYear();
  let month1 = dateOfBirth.getMonth() + 1;
  let date1 = dateOfBirth.getDate();

  // current date
  const currentDate = new Date();
  let year2 = currentDate.getFullYear();
  let month2 = currentDate.getMonth() + 1;
  let date2 = currentDate.getDate();

  //   calculate the gae difference
  let year3, month3, date3;

  year3 = year2 - year1;

  if (month2 >= month1) {
    month3 = month2 - month1;
  } else {
    year3--;
    month3 = 12 + month2 - month1;
  }

  //   date
  if (date2 >= date1) {
    date3 = date2 - date1;
  } else {
    month3--;
    date3 = new Date(year1, month1, 0).getDate() + date2 - date1;
  }

  if (month3 < 0) {
    year3--;
    month3 = 11;
  }
  yearEl.textContent = year3;
  monthEl.textContent = month3;
  dayEl.textContent = date3;
  dobInput.value = "";
});
