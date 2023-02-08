const arrows = document.querySelectorAll('.arrow');
const movieLists = document.querySelectorAll('.movie-list');

arrows.forEach((arrow,i)=>{
    const itemNumber = movieLists[i].querySelectorAll("img").length;
    let clickCounter = 0;
    arrow.addEventListener("click",()=>{
        const ratio = parseInt(window.innerWidth / 270);
        clickCounter++;
    if(itemNumber - (4 + clickCounter) + (5 - ratio) >= 0){
        movieLists[i].style.transform = `translateX(${movieLists[i].computedStyleMap().get("transform")[0].x.value 
        -300}px)`;
    } else {
        movieLists[i].style.transform = "translateX(0)";
        clickCounter = 0;
    };
    });
});

const ball = document.querySelector('.toggle-ball');
const items = document.querySelectorAll('.container,.movie-list-title,.navbar-container,.sidebar,.left-menu-icon,.toggle,.arrow,.toggle-icon,.featured-desc,.profiles-pic,.profile-select,.search-container,.inputSearch input,.movie-chosen,#Error,.copyright');

let toggleChosen = JSON.parse(localStorage.getItem("modeSet"));
ball.addEventListener('click', ()=>{
    items.forEach(item=>{
        item.classList.toggle("active");
    });
    ball.classList.toggle("active");
    if (toggleChosen == 0){
        toggleChosen++;
        localStorage.setItem("modeSet", JSON.stringify(toggleChosen));
    } else {
        toggleChosen = 0;
        localStorage.setItem("modeSet", JSON.stringify(toggleChosen));
    };
});

const profilesPic = document.querySelectorAll('.profile-select')
const profilePicSelected = document.getElementById('profile-picture')
const profileTextSelected = document.getElementById('profile-text-selected');
const containerProfile = document.getElementById('container-profile-selected');

const searchContainer = document.getElementById('searchContainer');

let countOne = 0;
profileTextSelected.addEventListener('click',()=>{
    if (countOne == 0){
        containerProfile.style.display = 'flex';
        countOne++;
        document.getElementById('uparrow').style.display = 'block';
        document.getElementById('downarrow').style.display = 'none';
        countTwo = 0;
        searchContainer.style.display = 'none';
    } else if (countOne == 1) {
        containerProfile.style.display = 'none';
        countOne = 0;
        document.getElementById('uparrow').style.display = 'none';
        document.getElementById('downarrow').style.display = 'block';
    }
});

let countTwo = 0;
document.getElementById('searchSomething').addEventListener('click',()=>{
    if (countTwo == 0){
        countTwo++;
        searchContainer.style.display = 'flex';
        window.scrollTo(0,0);
    } else if (countTwo <= 1){
        searchContainer.style.display = 'none';
        countTwo = 0;
    }
})

let countProfile = 0;
profilesPic.forEach((profile, a)=>{
    profile.addEventListener('click',()=>{
        if (a == 0){
            profilePicSelected.src = './img/profile1.jpg'
            countProfile = 1;
        } else if (a == 1){
            profilePicSelected.src = './img/profile2.jpg'
            countProfile = 2;
        } else if (a == 2){
            profilePicSelected.src = './img/profile3.jpg'
            countProfile = 3;
        } else if (a == 3){
            profilePicSelected.src = './img/profile.jpg'
            countProfile = 4;
        } else if (a == 4){
            profilePicSelected.src = './img/profile4.jpg'
            countProfile = 5;
        } else if (a == 5){
            profilePicSelected.src = './img/profile5.jpg'
            countProfile = 6;
        } else if (a == 6){
            profilePicSelected.src = './img/profile6.jpg'
            countProfile = 7;
        } else if (a == 7){
            profilePicSelected.src = './img/profile7.jpg'
            countProfile = 8;
        } else {
            profilePicSelected.src = './img/profile8.jpg'
            countProfile = 9;
        }
        localStorage.setItem("iconChosen", JSON.stringify(countProfile));
    });
});

document.addEventListener("DOMContentLoaded",()=>{
    let iconChosen = JSON.parse(localStorage.getItem("iconChosen"));
    if (iconChosen == 1){
        profilePicSelected.src = './img/profile1.jpg';
    } else if (iconChosen == 2){
        profilePicSelected.src = './img/profile2.jpg';
    } else if (iconChosen == 3){
        profilePicSelected.src = './img/profile3.jpg';
    } else if (iconChosen == 4){
        profilePicSelected.src = './img/profile.jpg';
    } else if (iconChosen == 5){
        profilePicSelected.src = './img/profile4.jpg';
    } else if (iconChosen == 6){
        profilePicSelected.src = './img/profile5.jpg';
    } else if (iconChosen == 7){
        profilePicSelected.src = './img/profile6.jpg';
    } else if (iconChosen == 8){
        profilePicSelected.src = './img/profile7.jpg';
    } else {
        profilePicSelected.src = './img/profile8.jpg';
    }

    let modeSet = JSON.parse(localStorage.getItem("modeSet"));
    if (modeSet == 1){
    items.forEach(item=>{
        item.classList.toggle("active");
    });
    ball.classList.toggle("active");
};
});

const verifyText = document.getElementById('verifyText').addEventListener('click',()=>{
    verifySF();
});

function verifySF(){
    let inputText = document.getElementById("inputId").value;
    let namesSF = ['Her', 'her', 'Star Wars', 'starwars', 'star wars', 'Storm', 'storm', '1917', 'the avengers', 'avengers', 'Avengers', 'The Avengers', 'rampage', 'Rampage', 'Enders Game', 'enders game', 'oblivion', 'Oblivion', 'hobbit', 'Hobbit', 'Due Date', 'due date', 'dark', 'Dark', 'Emoji Movie', 'emoji movie', '1920', 
    'paths of glory', 'Paths of Glory', 'lego', 'lego batman', 'Lego Batman', '1920', '1920 london', '1920 London', 'Aquaman', 'aquaman', 'Dahmer', 'dahmer', 'Spider Man', 'spider man', 're: zero', 'Re: Zero', 're zero', 'Sword of the Stranger', 'sword', 'spy family', 'Spy x Family', 'spy x family', 
    'demon slayer', 'Demon Slayer', 'Kimetsu no Yaiba', 'bunny girl', 'bunny girl senpai', 'Bunny Girl', 'Bunny Girl Senpai', 'quintuples', 'Quintuples', 'komi-san', 'komi san', 'Komi-san', 'komi-san wa', 'Komi-San', 'Komi-San Wa', 'komi']
    if (inputText== namesSF[0] || inputText== namesSF[1]){
        ChoseSF("Lonely writer Theodore develops a special love relationship with his computer's new operating system. Surprisingly, he ends up falling in love with the voice of this show, an intuitive and sensitive authority named Samantha.", "1.jpeg", "Her")
    } else if (inputText== namesSF[2] || inputText== namesSF[3] || inputText== namesSF[4]){
        ChoseSF("The movie revolves around a civil war taking place in a galaxy far far away. The Rebels are fighting against the nefarious Darth Vader and his Imperial forces from the Galactic Empire, a tyrannical army intent on destroying civilizations across the universe. Princess Leia is head of the Rebel's Alliance and manages to steal Imperial blueprints and details about a deadly weapon and space station called the Death Star. When she is captured by Imperial forces, she puts the plans in the memory of a droid, R2-D2, who escapes with another droid, C-3PO to the planet of Tatooine.", "2.jpeg", "Star Wars")
    } else if (inputText== namesSF[5] || inputText== namesSF[6]){
        ChoseSF("Elin's son dies in a drowning accident, but together with her daughter Storm (10) she tries to restart, but when the rumors start that Storm pushed her brother into the water she has to protect her daughter and still find the truth.", "3.jpg", "Storm")
    } else if (inputText== namesSF[7]){
        ChoseSF("On 6 April 1917, aerial reconnaissance has observed that the German army, which has pulled back from a sector of the Western Front in northern France, is not in retreat but has made a strategic withdrawal to the new Hindenburg Line, where they are waiting to overwhelm the British with artillery.", "4.jpg", "1917")
    } else if (inputText== namesSF[8] || inputText== namesSF[9] || inputText== namesSF[10] || inputText== namesSF[11]){
        ChoseSF("S.H.I.E.L.D. director Nick Fury assembles Iron Man, Captain America, Hulk, Thor, Black Widow and Hawkeye to battle Thor's adoptive brother, Loki, who attempts to subjugate humanity by leading an invasion by the extraterrestrial race known as the Chitauri.", "5.jpg", "The Avengers")
    } else if (inputText== namesSF[12] || inputText== namesSF[13]){
        ChoseSF("It follows a primatologist who must team up with George, an albino western lowland gorilla who turns into a raging creature of enormous size and growing into bigger and larger sizes as a result of a rogue experiment, to stop two other mutated animals from destroying Chicago.", "6.jpg", "Rampage")
    } else if (inputText== namesSF[14] || inputText== namesSF[15]){
        ChoseSF("Young Ender Wiggin is recruited by the International Military to lead the fight against the Formics, an insectoid alien race who had previously tried to invade Earth and had inflicted heavy losses on humankind.", "7.jpg", "Ender's Game")
    } else if (inputText== namesSF[16] || inputText== namesSF[17]){
        ChoseSF("In the year 2077, Jack Harper (Tom Cruise) is a drone technician living in a tower high above the clouds with his assigned partner Victoria/Vika (Andrea Riseborough). They are the last people left on Earth after it was destroyed by aliens known as the Scavengers/'Scavs', who wanted Earth's resources.", "8.jpg", "Oblivion")
    }  else if (inputText== namesSF[18] || inputText== namesSF[19]){
        ChoseSF("An Unexpected Journey tells the tale of Bilbo Baggins (Martin Freeman), who is convinced by the wizard Gandalf (Ian McKellen) to accompany thirteen Dwarves, led by Thorin Oakenshield (Richard Armitage), on a quest to reclaim the Lonely Mountain from the dragon Smaug.", "9.jpg", "Hobbit")
    }  else if (inputText== namesSF[20] || inputText== namesSF[21]){
        ChoseSF("Peter Highman. will be a dad for the first time when his wife gives birth in five days. He intends to catch a flight home from Atlanta so he can be there for the delivery, but a chance encounter with aspiring actor Ethan Tremblay (Zach Galifianakis) throws a monkey wrench into his plans. Desperate to reach his wife before their baby is born, Peter's sanity is tested when he must take a road trip cross-country with dog-toting Ethan.", "10.jpg", "Due Date")
    }  else if (inputText== namesSF[22] || inputText== namesSF[23]){
        ChoseSF("A missing child sets four families on a frantic hunt for answers as they unearth a mind-bending mystery that spans three generations.", "11.jpg", "Dark")
    } else if (inputText== namesSF[24] || inputText== namesSF[25]){
        ChoseSF("Based on emojis, the film centers on a multi-expressional emoji Gene (Miller), who exists in a digital city Textopolis for smartphone owned by Alex (Austin), embarking on a journey to become a normal emoji capable of only a single expression, accompanied by his friends, Hi-5 (Corden) and Jailbreak (Faris).", "12.jpg", "Emoji Movie")
    }  else if (inputText== namesSF[26]){
        ChoseSF("A couple moves into a haunted mansion, unaware of the danger that awaits them. However, when the girl gets possessed by a demonic spirit, her partner decides to save her.", "13.jpg", "1920")
    }  else if (inputText== namesSF[27] || inputText== namesSF[28]){
        ChoseSF("Three individual soldiers are picked randomly from the regiment, to face a death trial for cowardice. Meanwhile their commanding officer Col. Dax defends their dignity, and life by battling with a general duo who seek to prove a vital point.", "14.jpg", "Paths of Glory")
    }  else if (inputText== namesSF[29] || inputText== namesSF[30] || inputText== namesSF[31]){
        ChoseSF("Batman continues to protect Gotham City and fight crime. During his latest mission to stop Joker from destroying the city, he hurts his arch-rival's feelings by telling him he is not as important in his life as he thinks he is, leading Joker to seek the ultimate revenge on him.", "15.jpg", "Lego Batman")
    }  else if (inputText== namesSF[32] || inputText== namesSF[33] || inputText== namesSF[34]){
        ChoseSF("After her husband is possessed by an evil spirit, a woman turns to her former lover to perform an exorcism. Shivangi (Meera Chopra) lives in London with her husband Veer Singh (Vishal Karwal). One day, he receives a gift from Rajasthan. From then, strange things happen with Veer and his condition deteriorates.", "16.jpg", "1920 London")
    }  else if (inputText== namesSF[35] || inputText== namesSF[36]){
        ChoseSF("Aquaman, who sets out to lead the underwater kingdom of Atlantis and stop his half-brother, King Orm, from uniting the seven underwater kingdoms to destroy the surface world.", "17.jpg", "Aquaman")
    }  else if (inputText== namesSF[37] || inputText== namesSF[38]){
        ChoseSF("The series examines the gruesome and horrific true crimes of Jeffrey Dahmer and the systemic failures that enabled one of America’s most notorious serial killers to continue his murderous spree in plain sight for over a decade.", "18.jpg", "Dahmer")
    } else if (inputText== namesSF[39] || inputText== namesSF[40]){
        ChoseSF("After being bitten by a genetically-modified spider, a shy teenager gains spider-like abilities that he uses to fight injustice as a masked superhero and face a vengeful enemy.", "19.jpg", "Spider Man")
    } else if (inputText== namesSF[41] || inputText== namesSF[42] || inputText== namesSF[43]){
        ChoseSF("A normal young man that lives his normal life in the modern Japan, Natsuki Subaru. However, one day, he is summoned to another world. Without knowing the person that summoned him, or the reason for being summoned in the new world, he soon befriends a silver-haired-half-elf girl, Emilia.", "20.jpg", "Re: Zero")
    } else if (inputText== namesSF[44] || inputText== namesSF[45]){
        ChoseSF("A swordsman from a strange land is caught in a struggle between morality, righteousness, and devotion as he reluctantly agrees to take a raggedy boy and his dog to a remote, Buddhist temple.", "21.png", "Sword of the Stranger")
    } else if (inputText== namesSF[46] || inputText== namesSF[47] || inputText== namesSF[48]){
        ChoseSF("A spy on an undercover mission gets married and adopts a child as part of his cover. His wife and daughter have secrets of their own, and all three must strive to keep together.", "22.jpg", "Spy x Family")
    } else if (inputText== namesSF[49] || inputText== namesSF[50] || inputText== namesSF[51]){
        ChoseSF("A family is attacked by demons and only two members survive - Tanjiro and his sister Nezuko, who is turning into a demon slowly. Tanjiro sets out to become a demon slayer to avenge his family and cure his sister.", "23.jpe", "Demon Slayer")
    } else if (inputText== namesSF[52] || inputText== namesSF[53] || inputText== namesSF[54] || inputText== namesSF[55]){
        ChoseSF("The bunny girl's real identity is Mai Sakurajima, a teenage celebrity who is currently an inactive high school senior. For some reason, her charming figure does not reflect in the eyes of others. In the course of revealing the mystery behind this phenomenon, Sakuta begins to explore his feelings towards Mai.", "24.jpg", "Bunny Girl Senpai")
    } else if (inputText== namesSF[56] || inputText== namesSF[57]){
        ChoseSF("Follows the daily life of a high school student Futaro Uesugi, who is hired as a private tutor for a group of identical quintuplets: Ichika, Nino, Miku, Yotsuba, and Itsuki Nakano.", "25.jpg", "Quintuples")
    } else if (inputText== namesSF[58] || inputText== namesSF[59] || inputText== namesSF[60] || inputText== namesSF[61] || inputText== namesSF[62] || inputText== namesSF[63] || inputText== namesSF[64]){
        ChoseSF("Hitohito Tadano is an ordinary boy who heads into his first day of high school with a clear plan: to avoid trouble and do his best to blend in with others. Unfortunately, he fails right away when he takes the seat beside the school's madonna—Shouko Komi. His peers now recognize him as someone to eliminate for a chance to sit next to the most beautiful girl in class.", "26.jpg", "Komi-san wa, Comyushou desu")
    } else {
        document.getElementById('Error').style.display = 'flex';
        document.getElementById('Error').innerHTML = "Sorry, i couldn't find any movie, serie or anime with: \"" +inputText+ "\" ";
        document.getElementById('displayMovieChose').style.display = 'none';
    };
};

function ChoseSF(desctitle, img, title){
    document.getElementById('Error').style.display = 'none';
    document.getElementById('displayMovieChose').style.display = 'flex';
    document.getElementById('DescSearch').innerHTML = desctitle;
    document.getElementById('TitleSearch').innerHTML = title;
    document.getElementById('ImgSearch').src = "img/"+ img;
};

document.getElementById('buttonAll').addEventListener('click',()=>{
    window.scrollTo(0, 500);
});
document.getElementById('buttonReleases').addEventListener('click',()=>{
    window.scrollTo(0, 1920);
});
document.getElementById('buttonAnimes').addEventListener('click',()=>{
    window.scrollTo(0, 1920);
});
document.getElementById('buttonPopular').addEventListener('click',()=>{
    window.scrollTo(0, 750);
});

document.getElementById('buttonHome').addEventListener('click',()=>{
    document.location.reload(true);
    window.scrollTo(0, 0);
});

function isTest(){
    alert("Hey, it's no possible watch, is just a website project, only this button don't work")
}