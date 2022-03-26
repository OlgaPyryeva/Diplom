import requestCall from "./modules/requestСall";
import swiper from "./modules/customersBenefits";
import ourServices from "./modules/ourServices";
import measurerCall from "./modules/measurerCall";
import timer from "./modules/timer";
import getDiscountValidation from "./modules/getDiscountValidation";
import sertificate from "./modules/sertificate";
import scrollBtn from "./modules/scrollBtn";
import calculatorPrice from "./modules/calculatorPrice";

requestCall();
swiper();
ourServices();
measurerCall();
timer("1 april 2022");
getDiscountValidation({
  formID: "form1",
  someElem: [
    {
      type: "block",
      id: "calc-total",
    },
  ],
});
getDiscountValidation({
  formID: "form2",
  someElem: [
    {
      type: "block",
      id: "calc-total",
    },
  ],
});
getDiscountValidation({
  formID: "form3",
  someElem: [
    {
      type: "block",
      id: "calc-total",
    },
  ],
});
getDiscountValidation({
  formID: "form4",
  someElem: [
    {
      type: "block",
      id: "calc-total",
    },
  ],
});
getDiscountValidation({
  formID: "form5",
  someElem: [
    {
      type: "block",
      id: "calc-total",
    },
  ],
});
getDiscountValidation({
  formID: "form6",
  someElem: [
    {
      type: "block",
      id: "calc-total",
    },
  ],
});
getDiscountValidation({
  formID: "form7",
  someElem: [
    {
      type: "block",
      id: "calc-total",
    },
  ],
});

sertificate();
scrollBtn();
calculatorPrice();
