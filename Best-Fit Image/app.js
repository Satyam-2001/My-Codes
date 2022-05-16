const widthDiv = 1240;
const heightDiv = 2150;

const $imageDiv = document.getElementById("imageDiv");
$imageDiv.setAttribute("style", `width:${widthDiv}px ;height:${heightDiv}px`);

console.log($imageDiv);
// console.log(widthDiv, heightDiv);

class bestFitImages {

    constructor(width, height) {

        this.width = width;
        this.height = height;
        console.log(width);
        this.corners = [[0, 0]];
        this.verticalLines = [];
        this.horizontalLines = [];
    }

    isBetween = (p, x1, x2) => {
        return ((p > x1) && (p < x2)) || ((p < x1) && (p > x2));
    }

    isIntersected(line1, line2) {
        return (this.isBetween(line1[0], line2[1], line2[2]) && this.isBetween(line2[0], line1[1], line1[2]));
    }

    isSpaceAvailable(p, width, height) {

        if (p[0] + width > this.width || p[1] + height > this.height) {
            return false;
        }

        const verticalLine1 = [p[0] + width, p[1], p[1] + height];
        const verticalLine2 = [p[0], p[1], p[1] + height];
        const horizontalLine1 = [p[1] + height, p[0], p[0] + width];
        const horizontalLine2 = [p[1], p[0], p[0] + width];

        for (let line of this.horizontalLines) {
            if (this.isIntersected(verticalLine1, line) || this.isIntersected(verticalLine2, line)) {
                return false;
            }
        }

        for (let line of this.verticalLines) {
            if (this.isIntersected(horizontalLine1, line) || this.isIntersected(horizontalLine2, line)) {
                return false;
            }
        }

        this.verticalLines.splice(this.verticalLines.length, 0, verticalLine1, verticalLine2)
        this.horizontalLines.splice(this.horizontalLines.length, 0, horizontalLine1, horizontalLine2)

        return true;
    }


    fitImage(width, height) {
        console.log(width, height);
        for (let i = 0; i < this.corners.length; i++) {
            if (this.isSpaceAvailable(this.corners[i], width, height)) {
                const point1 = [this.corners[i][0] + width, this.corners[i][1]];
                const point2 = [this.corners[i][0], this.corners[i][1] + height];
                // console.log(point1, point2);
                this.verticalLines.push([this.corners[i][0], this.corners[i][1], point1[1]]);
                this.horizontalLines.push([this.corners[i][1], this.corners[i][0], point2[0]]);
                // console.log(this.corners);
                return this.corners.splice(i, 1, point1, point2)[0];
            }
        }
        return null;
    }

    addImage(path) {
        let img = document.createElement('img');
        img.src = path;
        // console.log(`${img.clientWidth} , ${img.clientHeight}`);
        const position = this.fitImage(img.naturalWidth, img.naturalHeight);
        if (position !== null) {
            img.setAttribute("style", `position: absolute; width : ${img.naturalWidth}px; height : ${img.naturalHeight}px; left : ${position[0]}px; top: ${position[1]}px;`);
            $imageDiv.appendChild(img);
            console.log(position);
        }
    }
};

fetch('./data.json')
    .then(response => response.json())
    .then(data => {
        const imagesPath = data['path'];
        const create = () => {
            $imageDiv.innerHTML = '';
            const obj = new bestFitImages(widthDiv, heightDiv)
            for (let i of imagesPath) {
                obj.addImage(i);
            }
        }

        // window.addEventListener("resize", create);
        create();
    })