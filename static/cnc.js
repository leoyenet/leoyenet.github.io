const insertText = (text) => {
    const paragraph = document.querySelector('#code');

    paragraph.innerHTML = text;
}


const beginning = () => {
    let tool = prompt("Tool type").toUpperCase()
    let trans_x = prompt("Trans x")
    let trans_y = prompt("Trans y")
    let trans_z = prompt("Trans z")
    const code = 
            `G54
            TRANS X${trans_x} Y${trans_y} Z${trans_z}
            G94 S500 F200 M3
            ${tool} M5
            `
    console.log(code)
    insertText(code.replaceAll("\n", "<br>"))
    // return code
}

const question = () => {
    const ask = prompt("is l=w (type Y or N)").toUpperCase()
    if (ask == "N") {
        const length_1 = Number(prompt("Length-1"))
        const length_2 = Number(prompt("Length-2"))
        const length_3 = Number(prompt("Length-3"))
        const length_4 = Number(prompt("Length-4"))
        return [true, length_1, length_2, length_3, length_4, length]
    } else {
        const length = Number(prompt("length"))
        const length_1 = length
        const length_2 = length
        const length_3 = length
        const length_4 = length
        return [false, length_1, length_2, length_3, length_4, length]
    }
}

const stair = () => {
    const length = Number(prompt("length")) //question()
    const distance = Number(prompt("distance"))
    const depth = Number(prompt("depth"))
    const radius = (Number(prompt("Fi of tool"))) / 2
    const number = length + (radius - distance)
    const code =
        
                `G0 X${number} Y${number + radius} Z25
                G1 Z${0 - depth}
                G1 Y${0 - number}
                G1 X${0 - number}
                G1 Y${number}
                G1 X${number}
                G1 Z10
                G0 Z30
                `
    console.log(code)
    insertText(code.replaceAll("\n", "<br>"))
}

const start_cut = () => {

    const code =
        
    `;za x,y = 30
    G0 X10 Y25 Z20
    G0 X15 Y55
    G1 Z0
    G1 Y-55
    G1 X-15
    G1 Y55
    G0 Z10
    G0 X10 Y25 Z50
    `

    console.log(code)
    insertText(code.replaceAll("\n", "<br>"))
}

const make_circle = () => {
    const length = Number(prompt("length"))
    // const distance = Number(prompt("distance"))
    const depth = Number(prompt("depth"))
    const radius = (Number(prompt("Fi of tool"))) / 2
    const number = length + radius
    const code = 
       `G0 X${number} Y0 Z20
        G1 Z${depth}
        G2 X0 Y${0 - number} Z${depth} CR=${number}
        G2 X${0 - number} Y0 Z${depth} CR=${number}
        G2 X0 Y${number} Z${depth} CR=${number}
        G2 X${number} Y0 Z${depth} CR=${number}
    `
    console.log(code)
    insertText(code.replaceAll("\n", "<br>"))
}

const copyElementText = (id) => {
    var text = document.getElementById(id).innerText;
    var elem = document.createElement("textarea");
    document.body.appendChild(elem);
    elem.value = text;
    elem.select();
    document.execCommand("copy");
    document.body.removeChild(elem);
}

const help = () => {
    let displayStatus = document.getElementById('buttons');
    if (displayStatus.style.display == 'none') {
        displayStatus.style.display = 'block';
        insertText("")
    } else {
        displayStatus.style.display = 'none';
        let insertedText = 
        `Length = Length-1 = Length-2 = Length-3 =Length-4
        extra = Is extra material for starting cut (<=1mm)
        distance = Distance from edge to cut off.
        fi of tool = Diameter of the tool.
        depth = Depth of cutting; Note: You have to use (-).
        
        
        `
        insertText(insertedText.replaceAll("\n", "<br>"))
    }

}
