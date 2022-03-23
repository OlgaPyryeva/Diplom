const getDiscountValidation = ({ formID }) => {
  const form = document.getElementById(formID);
  const formElements = document.querySelectorAll("input");

  const validate = () => {
    let success = true;
    const userPhone = form.querySelectorAll("input[name=phone]");
    const userName = form.querySelectorAll("input[name=fio]");

    // В поле имени разрешить ввод только русских и латинских символов,
    // в поле номера телефона только символа + (плюс) и 16-и цифр максимум.
    userPhone.forEach((phone) => {
      phone.addEventListener("input", (e) => {
        e.target.value = e.target.value.replace(/\D/, "");
      });
    });

    userName.forEach((name) => {
      name.addEventListener("input", (e) => {
        e.target.value = e.target.value.replace(/^[a-zA-Zа-я-А-Я]+\s/, "");
      });
    });

    if (/[а-яёА-ЯЁa-zA-Z\s]+/g.test(userName.value)) {
      success = true;
    } else {
      success = false;
    }

    if (/[\d\+]/g.test(userPhone.value) && userPhone.value.length <= 17) {
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
      } else {
        console.log("форма не отправлена");
        alert(
          "заполните все поля, в номере телефона можно вводить + и не более 16 цифр"
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
