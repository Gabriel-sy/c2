const input = document.getElementsByClassName('email')[0];

const form = document.getElementsByClassName('form')[0];

const svg = document.getElementsByClassName('svg')[0];

const texterror = document.getElementsByClassName('p3')[0];




form.onsubmit = () => {
  const value = input.value;

  const pattern = /^[a-zA-Z0-9\-_]+(\.[a-zA-Z0-9\-_]+)*@[a-z0-9]+(\-[a-z0-9]+)*(\.[a-z0-9]+(\-[a-z0-9]+)*)*\.[a-z]{2,4}$/

  if (pattern.test(value)) {

    return true

  } else {

    svg.style.display = "block";

    texterror.style.display = "block";

    return false
  }
}




