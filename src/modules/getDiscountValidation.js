const getDiscountValidation = () => {
  const discountForm = document.querySelector("div.order-form");
  const userName = discountForm.querySelector("[name=fio]");
  const userPhone = discountForm.querySelector("[name=phone]");
  const formElements = discountForm.querySelectorAll("input");
  const formData = {};
  let success = true;

  userName.addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(/[^а-яёА-ЯЁa-zA-Z\s]+/, "");
    formData.name = e.target.value;
  });

  userPhone.addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(/[^\+]\D/, "");
    formData.phone = e.target.value;
  });

  const validate = () => {
    const phone = formData.phone;

    // В поле имени разрешить ввод только русских и латинских символов,
    // в поле номера телефона только символа + (плюс) и 16-и цифр максимум.

    if (/[а-яёА-ЯЁa-zA-Z]+/g.test(userName.value)) {
      success = true;
    } else {
      success = false;
    }

    if (/\+\d/g.test(userPhone.value) && phone.length <= 17) {
      success = true;
    } else {
      success = false;
    }

    return success;
  };

  const sendData = (data) => {
    return fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => response.json());
  };

  const submitForm = () => {
    if (validate()) {
      sendData(formData)
        .then((data) => {
          formElements.forEach((input) => {
            input.value = "";
          });
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      alert("не правильно заполнены данные");
    }
  };

  discountForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (validate()) {
      submitForm();
    } else {
      alert(
        "оба поля должны быть заполнены, в телефонный номер должен начинаться с + и содержать не более 16 цифр"
      );
      success = true;
      formElements.forEach((input) => {
        input.value = "";
      });
    }
  });
};

export default getDiscountValidation;
