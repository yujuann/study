window.onload = () => {
  const button = document.querySelector("#btn");

  button.addEventListener("click", calculateBMI);
};

function calculateBMI() {
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector(".result");

  if (height === "" || isNaN(height)) {
    result.innerHTML = "당신의 키를 입력해 주세요!";
  } else if (weight === "" || isNaN(weight)) {
    result.innerHTML = "당신의 몸무게를 입력해 주세요!";
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    if (bmi <= 18.5) {
      result.innerHTML = `과한 저체중: <span>${bmi}</span>`;
    } else if (bmi <= 23) {
      result.innerHTML = `정상: <span>${bmi}</span>`;
    } else if (bmi <= 25) {
      result.innerHTML = `과체중 입니다: <span>${bmi}</span>`;
    } else if (bmi <= 30) {
      result.innerHTML = `경고 비만: <span>${bmi}</span>`;
    } else {
      result.innerHTML = `과한 고도비만 diet: <span>${bmi}</span>`;
    }
  }
}
