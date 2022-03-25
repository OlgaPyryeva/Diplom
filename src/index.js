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
});
getDiscountValidation({
  formID: "form2",
});
getDiscountValidation({
  formID: "form3",
});
getDiscountValidation({
  formID: "form4",
});
getDiscountValidation({
  formID: "form5",
});
getDiscountValidation({
  formID: "form6",
});

sertificate();
scrollBtn();
calculatorPrice();
