let field = document.getElementById("field");
let ul = document.querySelector("ul");
let p = document.querySelector("p");
let tranp = [];
let cardSet = 4;
let number = cardSet * 13;
let get = 0;
let opens = [];
let count = 0;

console.log(cardSet);
console.log(number);


for (let i = 1; i <= number; i++) {
    let card = ["https://chicodeza.com/wordpress/wp-content/uploads/torannpu-illust" + i + ".png", i];
    tranp.push(card);
    if (tranp[i - 1][1] >= 13) {
        tranp[i - 1][1] = tranp[i - 1][1] % 13;
    }
    if (tranp[i - 1][1] == 0) {
        tranp[i - 1][1] = 13;
    }
}

console.log(tranp);

tranp = tranp.map(function(a) { return { weight: Math.random(), value: a } })
    .sort(function(a, b) { return a.weight - b.weight })
    .map(function(a) { return a.value });


tranp.forEach((value, index) => {
    ul.innerHTML += '<li id="' + tranp[index][1] + '" class=""><img src="' + tranp[index][0] + '"></li>';
});

let li = document.querySelectorAll('ul li');

document.addEventListener('DOMContentLoaded', function() {
    for (let i = 0; i < li.length; i++) {
        li[i].addEventListener('click', function() {
            count++;
            p.innerHTML = count + "回カードをめくりました。";
            this.classList.add("open");
            opens.push(this.id);
            if (get == this.id) {
                pea();
                get = 0;
            }
            get = this.id;
            if (opens.length > 2) {
                back();
                opens = [];
                get = 0;
            } else if (opens.length == 2) {
                get = 0;
                count--;
            }
            console.log(opens);
        }, false);
    }
}, false);

function pea() {
    for (let i = 0; i < li.length; i++) {
        if (li[i].className == "open") {
            li[i].classList.add("pea");
        }
    }
    let peas = document.querySelectorAll('.pea');
    if (peas.length == number) {
        p.innerHTML = "おめでとう！" + count + "回で全て揃いました。";
    }
}

function back() {
    for (let i = 0; i < li.length; i++) {
        if (li[i].className == "open") {
            li[i].classList.remove("open");
        }
    }

}

function Allpea() {
    for (let i = 0; i < li.length; i++) {
        li[i].classList.toggle("dev");
    }
}