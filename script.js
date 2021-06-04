let ques = document.querySelectorAll('.que');
let dots = document.querySelectorAll('.dot');
let optionContainer = document.querySelectorAll('.opt-container');
let solutionl = document.querySelectorAll('.p');
var p1 = document.querySelectorAll('.p1');
let dot1 = document.querySelectorAll('.dot1');
const oc1 = document.querySelectorAll('.oc1');
const que1 = document.querySelectorAll('.que1');
const main = document.getElementById('main-page');
const back = document.querySelectorAll('.back');
const category = document.querySelectorAll('.card');
const questions = document.querySelectorAll('.q');
let logo = document.getElementById('small-logo');
let tabs = document.querySelectorAll('.tab');
const aptitude = document.getElementById('aptitude');
const reasoning = document.getElementById('reasoning');
const verbal = document.getElementById('verbal');
const appcards = document.querySelectorAll('.aptitude');
const rescards = document.querySelectorAll('.reasoning');
const vercards = document.querySelectorAll('.verbal');
const bulb = document.querySelectorAll('.bulb');
const solution = document.querySelectorAll('.solution');
let score = document.querySelectorAll('.score');
const ops = document.querySelectorAll('.opt');
let percentage = document.getElementById('score-percentage');
let resultScore = document.getElementById('score');
const submit = document.querySelectorAll('.submit');
const resultPage = document.querySelectorAll('.result');
const button = document.querySelectorAll('.button');
let n = 0;


var transform = i => {
    dots.forEach((dot) => {
        dot.classList.remove('active');
    });
    ques.forEach((que) => {
        que.classList.remove('active');
    });
    optionContainer.forEach((optionContainer) => {
        optionContainer.classList.remove('active');
    });
    solutionl.forEach((p) => {
        p.classList.remove('active');
    })
    bulb.forEach((bulb) => {
        bulb.classList.remove('active');
    })
    dots[i].classList.add('active'); //make that dot active(fill white)
    ques[i].classList.add('active'); //make that question visible
    optionContainer[i].classList.add('active'); //make that option visible
    solutionl[i].classList.add('active');

};
//when click on sliders dots
dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        transform(i);
    });
});






var hide = (index) => {
    questions.forEach((q) => {
        questions[index].classList.remove("hide");
        main.classList.add('hide');
        cat.classList.add('hide');
    });
};
category.forEach((card, i) => {
    card.addEventListener('click', () => {
        hide(i);
    });
});




logo.addEventListener('click', () => {
    document.body.scrollTop = 0;
    //document.documentElement.scrollTop = 0;
})



let tabss = (tabIndex) => {
    tabs.forEach((tab) => {
        tab.classList.remove('active');
    })

    tabs[tabIndex].classList.add('active')
}
tabs.forEach((tab, tabIndex) => {
    tab.addEventListener('click', () => {
        tabss(tabIndex);

    })
})



//category
aptitude.addEventListener('click', () => {
    appcards.forEach((aptitude) => {
        aptitude.classList.add("active");
    });
    vercards.forEach((verbal) => {
        verbal.classList.remove("active");
    });
    rescards.forEach((reasoning) => {
        reasoning.classList.remove("active");
    });
});

reasoning.addEventListener('click', () => {
    rescards.forEach((reasoning) => {
        reasoning.classList.add("active");
    });
    appcards.forEach((aptitude) => {
        aptitude.classList.remove("active");
    });
    vercards.forEach((verbal) => {
        verbal.classList.remove("active");
    });
});

verbal.addEventListener('click', () => {
    vercards.forEach((verbal) => {
        verbal.classList.add("active");
    });
    appcards.forEach((aptitude) => {
        aptitude.classList.remove("active");
    });
    rescards.forEach((reasoning) => {
        reasoning.classList.remove("active");
    });
});




//answers
let answers = [40, 548, 4, '11/120', 37, 720, 11760, 671, 180, 120, 253, 126, 20, 945, 24, 2, 4, 'Rs.612', '15 yrs', '5%', '5%', '30%', 12, 0.20, 960, '173m', 34.64, 45, 'sqrt.3', '346 m', 22, 6526884, 5, 4444, 3600, 'true', 'false',
    'uncertain', 251, 'true', 'fish', 'ounce', 'Scoop', 'Epidemic', 'layer : tier', 'book', 'Yawn', 'Ass: grunt', 'Bat', 'Argentina', 'mitltam', 'patricrin', 'cabelwir', 'lelipleka', 'pimldoken', 'D2E2F2',
    'JKJ', 'GIRXVEP', 'JIGZ', 'VE7', 'They have been', 'in bad mood', 'Were he', 'have been organised', 'because they persisted to suggest', 'gracious', 'too', 'integrated', 'Few', 'than a story told by our teacher',
    'QSRP', 'QPSR', 'QPSR', 'RPQS', 'RPSQ', 'pay a fine', 'is fond of them', 'as he has given up all his wealth', 'full of holidays', 'and tension-free as compared to earlier', 'To suspect foul dealings', 'A man of no substance',
    'To start a movement', 'sometimes', 'to laugh a lot', 'Rough', 'Collapse', 'Warm', 'Greedy', 'Dining Room'
];

//to make bult visible ,option container unclickable,andd ckeck true false
var ans = (op, ind) => {
    bulb.forEach((bulb) => {
        bulb.classList.add('active');
    })
    var x = Math.floor(ind / 4);
    optionContainer[x].classList.add('unclickable');
    let option = op.textContent;
    let y = answers[x];
    if (option.includes(y)) {
        op.classList.add('true');
        n++;
        score.forEach((score) => {
            score.innerHTML = n;
            percentage.innerHTML = (n * 20);
            resultScore.innerHTML = n;
        })
    } else {
        op.classList.add('false');
    }
}
ops.forEach((op, i) => {
    op.addEventListener('click', () => {
        ans(op, i);
    })
})




//When click on bulb >solution page opens
bulb.forEach((bulb) => {
    bulb.addEventListener('click', () => {
        solution.forEach((solution) => {
            solution.classList.add('active');
        })
    })
})



//Submit button> open result page
submit.forEach((submit) => {
    submit.addEventListener('click', () => {
        resultPage.forEach((result) => {
            result.classList.add('active');
        })
    })
})

//when click on GOT IT! make solution page invisible
button.forEach((button) => {
    button.addEventListener('click', () => {
        solution.forEach((solution) => {
            solution.classList.remove('active');
        })
    })
})



//BACK BUTTON
//when clicked on back button
back.forEach((back) => {
    back.addEventListener('click', () => {
        questions.forEach((q) => {
            q.classList.add('hide'); //hide questions page
            main.classList.remove('hide'); //show main page
            cat.classList.remove('hide'); //show category page
        });
        ques.forEach((que) => {
            que.classList.remove('active'); //remove active from all questions
        });
        optionContainer.forEach((optionContainer) => {
            optionContainer.classList.remove('active'); //remove active from all options
        });
        bulb.forEach((bulb) => {
            bulb.classList.remove('active');
        });
        optionContainer.forEach((optionContainer) => {
            optionContainer.classList.remove('unclickable');
        });
        solutionl.forEach((p) => {
            p.classList.remove('active');
        })
        ops.forEach((op) => {
            op.classList.remove('true');
            op.classList.remove('false');
        })
        dots.forEach((dot) => {
            dot.classList.remove('active');
        })
        resultPage.forEach((result) => {
            result.classList.remove('active');

        })
        n = 0;
        resultScore.innerHTML = n;
        percentage.innerHTML = n;
        score.forEach(score => {
            score.innerHTML = n;
        })


        que1.forEach((que1) => {
            que1.classList.add('active'); //add active to all class que1
        });
        oc1.forEach((oc1) => {
            oc1.classList.add('active'); //add active to all class oc1
        });
        p1.forEach((p1) => {
            p1.classList.add('active'); //add active to all class p1
        });
        dot1.forEach((dot1) => {
            dot1.classList.add('active');
        })

    });
});