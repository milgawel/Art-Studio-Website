console.log("ja to naprawie");
const form = document.getElementById("form");

const sendEmail = e => {
  e.preventDefault();
  name = document.getElementById("formName").value;
  email = document.getElementById("formEmail").value;
  body = document.getElementById("formBody").value;

  if (
    name.length === 0 ||
    name == null ||
    email.length === 0 ||
    body.length < 5 ||
    !email.includes("@") ||
    !email.includes(".")
  ) {
    alert("popraw dane formularza i spróbuj jeszcze raz");
  } else {
    Email.send({
      Host: "smtp.gmail.com",
      Username: `akwartonex@gmail.com`,
      Password: "Akwartone1!",
      To: "akwartonex@gmail.com",
      From: "akwartonex@gmail.com",
      Subject: `strona AKWARTONE email od ${name} - ${email}`,
      Body: `${body}`
    }).then(message => alert("mail sent successfully"));
    form.reset();
  }
};

form.addEventListener("submit", sendEmail);
