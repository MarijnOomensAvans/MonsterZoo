export class WeatherView {

    constructor() {
        this.img = document.getElementById('weatherimg');
        this.temp = document.getElementById('temp');
        this.rain = false;

        this.initRainSwitch();
    }

    initRainSwitch() {
        let rainswitch = document.getElementById('rainswitch');
        let ownclass = this;
        rainswitch.addEventListener("click", (e) => {
            e.preventDefault();
            if(ownclass.rain) {
                ownclass.updateWeather(ownclass.temperature, "Clear");
                ownclass.rain = false;
            } else {
                ownclass.updateWeather(ownclass.temperature, "Rain");
            }
        });
    }

    updateWeather(temp, rain) {
        this.temperature = temp;
        this.temp.innerText = `${temp}° Celcius`;


        if(rain === 'Rain' || rain === 'Shower rain') {
            this.rain = true;
            if(document.getElementById('rain') === null) {
                let canvas = document.createElement('canvas');
                canvas.setAttribute('id', 'rain');
                document.getElementById('map').appendChild(canvas);
                this.startRain(300);
            }
        } else {
            let canvas = document.getElementById('rain');
            if(canvas !== null) {
                canvas.parentNode.removeChild(canvas);
            }
        }
    }

    // Function for initiating rain canvas

    startRain(maxParts) {
        let canvas = document.getElementById("rain");

        if (canvas.getContext) {
            let ctx = canvas.getContext('2d');
            let w = canvas.width;
            let h = canvas.height;
            ctx.strokeStyle = 'rgba(46,86,147,0.3)';
            ctx.lineWidth = 0.7;
            ctx.lineCap = 'round';


            let init = [];
            for (let a = 0; a < maxParts; a++) {
                init.push({
                    x: Math.random() * w,
                    y: Math.random() * h,
                    l: Math.random() * 1,
                    xs: -4 + Math.random() * 4 + 2,
                    ys: Math.random() * 10 + 10
                })
            }

            let particles = [];
            for (let b = 0; b < maxParts; b++) {
                particles[b] = init[b];
            }

            let draw = () => {
                ctx.clearRect(0, 0, w, h);
                for (let c = 0; c < particles.length; c++) {
                    let p = particles[c];
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(p.x + p.l * p.xs, p.y + p.l * p.ys);
                    ctx.stroke();
                }
                move();
            }

            let move = () => {
                for (let b = 0; b < particles.length; b++) {
                    let p = particles[b];
                    p.x += p.xs;
                    p.y += p.ys;
                    if (p.x > w || p.y > h) {
                        p.x = Math.random() * w;
                        p.y = -20;
                    }
                }
            }

            setInterval(draw, 80);

        }
    }
}