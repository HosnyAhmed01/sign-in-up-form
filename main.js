let notactive = document.querySelector(
  ".container .holder div:not(.container .holder .active)"
);
let active = document.querySelector(".container .holder div.active");

let signIn = document.querySelector(".sign-in");

let button = document.querySelector(".btn");

notactive.addEventListener("click", () => {
  notactive.classList.toggle("active");
  active.classList.toggle("active");

  signIn.innerHTML = `
  <div class="email">
  <label for="email">Email</label>
  <input type="email" name="email" id="" />
</div>
<div class="user">
  <label for="user">Username</label>
  <input type="text" name="user" id="" />
</div>
<div class="PASS">
  <label for="PASS">password</label>
  <input type="password" name="PASS" id="" />
</div>
<div class="CPASS">
  <label for="CPASS">confirm password</label>
  <input type="password" name="CPASS" id="" />
</div>

 `;
  button.textContent = "Sign-up";
});
active.addEventListener("click", () => {
  notactive.classList.toggle("active");
  active.classList.toggle("active");
  signIn.innerHTML = `
  <div class="user">
          <label for="user">Username</label>
          <input type="text" name="user" />
        </div>
        <div class="pass">
          <label for="pass">password</label>
          <input type="password" name="pass" />
        </div>
        <div class="rem">
          <span>
            <input type="checkbox" name="rem" id="" />
            <label for="rem">Remper me</label>
          </span>
          <span><a href="#"> Forget password ?</a> </span>
        </div>

 `;
  button.textContent = "Sign-in";
});
