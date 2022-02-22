class SCROLL {
    constructor(obj) {
        if (typeof obj.el == 'string') {
            this.el = document.querySelector(obj.el)
        } else if (obj.el instanceof HTMLElement) {
            this.el = obj.el
        }

        window.addEventListener('scroll', () => this.scroll())
        window.addEventListener('resize', () => this.scroll())
    }
    scroll() {
        this.el.style.position = 'fixed'
        if (window.innerHeight - this.el.offsetHeight - window.scrollY >= 0) {
            this.el.style.top = (window.innerHeight - this.el.offsetHeight - window.scrollY) + 'px'
        } else {
            this.el.style.top = 0
        }
    }
}
const myScroll = new SCROLL({
    el: '.header__nav',
})


class TEXT {
    constructor(obj) {
        if (typeof obj.el == 'string') {
            this.el = document.querySelector(obj.el)
        } else if (obj.el instanceof HTMLElement) {
            this.el = obj.el
        }
        this.text = this.el.innerHTML
        this.el.innerHTML = ''
        this.str()
    }
    str(i = 0) {
        this.el.innerHTML += this.text[i];
        i++;
        if (i < this.text.length) {
            setTimeout(() => {
                this.str(i)
            }, 80);
        }
    }
}
const text = new TEXT({
    el: '.header__content h1',
})
const text2 = new TEXT({
    el: '.header__content p',
})
const text3 = new TEXT({
    el: '.info__scroll-desc',
})

const text5 = new TEXT({
    el: '.footer__info span',
})




class ESCAPE {
    constructor(obj) {
        this.el = document.querySelector(obj.title);
        // console.log(this.el);
        this.mouse(this.el)
    }
    random(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    mouse(obj) {
        obj.addEventListener('mouseover', () => {
            obj.style =
                `position:absolute; 
                left:${this.random(2, 70)}%;
                bottom:${this.random(1, 50)}%;
                transition:200ms;
                width:250px;
                height:200px;
               
                `
        })
    }
}
const escapeTitle = new ESCAPE({
    title: '.header__post'
})


class BUTTON {
    constructor(obj) {
        this.el = document.querySelectorAll(obj.link)
        this.open = document.querySelector(obj.button)
        this.el3 = document.querySelector(obj.modal)
        this.close = document.querySelector(obj.button2)
        this.header = document.querySelector(obj.header)
        this.body = document.querySelector(obj.body)

        this.open.addEventListener('click', () => {
            if (this.el3.classList.contains('block__modal')) {
                this.el3.classList.remove('block__modal')
            } else {
                this.el3.classList.add('block__modal')
            }
        })
        this.close.addEventListener('click', () => {
            if (this.el3.classList.contains('block__modal')) {
                this.el3.classList.remove('block__modal')
            } else {
                this.el3
            }
        })
        console.log(this.el3);

        this.el3.addEventListener("click", (e) => {
            if (e.target === e.currentTarget) {
                this.el3.classList.remove('block__modal')
            }
        })
        let menu = document.querySelector(".header__nav")
        let open = document.querySelector(".button__link")
        let header = document.querySelector(".header")
        let closeMenu = document.querySelector('.button__link2');
        open.addEventListener("click", () => {
            menu.classList.add("active")
            document.querySelector('body').classList.add('active')
            header.classList.add("active")
            document.querySelector('header').classList.add('active')
        });
        closeMenu.addEventListener('click', ()=> {
            menu.classList.remove('active')
            document.querySelector('body').classList.remove('active')
            header.classList.remove('active')
            document.querySelector('header').classList.remove('active')
            
})
        // this.body.addEventListener("click",() => {
        //     if (this.body.classList.contains('body')){
        //         this.body.classList.remove('body')
        //      } else{
        //         this.body.classList.add('active')
        //      }
        // })
        // console.log(this.body);



        // open.addEventListener("click", () => {
        //     menu.classList.add("active")
        //     document.querySelector('body').classList.add('active')
        // });

        // closeMenu.addEventListener('click', ()=> {
        //     menu.classList.remove('active')
        //     document.querySelector('body').classList.remove('active')

        // })

    }
}

const links = new BUTTON({
    link: '.header__menu-link', //links
    button: '.button__link',     //open
    modal: '.header__menu',
    button2: '.button__link2',
    header: '.header',
    // body:'.body'
})



