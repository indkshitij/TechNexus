const username = document.getElementById("username");
const email = document.getElementById("email");
const phoneNumber = document.getElementById("phoneNumber");
const subject = document.getElementById("subject");
const message = document.getElementById("message");

function sendmail() {
  const usernameInput = username.value;
  const emailInput = email.value;
  const phoneNumberInput = phoneNumber.value;
  const subjectInput = subject.value;
  const messageInput = message.value;

  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "07risingphoenix@gmail.com",
    Password: "093B87848AFF3FCC6D29A516CBC5D9ED3514",
    To : "07risingphoenix@gmail.com",
    From: usernameInput,
    Subject: emailInput,
    Body: "Mobile Number: " + phoneNumberInput + "\n\n" + messageInput
  }).then(
    function(message) {
      Swal.fire({
        title: "Thanks For Contacting Us",
        text: "We will get back you soon !!",
        icon: "success"
      })
    }
  );

}
