const getDiscountValidation = ({ formID, someElem = [] }) => {
  const form = document.getElementById(formID);
  const formElements = document.querySelectorAll("input");
  const userPhone = form.querySelector("input[name=phone]");
  const userName = form.querySelector("input[name=fio]");
  const total = document.getElementById("calc-total");

  userPhone.addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(/[^\+\d]+/, "");
  });

  userName.addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(/[^a-zA-Zа-я-А-Я\s]+/, "");
  });

  const validate = () => {
    let successName = true;
    let successPhone = true;
    let success = true;

    // В поле имени разрешить ввод только русских и латинских символов,
    // в поле номера телефона только символа + (плюс) и 16-и цифр максимум.

    if (
      /[а-яёА-ЯЁa-zA-Z\s]+/g.test(userName.value) &&
      userName.value != "" &&
      userName.value.length >= 2
    ) {
      successName = true;
    } else {
      successName = false;
    }

    if (
      /[\d\+]+/g.test(userPhone.value) &&
      userPhone.value.length <= 17 &&
      userPhone.value.length >= 6
    ) {
      successPhone = true;
    } else {
      successPhone = false;
    }
    if (successPhone && successName) {
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
    const formData = new FormData(form);
    const formBody = {};

    formData.forEach((val, key) => {
      formBody[key] = val;
    });

    if (total) {
      someElem.forEach((elem) => {
        const element = document.getElementById(elem.id);

        if (elem.type === "block") {
          formBody[elem.id] = element.textContent;
        } else if (elem.type === "input") {
          formBody[elem.id] = element.value;
        }
      });
    }

    if (validate()) {
      sendData(formBody)
        .then((data) => {
          formElements.forEach((input) => {
            input.value = "";
          });
        })
        .catch((error) => {
          console.log("ошибка");
        });
    } else {
      alert("не правильно заполнены данные");
    }
  };

  try {
    if (!form) {
      throw new Error("верните форму на место");
    }

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (validate()) {
        submitForm();
        alert("данные успешно отправлены");
      } else {
        console.log("форма не отправлена");
        alert(
          "заполните все поля, в номере телефона можно вводить + и от 6 до 16 цифр, имя должно быть минимум 2 символа"
        );
        formElements.forEach((input) => {
          input.value = "";
        });
      }
    });
  } catch (error) {
    console.log(error.message);
  }
};
export default getDiscountValidation;
