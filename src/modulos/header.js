import { gsap } from 'gsap';

const headerArrow1 = document.getElementById('headerArrow1');
const headerArrow2 = document.getElementById('headerArrow2');

const cssIcon = document.getElementById('cssIcono');
const gitIcono = document.getElementById('gitIcono');
const htmlIcono = document.getElementById('htmlIcono');
const jsIcono = document.getElementById('jsIcono');
const reactIcono = document.getElementById('reactIcono');
const sassIcono = document.getElementById('sassIcono');
const webPackIcono = document.getElementById('webPackIcono');

export function header() {
    let headerArrow = gsap.timeline({
        defaults: { repeat: -1, delay: 2, duration: 5, ease: "power1.inOut" }
    })

    headerArrow.to(headerArrow1, {
        fill: "#02D28F",
    })

    headerArrow.to(headerArrow2, {
        fill: "#02D28F",
    }, '<')

    let headerIcons = gsap.timeline({
        defaults: { repeat: -1, delay: 1, ease: "bounce", yoyo: true, opacity:"0.4" }
    })

    headerIcons.to(cssIcon, {
        y: "35vh",
        x: "70vw",
        duration: 3,
    });
    headerIcons.to(gitIcono, {
        y: "35vh",
        x: "-70vw",
        duration: 4,
    },"<0.2")
    headerIcons.to(htmlIcono, {
        y: "10vh",
        x: "70vw",
        duration: 3,
    },"<0.2")
    headerIcons.to(jsIcono, {
        y: "75vh",
        x: "0",
        duration: 4,
    },"<0.2")
    headerIcons.to(reactIcono, {
        y: "-75vh",
        x: "20vw",
        duration: 3,
    },"<0.2")
    headerIcons.to(sassIcono, {
        y: "-40vh",
        x: "-20vw",
        duration: 4,
    },"<0.2")
    headerIcons.to(webPackIcono, {
        y: "-50vh",
        x: "-60vw",
        duration: 4,
    },"<0.2")

}